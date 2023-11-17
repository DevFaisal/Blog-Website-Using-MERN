import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from './Menu'
import { UserContext } from '../Context/UserContext'


function NavBar() {


    const { User } = useContext(UserContext)
    const [menu, setMenu] = useState(false)

    const showMenu = () => {
        setMenu(!menu)
    }


    return (
        <div>

            <div className="fixed top-0 flex justify-between items-center w-full p-3 bg-slate-900 text-white">
                <div className='flex gap-2'>
                    <p className='text-3xl text-orange-500'><i className="fa-solid fa-blog"></i></p>
                    <h1 className='text-3xl font-semibold'><span className='text-orange-500'>Byte</span>BurstBlog</h1>
                </div>
                <button className='md:hidden' onClick={showMenu}> <i className="fa-solid fa-bars"></i></button>
                <ul className='hidden md:flex font-semibold text-md gap-3'>
                    {User && <NavLink to={'/allBlogs'}> <li>Home</li></NavLink>}
                    {User && <NavLink to={'/write'}> <li>Write</li></NavLink>}
                    {User && <NavLink to={'/home'}> <li>Logout</li></NavLink>}
                    {!User && <NavLink to={'/login'}> <li>Login</li></NavLink>}
                    {!User && <NavLink to={'/register'}> <li>Register</li></NavLink>}
                </ul>
            </div>

            {menu && <Menu />}

        </div>
    )
}

export default NavBar