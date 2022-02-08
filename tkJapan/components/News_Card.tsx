import React from 'react'
import PropTypes from 'prop-types'
import { INews } from '../interface'

const News_Card = (props:INews) => {
    const {title,meta,image,creator,date,link,category}=props.attributes
    return (
       
             <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                        <a href="#_" className="block">
                            <img className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/fruit.jpg" />
                        </a>
                        <div className="bg-purple-500  items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>{category}</span>
                        </div>
                        <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                            <a href="#_">
                                {title}
                            </a>
                        </h2>
                        <p className="text-sm text-gray-500">
                            {meta}
                        </p>
                        <p className="pt-2 text-xs font-medium">
                             đăng bởi 
                            <a href="#_" className="m-1 underline-none">
                                {creator}
                            </a> · 
                            <span className="ml-6 ">
                                {date}
                            </span> · 
                        </p>
             </div>
       
    )
}






export default News_Card
