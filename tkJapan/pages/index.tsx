import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Index_mainNews from '../components/Index_mainNews'
import Index_Section from '../components/Index_Section'
import Sidebar from '../components/Sidebar'
import AppContext from '../context/AppContext'
import { INews } from '../interface'



const Home: NextPage = () => {
  console.log(`Day la trang home ${process.env.API_URL}`)
    
  return (
    <div >
      <Head>
        <title>Học tiếng nhật, Tìm việc làm trong các công ty nhật</title>

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <div className='z-100 sticky '>
              <Header/>
          </div>
          

        
          <main>
              
              
              
                {/* <Index_mainNews newsList={newsList} /> */}
                <Index_Section name={'Tin tức'} news={[]} link={'/tintuc'} />
                <Index_Section name={'Học tiếng nhật'} news={[]} link={'hoctiengnhat'} />
                <Index_Section name={'Đời sống'} news={[]} link={'doisong'} />
                <Index_Section name={'Khám phá'} news={[]} link={'khampha'} />
                <Index_Section name={'Tuyển dụng'} news={[]} link={'tuyendung'} />
               
              
          </main>
          </div>
      
      <div>
         <Footer/> 
      </div>
      
     
    </div>
  )
}

export default Home
