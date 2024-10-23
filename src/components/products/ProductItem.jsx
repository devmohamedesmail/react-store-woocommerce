import React from 'react'
import { Link } from 'react-router-dom'
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import ApiData from '../../GlobalData/ApiData';
import { useSelector , useDispatch } from 'react-redux';
import { AddToCart } from '../../redux/CartSlice';



function ProductItem({ id, name, price, sale, image }) {
  const products = useSelector((state)=>state.cart.products)
  const dispatch = useDispatch();
  
  return (
    <div className='product-item border rounded-xl overflow-hidden shadow-sm bg-white' key={id}>
      <Link to={`product/details/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div className="product-content p-2">
        <h4 className='text-sm'>{name.split("", 25)}</h4>
        {sale ? (
          <div className='price-section flex justify-between items-center mt-4'>
            <div className='flex items-center'>
              <p className='mx-1 text-sm'>{sale}</p>
              <p className='mx-1 text-sm'>{ApiData.currency_en}</p>
            </div>
            <div className='flex items-center line-through'>
              <p className='mx-1 text-sm'>{price}</p>
              <p className='mx-1 text-sm'>{ApiData.currency_en}</p>
            </div>

          </div>
        ) : (
          <div className='price-section flex justify-between items-center mt-4'>
            <div className='flex items-center text-primary'>
              <p className='mx-1 text-sm '>{price}</p>
              <p className='mx-1 text-sm'>{ApiData.currency_en}</p>
            </div>

          </div>
        )}

        <div className="action-section mt-4 flex justify-end">
          <button className='mx-1'><FaRegHeart size={20} /></button>
          <button className='mx-1' onClick={()=> dispatch(AddToCart({
            id:id,
            name:name,
            price:price,
            sale:sale,
            image:image,
            quantity:1
          }))} ><MdAddShoppingCart size={20} /></button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
