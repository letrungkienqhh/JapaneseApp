import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from './Sidebar'
import {ViewListIcon, 
        XIcon
        } from '@heroicons/react/solid'
const Header:NextPage = () => {
    const [isLogin,setisLogin]=useState(true)
    
    
    
    
    const [toggle,setToggle]=useState(false)
    
    let name:String|undefined=undefined
    
    return (
    
               <nav className="relative  py-6 bg-blue-100 w-screen border mb-2  z-100 mx-0">
                <div className="flex items-center justify-between space-x-2 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4">
                <section className="flex items-center text-gray-900 space-x-2">
                   
                        <button className=" h-7 w-7 items-center rounded-md md:hidden" onClick={()=>{
                                setToggle(!toggle) }}>
                            
                            
                                {toggle ?<XIcon></XIcon> :<ViewListIcon></ViewListIcon>}
                            
                        </button>
                   
                  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
                    </svg>
                    <a href="/" className="font-bold text-xl focus:ring focus:ring-blue-200 focus:ring-opacity-25 outline-none rounded-lg">KANTAN</a>
                </section>
                <section>
                    <ul className="md:space-x-8 space-x-6 text-gray-900 font-semibold hidden md:flex">
                        <li className="relative group">
                            <a href="/tintuc" className="group focus:ring focus:ring-blue-200 focus:ring-opacity-25 outline-none rounded-lg "> Tin tức  </a>
                            <div className="w-full h-0.5 bg-transparent group-hover:bg-red-800 transition-al absolute bottom-0">
                            </div>
                        </li>
                        <li className="relative group">
                            <a href="/hoctiengnhat" className="focus:ring focus:ring-blue-200 focus:ring-opacity-25 outline-none rounded-lg">Học tiếng nhật</a>
                            <div className="w-full h-0.5 bg-transparent group-hover:bg-red-800 transition-al absolute bottom-0">
                            </div>
                        </li>
                        <li className="relative group">
                            <a href="doisong" className="focus:ring focus:ring-blue-200 focus:ring-opacity-25 outline-none rounded-lg">Đời sống</a>
                            <div className="w-full h-0.5 bg-transparent group-hover:bg-red-800 transition-al absolute bottom-0">
                            </div>
                        </li>
                        <li className="relative group">
                            <a href="khampha" className="focus:ring focus:ring-blue-200 focus:ring-opacity-25 outline-none rounded-lg">Khám phá</a>
                            <div className="w-full h-0.5 bg-transparent group-hover:bg-red-800 transition-al absolute bottom-0">
                            </div>
                        </li>
                        <li className="relative group">
                            <a href="tuyendung" className="focus:ring focus:ring-blue-200 focus:ring-opacity-25 outline-none rounded-lg">Tuyển dụng</a>
                            <div className="w-full h-0.5 bg-transparent group-hover:bg-red-800 transition-al absolute bottom-0">
                            </div>
                        </li>
                        <li className="relative group">
                            <a href="raovat" className="focus:ring focus:ring-blue-200 focus:ring-opacity-25 outline-none rounded-lg">Rao vặt</a>
                            <div className="w-full h-0.5 bg-transparent group-hover:bg-red-800 transition-al absolute bottom-0">
                            </div>
                        </li>
                        
                    </ul>
                </section>
                <section className='ml-15'>
                    <div className="relative z-10 grid items-center md:flex">
                       
                               
                            
                        <a className="hidden lg:inline inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap  rounded-md shadow-sm  focus:outline-none focus:shadow-none">
                                {name?
                                    <div>
                                        Xin chào, {name}

                                    </div>
                                :
                                    <div>
                                         Bạn cần đăng nhập
                                    </div>}
                        </a>
                        <a className="  lg:inline inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap  rounded-md shadow-sm  focus:outline-none focus:shadow-none">
                            {!name?
                                <span className="inline-flex rounded-md shadow-sm">
                                    <Link href="/login">
                                        <a  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 lg:text-xs sm:text-sm">
                                            Đăng nhập
                                        </a>
                                    </Link>
                                </span>:
                                <span className="inline-flex rounded-md shadow-sm">
                                    <Link href="/logout">
                                        <a  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 lg:text-xs sm:text-sm">
                                            Đăng xuất
                                        </a>
                                    </Link>
                                </span>
                            }
                        </a>
                    </div>
                </section>
                </div>
                {toggle && <div className="">
                                <Sidebar name ={name}/>
                           </div>}
               
             </nav>
             
            
              
    )
}

Header.propTypes = {

}


export default Header
