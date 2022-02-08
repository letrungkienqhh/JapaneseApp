import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ErrorComponent = (props:any) => {
  return(
    <div className="bg-red-300">
        <p>Đã có lỗi xảy ra. Trang của bạn không xem được</p>
        <Link href="/">
            <a>Quay trở về lại trang chủ</a>
        </Link>
    </div>
  ) 
        
};



export default ErrorComponent;
