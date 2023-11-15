import React from 'react'

function Search() {
    return (
        <>
            <div className='flex justify-center mt-10'>
                <input className='pl-3 py-3 w-96 rounded-l hover:text-gray-600 font-semibold' type="text" placeholder='Serach here' />
                <button className='  w-20 text-2xl bg-emerald-500 rounded-r font-semibold hover:bg-emerald-400'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </>
    )
}

export default Search