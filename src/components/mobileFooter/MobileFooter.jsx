import React from 'react'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';





export default function MobileFooter() {
    const products = useSelector(state => state.cart.products)
    return (
        <div className='mobile-footer fixed bottom-0 left-0 right-0 w-full bg-slate-100 py-3 px-2 block lg:hidden'>
            <div className="container m-auto flex justify-between items-center">
                <Link to='/' className='flex flex-col justify-center items-center'>
                    <IoHomeOutline size={20} />
                    <p className='text-xs'>Home</p>
                </Link>
                <Link to='/cart' className='flex flex-col justify-center items-center relative'>
                    <MdOutlineShoppingCart size={20} />
                    <p className='text-xs'>Cart</p>
                      {products.length > 0 ? 
                      (<p className='absolute text-xs -top-2 -right-1 bg-primary w-4 h-4 rounded-full flex justify-center items-center text-white'>{products.length}</p>
                      ):(<></>)}
                </Link>
                <Link to='/wishlist' className='flex flex-col justify-center items-center relative'>
                    <FaRegHeart size={20} />
                    <p className='text-xs'>Wishlist</p>
                    <p className='absolute text-xs -top-2 right-1 bg-primary w-4 h-4 rounded-full flex justify-center items-center text-white'>{products.length}</p>
                </Link>
                <Link to='/shop' className='flex flex-col justify-center items-center'>
                    <CiShop size={20} />
                    <p className='text-xs'>Shop</p>
                </Link>
                <Link to='/' className='flex flex-col justify-center items-center'>
                    <IoBagCheckOutline size={20} />
                    <p className='text-xs'>Shop</p>
                </Link>
            </div>

        </div>
    )
}
