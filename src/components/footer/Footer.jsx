import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import ApiData from '../../GlobalData/ApiData';




export default function Footer() {
    return (
        <footer className='bg-black my-10'>
            <div className="container p-5 pb-40 m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
                    <div className='footer-col-1'>
                        <Logo width={100} />
                        <p className='text-white text-xs my-3'>{ApiData.description}</p>
                    </div>
                    <div className='footer-col-2 my-5'>
                        <h2 className="section-title text-white font-bold">Links</h2>
                        <hr className='w-20' />
                        <ul className='mt-5'>
                            <li><Link to='/' className='text-white text-sm'>Home</Link></li>
                            <li><Link to='/shop' className='text-white text-sm'>Shop</Link></li>
                            <li><Link to='/' className='text-white text-sm'>Offers</Link></li>
                            <li><Link to='/' className='text-white text-sm'>Sales</Link></li>
                            <li><Link to='/' className='text-white text-sm'>Privacy Policy</Link></li>
                            <li><Link to='/' className='text-white text-sm'>FQ</Link></li>
                            <li><Link to='/contact' className='text-white text-sm'>Contact us</Link></li>
                        </ul>
                    </div>
                    <div className='footer-col-3 my-5'>
                        <h2 className="section-title text-white font-bold">Contact us</h2>
                        <hr className='w-20' />
                        <ul className='my-5'>
                            {ApiData.contact.map((item) => (
                                <li className='my-4' key={item.id}>
                                    <Link to='/' className='flex items-center'>
                                        <span className='text-white mx-2'>{item.icon}</span>
                                        <span className='text-white mx-2'>{item.value}</span>
                                    </Link>

                                </li>
                            ))}










                        </ul>
                    </div>

                </div>
            </div>

        </footer>
    )
}
