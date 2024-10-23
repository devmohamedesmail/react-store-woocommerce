import React from 'react'
import CustomInput from '../customcomponent/CustomInput'
import Logo from '../components/Logo/Logo'
import TopHeader from '../components/topHeader/TopHeader'
import MiddleHeader from '../components/MiddleHeader/MiddleHeader'
import Footer from '../components/footer/Footer'
import MobileFooter from '../components/mobileFooter/MobileFooter'
import CustomButton from '../customcomponent/CustomButton'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <>
    <TopHeader />
    <MiddleHeader />
    <div className='border bg-white p-3 w-full md:w-1/3 m-auto my-28 mx-auto'>
      <div className='text-center'>
        <Logo width={100} />
      </div>
      <CustomInput label='E-mail' type='text' />
      <CustomInput label='password' type='password' />
      <div className='text-center my-10'>
        <CustomButton title='Register' bg='bg-black' text='text-white' />
      </div>
      <div className='flex items-center'>
        <p>I Have Account ? </p>
        <Link to='/login' className='mx-2 text-primary'>Login</Link>
      </div>
    </div>
    <Footer />
    <MobileFooter />
  </>
  )
}
