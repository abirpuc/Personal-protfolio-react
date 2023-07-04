import React, { useState } from 'react';
import { HiMenu, HiX} from "react-icons/hi";
const Navbar = () => {
    const[toggle, setToggle] = useState(false);

    const handleToggle = (toggle) =>{
        setToggle(toggle)
    }

    return (
        <div className='text-white flex justify-between items-center px-4 h-24 max-w-[1240px] mx-auto'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>MHABIR..</h1>
            <ul className="hidden md:flex">
                <li className='p-4 text-xl font-bold'>Home</li>
                <li className='p-4 text-xl font-bold'>Company</li>
                <li className='p-4 text-xl font-bold'>Resource</li>
                <li className='p-4 text-xl font-bold'>Contents</li>
            </ul>
            <div onClick={()=>handleToggle(!toggle)} className='block md:hidden'>
                {
                    !toggle ? <HiMenu size={30}/> : <HiX size={30}/>
                }
            </div>
            <div className={toggle ?'flex absolute left-0 top-0 w-[60%] h-full border-r-gray-500 ease-in-out duration-500': 'flex absolute left-[-100%] top-0 ease-in-out duration-500'}>
                <ul className='pt-20 w-[60%] uppercase border-r pr-4'>
                    <li className="p-4 border-b">Home</li>
                    <li className="p-4 border-b">Company</li>
                    <li className="p-4 border-b">Resource</li>
                    <li className="p-4 border-b">About</li>
                    <li className="p-4 border-b">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;