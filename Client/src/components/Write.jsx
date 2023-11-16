import React, { useState } from 'react'
import axios from 'axios';
import showToastMessage from '../hooks/ToastMessage';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";


function Write() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const nav = useNavigate();


    const handlePublish = () => {
        if (title && content) {
            axios.post('http://localhost:8000/write', { title, content })
                .then((res) => {
                    showToastMessage(res.data.message)
                    setTimeout((e) => {
                        nav('/home')
                    }, 4000)


                }).catch((error) => {
                    showToastMessage(error.response.message, true)
                })
        }
        else {
            showToastMessage("Fill all the Fields", true)
        }
    }




    return (
        <>
            <ToastContainer />
            <div className='flex flex-col items-center gap-3 mt-10 text-white font-bold justify-center pt-20text-white'>
                <h1 className='text-3xl pt-4'>Write Your Blog</h1>
                <p className='w-96 h-0.5 bg-gray-500'></p>
                <p>
                    <span className='pl-3 text-xl'> <i class="fa-solid fa-plus"></i></span>
                    <input className='text-2xl bg-emerald-950 font-semibold border-none w-96 px-3 py-2 outline-none' type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                </p>
                <textarea className='font-semibold bg-emerald-950 border-none outline-none w-[500px] h-80 text-xl' type="text" placeholder='Tell your Story...' value={content} onChange={e => setContent(e.target.value)}></textarea>
                <button onClick={handlePublish} className='px-4 py-2 text-md font-semibold text-black rounded-md bg-emerald-400'>Publish</button>
            </div>
        </>
    )
}

export default Write