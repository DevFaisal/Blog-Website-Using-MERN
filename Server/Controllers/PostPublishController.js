import Blogs from '../Models/PublishPost.js'


const handlePublish = async (req, res) => {
    const { title, content } = req.body

    try {
        const result = await Blogs.create({
            title,
            content
        })

        res.status(200).json({ message: "Published Successfully" })
        console.log("Published Successfully", result);
    }
    catch (error) {
        res.status(409).json({ message: "Error Occured" })
        console.log("Error", error);
    }
}

const handleBlogs = async (req, res) => {
    try {
        const allBlogs = await Blogs.find();
        res.status(200).json(allBlogs);
        console.log(allBlogs)
    }
    catch (err) {
        console.log(err)
    }
}


export { handlePublish, handleBlogs }