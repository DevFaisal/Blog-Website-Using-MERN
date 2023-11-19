import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from "react-router-dom";
import axios from 'axios'


function NavBar() {

    const { User, SetUser } = useContext(UserContext)
    const [menu, setMenu] = useState(false)
    const nav = useNavigate()

    const showMenu = () => {
        setMenu(!menu)
    }

    const logOut = async () => {
        try {
            const res = await axios.get('http://localhost:8000/logout', { withCredentials: true });
            console.log(res);
            SetUser(false);
            nav("/home");
        } catch (err) {
            console.error("Logout error:", err);
        }
    };

    return (
        <div>

            <div className="fixed top-0 flex justify-between items-center w-full p-3 bg-slate-900 text-white">
                <div className='flex gap-2'>
                    <p className='text-3xl text-orange-500'><i className="fa-solid fa-blog"></i></p>
                    <h1 className='text-3xl font-semibold'><span className='text-orange-500'>Byte</span>BurstBlog</h1>
                </div>
                <button className='md:hidden' onClick={showMenu}> <i className="fa-solid fa-bars"></i></button>
                <ul className='hidden md:flex font-semibold text-md gap-3'>
                    {User && <NavLink to={'/allBlogs'}> <li>Blogs</li></NavLink>}
                    {User && <NavLink to={'/write'}> <li>Write</li></NavLink>}
                    {User && <NavLink> <li onClick={logOut}>Logout</li></NavLink>}
                    {User && <li className='ring-2 text-orange-400 px-2 rounded-md'>{User.fullName}</li>}
                    {!User && <NavLink to={'/home'}> <li>Home</li></NavLink>}
                    {!User && <NavLink to={'/login'}> <li>Login</li></NavLink>}
                    {!User && <NavLink to={'/register'}> <li>Register</li></NavLink>}
                </ul>
            </div>

            {menu && <div>
                <ul className='font-semibold text-md gap-3 w-[30%] bg-slate-900 border-2 border-orange-500 absolute space-y-10 text-white text-center h-auto right-6 top-10 rounded-md'>
                    {User && <NavLink to={'/allBlogs'}> <li>Blogs</li></NavLink>}
                    {User && <NavLink to={'/write'}> <li>Write</li></NavLink>}
                    {User && <NavLink> <li onClick={logOut}>Logout</li></NavLink>}
                    {!User && <NavLink to={'/home'}> <li>Home</li></NavLink>}
                    {!User && <NavLink to={'/login'}> <li>Login</li></NavLink>}
                    {!User && <NavLink to={'/register'}> <li>Register</li></NavLink>}
                </ul>
            </div>}

        </div>
    )
}

export default NavBar