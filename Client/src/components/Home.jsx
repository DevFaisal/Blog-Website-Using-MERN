import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const image = "https://images.unsplash.com/photo-1606636660488-16a8646f012c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <>
            <div className='h-[50%]'>
                <div
                    className="bg-cover bg-fixed w-full h-[600px]"
                    style={{
                        backgroundImage: `url('${image}')`,
                    }}
                >
                    <div className='flex flex-col gap-6 justify-center items-center pt-40'>
                        <h1 className='text-4xl font-semibold'>Publish your passions, your way</h1>
                        <h3 className='text-slate-500'>Create a unique and beautiful blog easily.</h3>
                        <Link to={'/login'}><button className='px-4 py-3 outline-none hover:bg-orange-600 bg-orange-500 rounded-md text-sm font-semibold text-white'>CREATE YOUR BLOG</button></Link>
                    </div>
                </div>
                <div className="w-full bg-slate-300">
                    <div className='w-[50%] justify-start p-20 items-center'>
                        <div className='flex flex-col gap-5 '>
                            <h1 className='text-5xl font-semibold'>Choose the perfect design</h1>
                            <h3 className='text-slate-500 text-xl text-justify'>Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.</h3>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-slate-200">
                    <div className='flex justify-end p-20'>
                        <div className='flex w-[50%] items-start  flex-col gap-5 '>
                            <h1 className='text-5xl font-semibold'>Know your audience</h1>
                            <h3 className='text-slate-500 text-xl text-justify'>Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.</h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home