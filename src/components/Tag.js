import React from 'react'

export default function Tag({ text }){
    return(
        <span className='text-sm rounded text-cstm-green font-medium py-2 px-2 shadow-md' style={{  background: `linear-gradient(112.47deg, #F8FCFA -17.2%, rgba(206, 236, 222, 0) 114.3%)`}}>{ text }</span>
    )
}

