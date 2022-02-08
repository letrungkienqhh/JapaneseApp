import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header'

interface ComponentProp{
    value:string
}
const index = (prop:ComponentProp) => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <h1>Tuyển dụng</h1>
                <a></a>
            </div>
           
            
        </div>
    )
}

index.propTypes = {

}

export default index
