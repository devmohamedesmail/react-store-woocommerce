import React, { useContext } from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BiSolidOffer } from "react-icons/bi";

import './style.css'
import { FetchedData } from '../../context/FetchedData';


export default function BottomHeader() {
    const {categories}=useContext(FetchedData)
    return (
        <div className='bottom-header my-3 bg-black py-2 hidden lg:block'>
            <div className='container m-auto flex justify-between items-center'>
                <div className='left-side'>
                    <div className='categories-container'>
                        <button className='flex items-center categories-btn  px-3 py-2 w-52'><FaBars color='white' /><span className='text-sm text-white mx-2'>All Categories</span></button>
                        <div className='categories-items z-50'>
                            <ul className=' w-52 border bg-white shadow-md mt-3 z-50'>

                               {categories && categories.map((category)=>(
                                  <li className='border-b p-2 flex items-center hover:font-bold transition-all' key={category.id}>
                                    {category.image && <img className='rounded-full mx-1' src={category.image.src} width='30px' alt={category.name} />}
                                    {/* <img className='rounded-full mx-1' src={category.image.src} width='30px' alt={category.name} /> */}
                                    <Link to='/'>{category.name}</Link>
                                  </li>
                               ))}
                               
                            </ul>
                        </div>

                    </div>

                </div>
                <div className='navigation'>
                    <nav>
                        <ul className='flex items-center'>
                            <li className='mx-2 hover:border-t-2 border-white transition-all text-white'><Link to='/'>Home</Link></li>
                            <li className='mx-2 hover:border-t-2 border-white transition-all text-white nav-item'><Link to='/'>Categories</Link>
                                <div className='sub-menu-container z-50 '>
                                    {categories ? (
                                          <div className='sub-menu-items bg-white px-4 flex z-50'>
                                          <div className='flex-1 z-50'>
                                              <ul>
                                                  {categories && categories.map((category)=>( 
                                                    <li className='mb-3 hover:border-b-2 border-black text-black flex items-center transition-all  px-5 py-2' key={category.id}>
                                                        {category.image && <img className='rounded-full mx-1' src={category.image.src} width='30px' alt={category.name} /> }
                                                        {/* <img className='rounded-full mx-1' src={category.image.src} width='30px' alt={category.name} /> */}
                                                        <Link to='/'>{category.name}</Link>
                                                        </li>
  
                                                  ))}
                                              </ul>
                                          </div>
                                          <div className='flex-1 flex justify-center items-center'>
                                              <img src='/images/logo.png' width='100%' alt='Website Name' />
                                          </div>
                                      </div>
                                    ):(<></>)}
                                  

                                </div>

                            </li>
                            <li className='mx-2 hover:border-t-2 border-white transition-all text-white'><Link to='/'>Offers</Link></li>
                            <li className='mx-2 hover:border-t-2 border-white transition-all text-white'><Link to='/'>Sales</Link></li>
                            <li className='mx-2 hover:border-t-2 border-white transition-all text-white'><Link to='/shop'>Shop</Link></li>
                            <li className='mx-2 hover:border-t-2 border-white transition-all text-white'><Link to='/contact'>Contact us</Link></li>

                        </ul>
                    </nav>
                </div>

                <div className='right-side'>
                    <div className='flex items-center'>
                        <BiSolidOffer />
                        <p className='mx-1 text-sm text-white'>Clearance Up to 30% Off</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
