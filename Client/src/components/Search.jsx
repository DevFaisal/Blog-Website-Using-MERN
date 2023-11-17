import React from 'react'

function Search() {
    return (
        <>
            <div className='flex justify-center mt-36'>
                <input className='pl-3 py-3 md:w-96 rounded-l bg-slate-300 outline-none hover:text-gray-600 font-semibold' type="text" placeholder='Serach here' />
                <button className='  w-20 text-2xl bg-slate-500 rounded-r font-semibold hover:bg-slate-400'><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </>
    )
}

export default Search