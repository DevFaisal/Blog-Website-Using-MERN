import React, { useContext, useState } from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import showToastMessage from '../../hooks/ToastMessage';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../Context/UserContext';
function Login() {

    const { SetUser } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const nav = useNavigate();

    const logIn = () => {


        if (!email && !password) showToastMessage("Enter Details", true)
        try {
            axios.post('http://localhost:8000/login', { email, password }, { withCredentials: true })
                .then((res) => {
                    SetUser(true)
                    nav('/allBlogs')
                })
                .catch((error) => {
                    showToastMessage(error, true)
                })
        }
        catch (err) {
            showToastMessage(err, true)
        }
    }

    return (
        <>
            <ToastContainer />
            <div className='flex justify-center items-center m-20 md:mt-30 h-96 '>
                <div className='flex flex-col py-6 px-5 w-[400px]  bg-slate-500 rounded-md'>
                    <h1 className='text-3xl font-semibold text-center'>Login</h1>
                    <label className='font-semibold' htmlFor="">Email:</label>
                    <input className='px-3 py-2 md:py-3 rounded-md font-semibold outline-0' type="email" value={email} onChange={e => (setEmail(e.target.value))} />
                    <label className='font-semibold' htmlFor="">Password:</label>
                    <input className='px-3 py-2 md:py-3 rounded-md font-semibold outline-0' type="password" value={password} onChange={e => (setPassword(e.target.value))} />
                    <div className='flex justify-center'>
                        <button onClick={logIn} className='bg-slate-100 w-60 py-2 md:py-3 rounded-full mt-3 font-semibold text-xl hover:bg-slate-300'>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login