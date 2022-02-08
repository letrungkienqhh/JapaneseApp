import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { INews } from '../../interface';
import {GetStaticPaths, GetStaticProps} from 'next/types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const TintucId=(props:any)=>{
    const news=props.attributes
    return(
        <div>
                <div>
                    <Header/>
                </div>
                <div>
                <section className="w-full h-max-7xl px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl mt-2 border-t-2 ">
                    <div className="container mx-auto px-5 ">
                            <div>
                                <div className="w-full md:w-3/12 rounded overflow-hidden">
                                    
                                    <img className="object w-full h-full" src={news.image}></img>
                            
                                </div>
                            <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4 pl-2">
                                <p className="text-sm text-gray-500 italic">{news.date}</p>
                                <div className="mt-2">
                                    <h2 className="text-lg font-semibold leading-tight text-gray-800">{news.title}</h2>
                                    <p className="leading-normal pt-2 line-clamp-3">{news.meta}</p>
                                    
                                </div>
                
                            </div>
                            
                            </div>
                            <Link href="/tintuc">
                                <a className="">Quay trờ lại tin tức</a>
                            </Link>

                        </div>
                </section>
                </div>
                <div>
                    <Footer/>
                </div>
        </div>
        
    )
}
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:1337/api/khamphas')
    const posts = await res.json()
    const {data} =  posts
    
    // Get the paths we want to pre-render based on posts
    const paths = data.map((news:INews) => ({
          
         params: { id:`${news.id}` }
         
    }))
    
    
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  
  export const getStaticProps: GetStaticProps = async (context) => {
    
    const {id}=context.params
    
     const res = await fetch(`http://localhost:1337/api/khamphas/${id}`)
     const post = await res.json()
     const {data} = post
     
  
    return { props:data }
  }
  
 
  
export default TintucId
