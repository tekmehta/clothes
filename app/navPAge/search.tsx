import React from "react";
import { FaSearch } from "react-icons/fa";

const Search =() =>{
    return(
        <>
            <div className="container-fluid px-1 w-full flex justify-center items-center mt-4 bg-blue-200 p-2">
                <div className="relative w-full max-w-lg">
                    <input className="w-full p-3 pl-12 rounded-full shadow-md bg-gray-50 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all" type="text" placeholder="Search for clothes..."/>
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <FaSearch size={18} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;