import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Cartpage from './Cartpage';

const Navbars = () => {
    let vitearray = JSON.parse(localStorage.getItem('vitecart'))|| [] 

  return (
    <div>
      <div className="header w-screen flex justify-between shadow-xl bg-white z-10 p-1">
    <div className="logos my-auto">
      <img src="https://vitejs.dev/logo-with-shadow.png" alt="" className='w-10 my-auto ml-5'/>
    </div>
    <div className="navbar w-1/2 my-auto" >
      <ul className='flex justify-between p-6 text-black'>
      <li >  <Link to="/"> Home </Link>  </li>
      <li >  <Link to="/cartpage"> Cartpage </Link>  </li>
      <li >  <Link to="/productpage"> ProductPage </Link>  </li>     
      </ul>
    </div>

    <Link to="/cartpage" onClick={() => Cartpage()}>                 
    <div className="menu pr-20 text-blue-800 text-4xl align-bottom grid place-items-end relative p-5" > 
    <IoCartOutline/> <p className=' absolute left-9 top-1 bg-yellow-300 px-1.5 text-black font-bold rounded-lg text-sm'>{vitearray.length}</p>    </div>
                </Link>

  </div>  
    </div>
  )
}

export default Navbars
