import React from 'react'
import PropTypes from 'prop-types'
import { NextPage } from 'next'
import News_Card from './News_Card'
import { INews } from '../interface'

interface ComponentProp{
    newsList: Array<INews>
}
const Index_mainINews= (props:ComponentProp) => {
    const {newsList} = props
    const newsListTop:INews[] =newsList.slice(0,6)
    console.log(newsListTop)
    
    
    return (
         
            
             <div className="w-full px-5 py-6 my-8 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
                <div className="flex flex-col items-center sm:px-5 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <a href="#_" className="block">
                            <img className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" src="https://cdn.devdojo.com/images/may2021/cupcakes.jpg" />
                        </a>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                        <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                            
                            <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"><a href="#_">{newsListTop[0].attributes.title}</a></h1>
                            <p className="text-sm text-gray-500">{newsListTop[0].attributes.meta}</p>
                            <p className="pt-2 text-sm font-medium">
                                by <a href="#_" className="mr-1 underline">{newsListTop[0].attributes.creator}</a>
                                 · <span className="mx-1">{newsListTop[0].attributes.date}</span> 
                               </p>
                        </div>
                    </div>
                </div>
                 <div className=" grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
                   {newsListTop && newsListTop.map((news) =>
                        <News_Card  id={news.id} attributes={news.attributes} />)}
                </div>
             </div>
    

       
    )
 }




export default Index_mainINews
