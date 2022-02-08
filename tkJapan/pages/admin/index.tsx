import { NextPage } from "next"
import { Head } from "next/document"
import Dashboard from "../../components/Dashboard"
import { INews } from "../../interface"

const Admin: NextPage = () => {
    
      return (
      <div>
        <Head>
          <title>Học tiếng nhật, Tìm việc làm trong các công ty nhật</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <Dashboard/>
        </div>
        
       
      </div>
    )
  }
export default Admin