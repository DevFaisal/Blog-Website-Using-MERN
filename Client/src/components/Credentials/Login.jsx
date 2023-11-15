import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import showToastMessage from '../../hooks/ToastMessage';
import { useNavigate } from "react-router-dom";
function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate();

    const logIn = () => {
        if (email && password) {
            axios.post('http://localhost:8000/login', { email, password })
                .then((res) => {
    
                    nav('/home')

                })
                .catch((error) => {
                    showToastMessage(error.response.data.message, true)
                })
        }
        else {
            showToastMessage("Enter Details", true)
        }
    }

    return (
        <>
            <ToastContainer />
            <div className='flex justify-center items-start mt-32 h-96'>
                <div className='flex flex-col py-6 px-5 w-[400px]  bg-emerald-500 rounded-md'>
                    <h1 className='text-3xl font-semibold text-center'>Login</h1>
                    <label className='font-semibold' htmlFor="">Email:</label>
                    <input className='px-3 py-3 rounded-md font-semibold' type="email" value={email} onChange={e => (setEmail(e.target.value))} />
                    <label className='font-semibold' htmlFor="">Password:</label>
                    <input className='px-3 py-3 rounded-md font-semibold' type="password" value={password} onChange={e => (setPassword(e.target.value))} />
                    <div className='flex justify-center'>
                        <button onClick={logIn} className='bg-emerald-100 w-60 py-3 rounded-full mt-3 font-semibold text-xl hover:bg-emerald-300'>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login