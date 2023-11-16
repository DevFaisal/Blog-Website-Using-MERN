import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Search from "./Search";


function Home() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/blogs')
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
            });
    }, []);

    return (
        <>
            <Search />

            <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-flow-row gap-4 p-20 shadow-md">
                {blogs.map((blog, index) => (
                    <div key={index} className="bg-teal-200 w-72 h-auto rounded-md hover:translate-y-2 duration-200 cursor-pointer">
                        <img
                            className="rounded-t-md"
                            src="https://images.pexels.com/photos/5779600/pexels-photo-5779600.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                        />
                        <h1 className="text-2xl font-bold py-4 text-center">{blog.title}</h1>
                        <p className="p-3 text-emerald-900 h-20 overflow-hidden pb-5">
                            {blog.content.slice(0, 70)}...
                        </p>
                        <div className="flex justify-end pb-2 px-4">
                            <Link to={`/blog/${blog._id}`} className="px-5 py-2 text-white text-sm font-semibold bg-emerald-950 rounded-md border-1">
                                Read
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}

export default Home;
