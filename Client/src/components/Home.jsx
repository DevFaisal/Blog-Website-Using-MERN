import React from "react";
import Search from "./Search";
import { Link } from 'react-router-dom';
import axios from "axios"


function Home() {

    return (
        <>
            <Search />
            <div className="grid grid-cols-3 h-auto gap-7 shadow-md pl-7 pt-20">
                <div className="bg-emerald-200 w-96 rounded-md hover:translate-y-2 duration-200 hover:cursor-pointer">
                    <img className="rounded-t-md"
                        src="https://images.pexels.com/photos/5779600/pexels-photo-5779600.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                    />
                    <h1 className="text-2xl font-bold py-4 text-center">Lorem ipsum dolor sit amet</h1>
                    <p className="p-3 text-emerald-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                        dolore est explicabo excepturi repudiandae ullam ea quisquam! Neque,
                        esse voluptatum?
                    </p>
                    <div className="flex justify-end pb-2 px-4">
                        <Link className="px-5 py-2 text-white text-sm font-semibold bg-emerald-950 rounded-md border-1" to={'/post'}>Read</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
