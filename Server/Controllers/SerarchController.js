import PublisPost from '../Models/PublishPost'

const handleSerach = async (req, res) => {
    const query = req.query
    try {
        const searchFilter = {
            title: { $regex: query.search, options: "i" }
        }
        const posts = await PublisPost.find(query.search ? searchFilter : null)
        res.status(200).json(posts)
    }
    catch (err) {
        res.status(500).json(err)
        console.log(err)
    }

}

export default handleSerach