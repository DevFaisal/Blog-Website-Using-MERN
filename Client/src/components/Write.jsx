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
            <div className='flex flex-col items-center gap-3 mt-20 md:mt-36 m-10 font-bold justify-center'>
                <h1 className='text-2xl md:text-4xl pt-4'>Write Your Blog</h1>
                <p className='w-40 md:w-96 h-0.5 bg-gray-500'></p>
                <p>
                    <span className='pl-10 md:pl-3 text-xl'> <i className="fa-solid fa-plus"></i></span>
                    <input className='text-2xl w-56 text-orange-800 bg-slate-100 font-bold border-none md:w-96 px-3 py-2 outline-none' type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                </p>
                <textarea className='font-semibold bg-slate-300 rounded-md p-2 text-md border-none outline-none w-80 md:w-[500px] h-80' type="text" placeholder='Tell your Story...' value={content} onChange={e => setContent(e.target.value)}></textarea>
                <button onClick={handlePublish} className='px-4 py-2 text-md font-semibold text-black rounded-md bg-slate-400'>Publish</button>
            </div>
        </>
    )
}

export default Write