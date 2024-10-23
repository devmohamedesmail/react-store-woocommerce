import React from 'react'
import ApiData from '../../GlobalData/ApiData'
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function CartItem({ image, name, sale, price  ,quantity,increaseQuantity,key ,decreaseQuantity,removeproduct}) {
    return (
        <div className='cart-item bg-white rounded-xl overflow-hidden' key={key}>
            <div className='image'>
                <img src={image} width='100%' />
            </div>
            <div className='p-2'>
                <p className='text-xs h-10'>{name}</p>

                {sale ? (
                    <div className='flex justify-between items-center my-3'>
                        <div className='flex'>
                            <p className='mx-1'>{sale}</p>
                            <p className='mx-1'>{ApiData.currency_ar}</p>
                        </div>
                        <div className='flex line-through text-red-700'>
                            <p className='mx-1'>{price}</p>
                            <p className='mx-1'>{ApiData.currency_ar}</p>
                        </div>
                    </div>
                ) : (
                    <div className='flex justify-between items-center my-3'>
                        <div className='flex'>
                            <p className='mx-1'>{price}</p>
                            <p className='mx-1'>{ApiData.currency_ar}</p>
                        </div>

                    </div>
                )}

                <div className='flex justify-between mt-5 py-3'>
                    <div className='quantity'>
                        <div className='flex items-center'>
                            <button onClick={increaseQuantity} ><FaPlusCircle size={20} /></button>
                            <input value={quantity} className='bg-transparent w-10 text-center' />
                            <button onClick={decreaseQuantity} ><FaMinusCircle size={20} /></button>
                        </div>
                    </div>
                    <button onClick={removeproduct}><FaTrash color='red' /></button>
                </div>
            </div>
        </div>
    )
}
