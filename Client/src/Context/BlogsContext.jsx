import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BlogContext = createContext({})

export function BlogContextProvider({ children }) {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/blogs')
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
            });
    }, [blogs]);


    return (
        <BlogContext.Provider value={{ blogs }}>
            {children}
        </BlogContext.Provider>
    )
}