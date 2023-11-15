import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
    return (
        <div>

            <div className="flex justify-between items-center w-full p-5 bg-emerald-600 text-white">
                <h1 className='text-4xl font-semibold'>Byte</h1>
                <ul className='font-semibold flex text-xl gap-3'>
                    <NavLink to={'/home'}> <li>Home</li></NavLink>
                    <NavLink to={'/login'}> <li>Login</li></NavLink>
                    <NavLink to={'/regsiter'}> <li>Register</li></NavLink>
                </ul>
            </div>

        </div>
    )
}

export default NavBar