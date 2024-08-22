import React, { useState } from 'react'
import { FaDumbbell } from "react-icons/fa";
import { NavbarMenu } from '../Mock/data';

import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { PiShoppingCart } from "react-icons/pi";
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';
function Navbar() {
    const [open,setopen]=useState(false)
  return (
<>
        <nav>
          <div className='container flex justify-between items-center py-8'>
           <div className='text-2xl flex items-center gap-3 font-bold  uppercase'>
            <FaDumbbell/>
            <p>Coders</p>
            <p className='text-secondary'>Gym</p>
           </div>
           <div className='hidden md:block'>
                <ul className='flex items-center gap-6 text-gray-600'>
                    {NavbarMenu.map((item)=>(
                        <li key={item.id} className='inline-block py-1 px-3 hover:text-primary hover:text-primary font-semibold'>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
            <div className='flex items-center gap-4'>
                <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
<CiSearch className=''/>
                </button>
                <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
<PiShoppingCart className=''/>
                </button>
                {/* <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
<IoMdMenu className=''/>
                </button> */}

<div className='md:hidden'onClick={()=>setopen(!open)}>
     <MdMenu className='text-4xl'/>
   </div>

                <button className='hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-4 py-2'>
                    Login
                </button>
            </div>
          </div>
          </div>
        </nav>

        <ResponsiveMenu open={open}/>
    
</>
  )
}

export default Navbar
