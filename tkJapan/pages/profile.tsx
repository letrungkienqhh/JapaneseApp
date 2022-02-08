import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Index_mainNews from '../components/Index_mainNews'
import Index_Section from '../components/Index_Section'
import Sidebar from '../components/Sidebar'
import { INews } from '../interface'



const Profile: NextPage = () => {
  
 
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
              
              profile
              
               
          </main>
          </div>
      
      <div>
         <Footer/> 
      </div>
      
     
    </div>
  )
}

export default Profile
