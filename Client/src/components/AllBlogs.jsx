import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Search from "./Search";
import { BlogContext } from "../Context/BlogsContext";


function AllBlogs() {
    const { blogs } = useContext(BlogContext)
    return (
        <>
            <Search />

            <div className="grid md:grid-cols-2 flex-col gap-4 p-10 md:p-20 shadow-md ">
                {blogs.map((blog, index) => (
                    <div key={index} className="flex w-[100%] bg-slate-300 h-68 rounded-md hover:translate-y-2 duration-200 cursor-pointer">
                        <div className="flex">
                            <img
                                className="fit rounded-l-md object-cover w-72 h-60"
                                src="https://images.pexels.com/photos/8807476/pexels-photo-8807476.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                alt=""
                            />
                        </div>
                        <div className=" rounded-md w-full flex gap-5 flex-col items-end p-5 justify-between">
                            <div>
                                <h1 className="md:text-3xl text-md font-bold px-3 text-center">{blog.title}</h1>
                                <p className="hidden lg:flex p-3 text-slate-900 text-sm md:text-md w-full ">
                                    {blog.content.slice(0, 70)}...
                                </p>
                            </div>
                            <div className="">
                                <Link to={`/blog/${blog._id}`} className="px-5 py-2 text-white text-sm font-semibold bg-slate-950 rounded-md border-1">
                                    Read
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}

export default AllBlogs;
