import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header'

import { IFearture } from '../../interface'
import Footer from '../../components/Footer'

interface ComponentProp{
    pageName: String
    value:string
}
const index = (prop:ComponentProp) => {
    const list: IFearture[]=[
        {
            title:'N5',
            data:'+ Bạn có thể hoàn thành được một câu văn đơn giản. Để có thể hiểu được, bạn sẽ phải căn cứ dựa vào sự hiểu biết về ngữ pháp cơ bản và khoảng 800 từ vựng.+ Có thể đọc hiểu cụm từ, câu, đoạn văn dạng cố định viết bằng chứ hiragana, chữ katakana, chứ hán cơ bản dùng trong sinh hoạt hằng ngày+ Có thể nghe được thông tin cần thiết trong hội thoại ngắn, nói chậm trong các tình huống hay gặp hằng ngày như lớp học, cuộc sống xung quanh.+ Bạn có thể trả lời hoàn thành và hiểu được những câu đơn giản trong cuộc sống sinh hoạt và trong thực tế.'
        },
        {
            title:'N4',
            data:'Giao tiê'
        },
        {
            title:'N3',
            data:'Từ vựng mới lọt lòng, cơ bản'
        },
        {
            title:'N2',
            data:'Từ vựng mới lọt lòng, cơ bản'
        },
        {
            title:'N1',
            data:'Từ vựng mới lọt lòng, cơ bản'
        },

    ]
       

    
    return (
        <div>
            <div>
                <Header/>
            </div>
            <main>               
                
                        <section className="bg-white dark:bg-gray-900">
                            <div className="container px-6 py-10 mx-auto">
                                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Học tiếng nhật</h1>
                                
                                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                                    {list.map((fearture:IFearture)=>
                                        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                            <span className="inline-block text-blue-500 dark:text-blue-400 flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                                </svg>
                                                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{fearture.title}</h1>
                                            </span>
                                        
                                            <p className="text-gray-500 dark:text-gray-300">
                                                {fearture.data}
                                            </p>
                                            <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>)
                
            </main> 
            <div>
                <Footer/>
            </div>
                
            
        </div>
    )
}



export default index
