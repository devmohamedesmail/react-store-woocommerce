import React from 'react'

export default function Banner() {
  return (
    <div className='container m-auto my-10 '>
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className='rounded-lg overflow-hidden m-2'>
                <img src="images/banner-5.jpg" width='100%' height='100%'  /> 
            </div>
            <div className='rounded-lg overflow-hidden m-2'>
                <img src="images/banner-2.jpg" width='100%' height='100%'  /> 
            </div>
            <div className='rounded-lg overflow-hidden m-2'>
                <img src="images/banner-3.jpg" width='100%' height='100%' /> 
            </div>
        </div>
      
    </div>
  )
}
