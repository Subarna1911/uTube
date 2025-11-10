import React from 'react'
import logo from '../assets/YtLogo.png'
import {Menu, Search, User} from 'lucide-react'
import  {useDispatch} from 'react-redux'
import { useState, useEffect } from 'react'
import { toggleMenu } from '../app/navSlice'
import {Link} from 'react-router-dom'

const Header = () => {

  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  
  const handleClick = ()=>{
    dispatch(toggleMenu());
  }
  
  return (
    <div className='max-w-screen py-3 md:py-5 bg-slate-100 shadow-2xl border-b-slate-400 border-b-[0.1px]'>
      <div className='container mx-auto px-6 md:px-8'>
        <div className='flex md:flex-row flex-col justify-between items-center '>
          <div className='flex items-center gap-4'>
            <Menu className='cursor-pointer' onClick={handleClick} size={20}/>
            <Link to='/' ><img className='md:w-28 w-24 object-contain' src={logo} alt="logo" /></Link>
          </div>

          <div className='relative flex items-center'>
            <input className='md:w-xl sm:w-sm w-80 border border-gray-200 rounded-full py-2 px-3 outline-none' value={query} onChange={(e)=>setQuery(e.target.value)} type="text" placeholder='search' />
            <div className='absolute right-1 bg-gray-900 py-2  px-3 text-white rounded-r-full hover:cursor-pointer'>
                 <Search size={20}/>
            </div>
           
          </div>
          
          <div>
            <User size={20}/>
          </div>
        </div>
        
      </div>
    
      
    </div>
  )
}

export default Header
