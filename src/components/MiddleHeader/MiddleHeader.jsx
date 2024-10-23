import React, { useContext, useState } from 'react'
import Logo from '../Logo/Logo'

import { Link } from 'react-router-dom';
import { BsCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import SearchBox from '../SearchBox/SearchBox';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import './style.css'
import { useSelector } from 'react-redux';
import { FetchedData } from '../../context/FetchedData';







export default function MiddleHeader() {
    const [isMenuOpen, setmenuopen] = useState(false);
    const products = useSelector(state => state.cart.products)
    const{categories}=useContext(FetchedData)

    // function to open menu
    const openMenu = () => {
        setmenuopen(true)
    }
    // close menu
    const closemenu = () => {
        setmenuopen(false)
    }

    return (
        <div className='middle-header my-3'>
            <div className="container m-auto flex items-center justify-between px-2">
                <Logo width='100px' />

                <div className='w-full lg:w-2/4 hidden lg:block bg-red-600'>
                    <SearchBox />
                </div>

                <div className="right-side hidden lg:block">
                    <div className='flex items-center'>
                        <Link to='/login'>
                            <LuUser2 size={20} />

                        </Link>
                        <Link to='/cart' className='relative mx-2'>
                            <BsCartCheckFill size={20} />
                           {products.length > 0 ? ( <p className='absolute -top-3 -right-2 bg-primary w-5 h-5 text-xs text-white rounded-full flex items-center justify-center'>{products.length}</p>):(<></>)}
                        </Link>


                        <Link to='/' className='relative mx-2'>
                            <FaRegHeart size={20} />

                         { products.length > 0 ? (
                            <p className='absolute -top-3 -right-2 bg-primary w-5 h-5 text-xs text-white rounded-full flex items-center justify-center'>2</p>
                            ):(<></>)}
                        </Link>
                    </div>
                </div>
                <div className='lg:hidden'>
                    <button onClick={openMenu}>
                        <FaBars size={20} />
                    </button>
                </div>
            </div>
            <div className='container m-auto px-3 lg:hidden mt-3'>
                <SearchBox />
            </div>



            <div className={`mobile-menu fixed top-0 z-50  h-full w-full transition-all bg-black ${isMenuOpen ? '' : '-translate-x-full'}`}>
                <div className="header flex justify-end p-4">
                    <button onClick={closemenu}> <IoMdClose color='white' /></button>

                </div>
                <div className="menu-content p-2">
                    <ul>
                        <li className='text-white my-1 hover:bg-red-600 p-2'><Link to='/'>home</Link></li>
                       
                        <li className='text-white my-1  p-2 nav-item'><Link to='#'>Categories</Link>
                            <div className="sub-mobile-menu-container">
                                <div className="mobile-menu-items p-2">
                                    <ul>
                                        {categories && categories.map((category)=>(
                                          <li className='text-white my-1 hover:bg-red-600 p-2' key={category.id}><Link to={`shop/${category.id}`}>{category.name}</Link></li>

                                        ))}


                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className='text-white my-1 hover:bg-red-600 p-2'><Link to='/'>Offers</Link></li>
                        <li className='text-white my-1 hover:bg-red-600 p-2'><Link to='/'>Sales</Link></li>
                        <li className='text-white my-1 hover:bg-red-600 p-2'><Link to='/contact'>Contact us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
