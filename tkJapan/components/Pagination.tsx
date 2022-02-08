import React, { useState } from 'react'
import PropTypes from 'prop-types'
interface ComponentProps{
    value:number
}
const Pagination = (props:ComponentProps) => {
    const [page,setPage] = useState(2)
    return (
        <div className="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
            <li className="page-item disabled" onClick={()=>setPage(page-1)}><a className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none" href="#" tabIndex={-1} aria-disabled="true">Trước</a></li>
            <li className="page-item" onClick={()=>setPage(page-1)}><a className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none" href="#">{page-1}</a></li>
            <li className="page-item active"><a className="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md" href="#">{page} <span className="visually-hidden">(hiện tại)</span></a></li>
            <li className="page-item" onClick={()=>setPage(page+1)} ><a className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none" href="#">{page+1}</a></li>
            <li className="page-item" onClick={()=>setPage(page+1)}><a className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"  href="#">Sau</a></li>
          </ul>
        </nav>
      </div>
    )
}



export default Pagination
