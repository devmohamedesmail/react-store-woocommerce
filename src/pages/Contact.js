import React from 'react'
import TopHeader from '../components/topHeader/TopHeader'
import MiddleHeader from '../components/MiddleHeader/MiddleHeader'
import BottomHeader from '../components/BottomHeader/BottomHeader'
import Footer from '../components/footer/Footer'
import MobileFooter from '../components/mobileFooter/MobileFooter'
import ApiData from '../GlobalData/ApiData'

export default function Contact() {
  return (
  <>
  <TopHeader/>
  <MiddleHeader />
  <BottomHeader />
  <div className='container m-auto'>
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      {ApiData.contact.map((item)=>(
        <div className='bg-white p-4 flex flex-col justify-center items-center m-3 rounded-xl shadow-md'>
          <span className='my-5'>{item.icon}</span>
          <span>{item.value}</span>
        </div>
      ))}
     
   
    </div>
  </div>
  <Footer />
  <MobileFooter />
  </>
  )
}
