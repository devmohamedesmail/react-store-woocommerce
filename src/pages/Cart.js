import React, { useEffect, useState } from 'react'
import TopHeader from '../components/topHeader/TopHeader'
import MiddleHeader from '../components/MiddleHeader/MiddleHeader'
import BottomHeader from '../components/BottomHeader/BottomHeader'
import Footer from '../components/footer/Footer'
import MobileFooter from '../components/mobileFooter/MobileFooter'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem/CartItem'
import { descreaseCartQuantity, increaseCartQuantity, removeproductfromcart } from '../redux/CartSlice'
import { TbShoppingCartExclamation } from "react-icons/tb";





export default function Cart() {
  const products = useSelector(state => state.cart.products)
  const [carttotal, setcarttotal] = useState(0)
  const dispatch = useDispatch()

  // handleIncreaseQuantity
  const handleIncreaseQuantity = (productID) => {
    dispatch(increaseCartQuantity(productID))
  }

  // handleDecreaseQuantity
  const handleDecreaseQuantity = (productID) => {
    dispatch(descreaseCartQuantity(productID))
  }

  // remove product
  const handleremoveproduct = (productID) => {
    dispatch(removeproductfromcart(productID))

  }

  // sum of cart




  useEffect(() => {
    const total = products.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setcarttotal(total);
  }, [products])

  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
      <div className='container m-auto my-10'>
       

        {products && products.length > 0? (
           <div className='grid grid-cols-1 lg:grid-cols-12'>
           <div className='col-span-9'>
             <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3'>
               {products.map((product) => (
                 <CartItem key={product.id} image={product.image} name={product.name.split('', 50)} sale={product.sale} price={product.price} quantity={product.quantity} increaseQuantity={() => handleIncreaseQuantity(product.id)} decreaseQuantity={() => handleDecreaseQuantity(product.id)} removeproduct={() => handleremoveproduct(product.id)} />
               ))}
             </div>
           </div>
           <div className='col-span-3 bg-white p-3'>
             <h2 className='text-center bg-white my-5 font-bold'>Cart Summery</h2>
 
             <div className='p-2'>
 
               {products.map((product) => (
                 <div className='flex items-center justify-between  py-3'>
                   <p className='text-xs'>{product.name.split("", 20)}</p>
 
                   <div className='flex items-center'>
                     <p className='mx-1'>{product.quantity}</p>
                     <p className='mx-1'>*</p>
                     {product.sale ? (<p className='mx-1'>{product.sale}</p>) : (<p className='mx-1'>{product.price}</p>)}
                   </div>
 
                 </div>
 
               ))}
             </div>
             <div className='flex justify-between'>
               <p>Total</p>
               <p>{carttotal}</p>
             </div>
 
             <Link to="/checkout" className='text-center w-full bg-primary block text-white p-3 mt-5'>Go Checkout</Link>
           </div>
 
         </div>
        ) : (
        <> 
          <div className='bg-white p-4 text-center flex justify-center items-center'> 
            <TbShoppingCartExclamation size={20} />
            <p className='mx-2'>Your Cart is Empty</p>
          </div>  
        </>
      )}
      </div>
      <Footer />
      <MobileFooter />

    </>
  )
}
