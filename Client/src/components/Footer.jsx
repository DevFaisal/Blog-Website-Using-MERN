import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>

            <div className='md:grid grid-cols-2 p-10   w-full bg-slate-900 h-[70%] text-white'>
                <div className='flex flex-col gap-4'>

                    <Link to={'/home'}>
                        <p className='text-6xl text-orange-500'><i className="fa-solid fa-blog"></i></p>
                        <h1 className='text-4xl font-bold'><span className='text-orange-500'>Byte</span>BurstBlog</h1>
                    </Link>
                    <p className='text-slate-400 md:text-md text-sm '><span className='font-semibold'>©2023</span>  all rights reserved</p>
                    <p className='text-slate-400 md:text-md text-sm '>Contact: dfaisal59@email.com | Follow us: <Link>Twitter</Link></p>
                </div>
                <div>
                    <ul className='text-slate-300 md:text-md text-sm'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div> <p className='text-center md:text-sm text-[12px] bg-slate-900 text-slate-400'>Site Credits: Developed by <span className='font-semibold'><Link to={"www.devfaisal.netlify.app"}>Faisal</Link></span></p></div>
            </div>

        </>
    )
}

export default Footer