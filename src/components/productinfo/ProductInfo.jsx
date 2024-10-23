import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import ApiData from '../../GlobalData/ApiData';
import Skeleton from 'react-loading-skeleton';
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { MdOutlinePayment } from "react-icons/md";






export default function ProductInfo({ ProductDetails }) {
    const [quanity, setquantity] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({});



    // choose option function 
    const handleOptionChange = (attributeName, option) => {
        setSelectedOptions(prevOptions => ({
            ...prevOptions,
            [attributeName]: option
        }));
    };
    return (

        <div className='product-info'>

            {ProductDetails ? (
                <div className='product-info p-3'>
                    <h2 className='font-bold my-3'>{ProductDetails.name}</h2>
                    <p className='my-1'>{ProductDetails.short_description}</p>

                    {/* price and sale section */}

                    {ProductDetails.sale_price ? (
                        <div className='flex justify-between items-center px-2'>
                            <div className='flex items-center'>
                                <p className='mx-1 font-bold line-through'>{ProductDetails.price}</p>
                                <p className='mx-1 font-bold line-through'>{ApiData.currency_en}</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='mx-1'>{ProductDetails.sale_price}</p>
                                <p className='mx-1'>{ApiData.currency_en}</p>
                            </div>
                        </div>
                    ) : (
                        <div className='flex items-center'>
                            <p className='mx-1 font-bold text-primary'>{ProductDetails.price}</p>
                            <p className='mx-1 font-bold text-primary'>{ApiData.currency_en}</p>
                        </div>
                    )}


                    {/* variation section */}

                    <div className='mt-5'>

                        {ProductDetails.attributes && ProductDetails.attributes.length > 0 ? (
                            ProductDetails.attributes.map((attribute, index) => (
                                <div key={index}>
                                    <label className='mb-3 font-bold'>{attribute.name}</label>
                                    <div className='flex flex-wrap mb-3'>
                                        {attribute.options.map((option, optionIndex) => (
                                            <div key={optionIndex} className='m-1'>
                                                <label htmlFor={option} className={`border w-fit border-black rounded-md px-2 py-1 text-sm m-1 ${selectedOptions[attribute.name] === option ? 'bg-primary border-none text-white' : 'bg-white'}`}>
                                                    <input
                                                        type='radio'
                                                        value={option}
                                                        id={option}
                                                        name={attribute.name}
                                                        className='hidden'
                                                        onChange={() => handleOptionChange(attribute.name, option)}
                                                    />
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <></>
                        )}
                    </div>



                    {/* quantity section */}
                    <div className='mt-5'>
                        <label className='text-sm my-1'>Quantity</label>
                        <div className='flex items-center bg-slate-100 w-fit px-2 py-2 mt-3'>
                            <button onClick={() => { setquantity(quanity + 1) }}><FaPlus /></button>
                            <input value={quanity} className='focus:outline-none text-center bg-transparent w-16' readOnly />
                            {quanity > 1 ? (<button onClick={() => { setquantity(quanity - 1) }}><FaMinus /></button>) : (<></>)}
                        </div>
                    </div>

                    {/* extra div */}
                    <div className='flex items-center justify-between my-5 bg-slate-100 py-3 px-2 rounded-xl'>
                        <div className='flex flex-col items-center'>
                            <LiaShippingFastSolid size={25} />
                            <p>Fast Shipping</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <HiOutlineArrowsUpDown size={25} />
                            <p>Free Return</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <MdOutlinePayment size={25} />
                            <p>Safe Payemnt</p>
                        </div>
                    </div>

                    {/* action section */}
                    <div className='flex mt-5'>
                        <button className='bg-primary flex-1 flex justify-center text-white text-sm px-5 py-3 mx-2 rounded-md flex items-center'>
                            <MdAddShoppingCart />
                            <span className='text-xs mx-2'>Add To Cart</span>
                        </button>
                        <button className='bg-black flex-1 flex justify-center text-white text-sm px-5 py-3 mx-2 rounded-md flex items-center'>
                            <FaRegHeart />
                            <span className='text-xs mx-2'>Add To Wishlist</span>
                        </button>

                    </div>
                    <div className='mt-4'>
                        <Link to='checkout' className='bg-black w-full block text-white text-center py-3'>Buy Now</Link>
                    </div>

                </div>
            ) : (
                <div>
                    <Skeleton width={300} height={20} />
                    <Skeleton width={200} height={20} />
                    <Skeleton width={150} height={20} />
                    <Skeleton width={300} height={20} />
                </div>)}
        </div>
    )
}
