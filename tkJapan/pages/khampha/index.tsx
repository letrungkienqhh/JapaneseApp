import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header'
import BlogCard from '../../components/BlogCard'
import { INews } from '../../interface'
import Pagination from '../../components/Pagination'
import Footer from '../../components/Footer'
import { GetServerSideProps, GetStaticProps } from 'next/types'

import ErrorComponent from '../../components/Error'

interface ComponentProp{
    newsList:Array<INews>
}
const index = (props:any) => {
    // console.log(`trong page`)
    // console.log(props)
    const newsList=props
    // console.log(newsList)
    return (
        <div>
            <div>
                <Header/>
            </div>
            
            <section className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl mt-2 border-t-2 ">
                <div className="container mx-auto px-5 ">
                    <h1 className="md:text-3xl text-2xl font-bold text-gray-800">Khám phá</h1>
                    {props.err? 
                        <ErrorComponent/>:
                        newsList.data.map((news:any)=><BlogCard id={news.id} attributes={news.attributes}/>)}
                    {/* <Pagination value={'1'}/> */}
                 </div>
            </section>

            <div>
                <Footer/>
            </div>
            

        </div>
    )
}



export const getStaticProps:GetStaticProps = async (context) => {
        console.log("getStaticProps")
        console.log(process.env.API_URL)
        try{
            const res= await fetch(`http://localhost:1337/api/khamphas/`)
            const result=await res.json() 
            const {data}=result
            if (!data){
                return{
                    notFound: true
                }
            }
            return{
                props:{
                data
                },
                revalidate:60*10
            
            }
        }
        catch(e){
            return {
                redirect: {
                  destination: '/',
                  permanent: false,
                },
              }
        }
    
    
    
  
      
   
 
}

export default index
