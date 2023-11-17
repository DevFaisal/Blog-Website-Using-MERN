import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

function Menu() {
    const { User } = useContext(UserContext);
    return (
        <>
            <ul className='font-semibold text-md gap-3 w-[30%] bg-slate-900 border-2 border-orange-500 absolute space-y-10 text-white text-center h-auto right-6 top-10 rounded-md'>
                {User && <NavLink to={'/home'}> <li>Home</li></NavLink>}
                {User && <NavLink to={'/write'}> <li>Write</li></NavLink>}
                {User && <NavLink to={'/'}> <li>Logout</li></NavLink>}
                {!User && <NavLink to={'/login'}> <li>Login</li></NavLink>}
                {!User && <NavLink to={'/register'}> <li>Register</li></NavLink>}
            </ul>
        </>
    );
}

export default Menu;
