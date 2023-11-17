import axios from 'axios';
import React, { useState } from 'react'
import showToastMessage from '../../hooks/ToastMessage';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function Register() {

    const [fullName, setfullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate();

    const handleRegistaion = () => {
        if (fullName && email && password) {
            axios.post('http://localhost:8000/register', { fullName, email, password })
                .then((res) => {
                    showToastMessage(res.data.message)
                    setTimeout(() => {
                        nav('/login')
                    }, 3000);
                })
                .catch((error) => {
                    showToastMessage(error.response.data.message, true)
                })
        }
        else {
            showToastMessage("Enter Valid Credentials", true)
        }
    }

    return (
        <>
            <ToastContainer />
            <div className='flex justify-center items-center m-20 md:mt-30 h-96 '>
                <div className='flex flex-col py-6 px-5 w-[400px]  bg-slate-500 rounded-md'>
                    <h1 className='text-3xl font-semibold text-center'>Regsiter</h1>
                    <label className='font-semibold' htmlFor="">Full Name:</label>
                    <input className='px-3 py-3 rounded-md outline-none font-semibold' type="text" onChange={e => (setfullName(e.target.value))} />
                    <label className='font-semibold' htmlFor="">Email:</label>
                    <input className='px-3 py-3 rounded-md outline-none font-semibold' type="email" onChange={e => (setEmail(e.target.value))} />
                    <label className='font-semibold' htmlFor="">Password:</label>
                    <input className='px-3 py-3 rounded-md outline-none font-semibold' type="password" onChange={e => (setPassword(e.target.value))} />
                    <div className='flex justify-center'>
                        <button onClick={handleRegistaion} className='bg-slate-100 w-60 py-3 rounded-full mt-3 font-semibold text-xl hover:bg-slate-300'>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register