import { NextApiRequest, NextApiResponse, NextPage } from 'next'
import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import AppContext from '../context/AppContext';
import { NextResponse, NextRequest } from 'next/server'
export  function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    res.redirect(307, '/')
  }
const Login:NextPage = () => {
    const [userData, setUserData] = useState({
        identifier:'',
        password:'',
      });
    const [message, setMessage] = useState("")
    const [error, setError] = useState(false);
  
    const doRegister= async(e:any)=>{
        console.log('Dang thực hiện do register')
        console.log(e)
        
            const req= await fetch('http://localhost:1337/api/auth/local/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify(e)
            })
            const res= await req.json()
         
            console.log(res)
            if (res.data===null){
                console.log('da co loi')
                setError(true)
            }
            else{
                console.log('Sẽ chuyển hướng về trang chủ')
                console.log('Dang return')
                setError(false)
               
                    return {
                      redirect: {
                        destination: '/hello-nextjs',
                        permanent: false,
                      },
                    }
                  
              
                }
            
        
        
    }
        
   
    
    return (
        
        <div className="font-sans m-2 mt-10 mb-10">
            <div className="relative min-h-screen/2 flex flex-col sm:justify-center items-center  ">
                <div className="relative sm:max-w-sm w-full">
                    <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  lg:transform lg:-rotate-6" />
                
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-200 shadow-md">
                    <label  className="block mt-3 text-lg text-gray-700 text-center font-semibold">
                        Trang đăng nhập
                    </label>
                    <form method="#" action="#" className="mt-10">
                        <div>
                        <input onChange={e =>setUserData({...userData,identifier:e.target.value})} 
                        type="identifier" placeholder="identifier" className=" pl-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                        </div>
                        <div className="mt-7">                
                        <input onChange={e =>setUserData({...userData,password:e.target.value})} 
                       type="password" placeholder="Password" className="pl-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />                           
                        </div>
                        <div className="mt-7 flex">
                        <label htmlFor="remember_me" className="inline-flex items-center w-full cursor-pointer">
                            <input id="remember_me" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember" />
                            <span className="ml-2 text-sm text-gray-600">
                            Nhớ mật khẩu
                            </span>
                        </label>
                        <div className="w-full text-right">     
                            <a className="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                            Quên mật khẩu?
                            </a>                                  
                        </div>
                        </div>
                        <div className="mt-7">
                        <button onClick={()=>doRegister(userData)} className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                Đăng nhập
                        </button>
                        </div>
                        {error?<></> :<p>Sai tên tk, mk</p>}
                        <p className="text-red-700">{message}</p>
                        <div className="flex mt-7 items-center text-center">
                        <hr className="border-gray-300 border-1 w-full rounded-md" />
                        <label className="block font-medium text-sm text-gray-600 w-full">
                            Đăng nhập bằng
                        </label>
                        <hr className="border-gray-300 border-1 w-full rounded-md" />
                        </div>
                        <div className="flex mt-7 justify-center w-full">
                        <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Facebook
                        </button>
                        <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Google
                        </button>
                        </div>
                        <div className="mt-7">
                        <div className="flex justify-center items-center">
                            <label className="mr-2">Bạn chưa có tài khoản?</label>
                            <a href="#" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Tạo tài khoản
                            </a>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <Footer/>
      </div>
    )
}

export default Login