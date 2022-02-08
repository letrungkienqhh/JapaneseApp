import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { UserIcon, UsersIcon } from '@heroicons/react/solid'
interface SidebarProps{
    name: String|undefined,
}

const Sidebar = (props:SidebarProps) => {
    
    return (
        
        <div className="w-full max-h-full bg-blue-100  rounded p-3 shadow-lg transition delay-150 duration-300 ease-in-out ">
          <div className="flex items-center space-x-4 p-2 mb-5">
            {props.name? 
                 <img className="h-12 rounded-full" src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="User" />
                :
                <UsersIcon className="h-12 rounded-full"/>
               
            }
            <div>
              <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">{props.name}</h4>
              <span className="text-sm tracking-wide flex items-center space-x-1">
                
                
                {props.name? 
                    <Link href={'/profile'}>
                         
                        <span className="text-gray-600 hover:bg-green-300 cursor-pointer">Xem trang cá nhân</span>
                    </Link>:
                    <Link href={'/login'}>
                        
                         <a className="grid">
                            <span className="text-gray-900 font-semibold "> Trang cá nhân</span>
                            
                            <span className="text-gray-600">Bạn cần đăng nhập</span>
                        </a>
                    </Link>
                    
                }
              </span>
            </div>
          </div>
          <ul className="space-y-2 text-sm">
            <li>
                <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    </span>
                    <Link href={'/tintuc'}>
                         <span>Tin tức</span>
                    </Link>
                </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                <span className="text-gray-600">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </span>
                <Link href={'/hoctiengnhat'}>
                         <span>Học tiếng nhật</span>
                </Link>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                <span className="text-gray-600">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </span>
                <span>Đời sống</span>
              </a>
            </li>
          
            
            <li>
              <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                <span className="text-gray-600">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </span>
                <span>Khám Phá</span>
              </a>
            </li>
            
            <li>
              <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                <span className="text-gray-600">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </span>
                <span>Tuyển dụng</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                <span className="text-gray-600">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </span>
                <span>Rao vặt</span>
              </a>
            </li>
          </ul>
        </div>
       
     
    )
}

Sidebar.propTypes = {

}

export default Sidebar
