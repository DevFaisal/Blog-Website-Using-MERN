import React from 'react'

function Register() {
    return (
        <>
            <div className='flex justify-center items-start mt-32 h-96'>
                <div className='flex flex-col py-6 px-5 w-[400px]  bg-emerald-500 rounded-md'>
                    <h1 className='text-3xl font-semibold text-center'>Regsiter</h1>
                    <label className='font-semibold' htmlFor="">Full Name:</label>
                    <input className='px-3 py-3 rounded-md font-semibold' type="text" />
                    <label className='font-semibold' htmlFor="">Email:</label>
                    <input className='px-3 py-3 rounded-md font-semibold' type="email" />
                    <label className='font-semibold' htmlFor="">Password:</label>
                    <input className='px-3 py-3 rounded-md font-semibold' type="password" />
                    <div className='flex justify-center'>
                        <button className='bg-emerald-100 w-60 py-3 rounded-full mt-3 font-semibold text-xl hover:bg-emerald-300'>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register