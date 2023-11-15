import React from 'react'

function Post() {


    return (
        <>
            <div className='flex flex-col justify-center items-cente'>
                <div className='p-20'>
                    <div className='bg-cover bg-center overflow-hidden h-80 w-full rounded-md'>
                        <img src="https://images.pexels.com/photos/5779600/pexels-photo-5779600.jpeg?auto=compress&cs=tinysrgb&w=600s" alt="" />
                    </div>
                    <div className='flex justify-end gap-2 p-4 '>
                        <p className='text-red-500'> <i class="fa-solid fa-trash"></i></p>
                        <p className='text-blue-500'><i class="fa-solid fa-pen-to-square"></i></p>

                    </div>
                    <div className='flex justify-between pb-5'>
                        <h1 className='text-gray-500'>Author: <span className='font-semibold'>Faisal Farooq</span></h1>
                        <p className='text-gray-500'>1 hour Ago</p>
                    </div>

                    <h1 className="text-5xl font-bold py-4 text-center mb-5 text-white">Lorem ipsum dolor sit amet</h1>
                    {/* <input className="text-5xl w-full font-bold py-4 bg-emerald-800 text-center mb-5 text-white" type="text" value={"Lorem ipsum dolor sit amet"} /> */}
                    <p className="p-3 text-emerald-50 font-semibold text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                        dolore est explicabo excepturi repudiandae ullam ea quisquam! Neque,
                        esse voluptatum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                        dolore est explicabo excepturi repudiandae ullam ea quisquam! Neque,
                        esse voluptatum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                        dolore est explicabo excepturi repudiandae ullam ea quisquam! Neque,
                        esse voluptatum?
                    </p>
                    {/* <textarea cols={3} rows={6} className="p-3 w-full h-full  bg-emerald-800 text-white font-semibold rounded-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                        dolore est explicabo excepturi repudiandae ullam ea quisquam! Neque,
                        esse voluptatum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                        dolore est explicabo excepturi repudiandae ullam ea quisquam! Neque,
                        esse voluptatum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                        dolore est explicabo excepturi repudiandae ullam ea quisquam! Neque,
                        esse voluptatum?
                    </textarea>
                    <div className='flex justify-end'>
                        <button className='py-3 px-4 font-semibold rounded-full bg-emerald-500'>Update</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Post