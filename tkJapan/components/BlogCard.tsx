import React from 'react'
import PropTypes from 'prop-types'
import { INews } from '../interface'
import Link from 'next/link'


const BlogCard = (props:INews) => {
    console.log(`Trong blogcard`)
    const news=props
    
    
    
    return (
        <div className="w-full px-5 py-6 my-8 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
           
            <div className="grid grid-cols-1 gap-8 mt-6">
              
                    <div className="flex flex-col md:flex-row mx-auto">
                        <div className="w-full rounded overflow-hidden">
                            <Link href={`/tintuc/${news.id}`}>
                                <img className="object w-full h-auto" src={news.attributes.image}></img>
                            </Link>
                        </div>
                        <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4 pl-2">
                            <p className="text-sm text-gray-500 italic">{news.attributes.date}</p>
                            <div className="mt-2">
                                <h2 className="text-lg font-semibold leading-tight text-gray-800">{news.attributes.title}</h2>
                                <p className="leading-normal pt-2 line-clamp-3">{news.attributes.meta}</p>
                                <Link href= {`/tintuc/${news.id}`}>
                                    <a className="leading-normal pt-2 hover:underline text-blue-600" >Read more...</a>
                                </Link>
                            </div>
                            
                        </div>
          
                    </div>
                
                
            </div>
      </div>
    )
}

BlogCard.propTypes = {

}

export default BlogCard
