import React, { useEffect, useState } from 'react'
import CustomInput from '../customcomponent/CustomInput'
import { FaTrash } from "react-icons/fa";
import TopHeader from '../components/topHeader/TopHeader';
import MiddleHeader from '../components/MiddleHeader/MiddleHeader';
import BottomHeader from '../components/BottomHeader/BottomHeader';
import MobileFooter from '../components/mobileFooter/MobileFooter';
import Footer from '../components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { descreaseCartQuantity, increaseCartQuantity, removeproductfromcart } from '../redux/CartSlice'
import axios from 'axios';
import ApiData from '../GlobalData/ApiData';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import CustomButton from '../customcomponent/CustomButton';



export default function Checkout() {
  const products = useSelector(state => state.cart.products)
  const [carttotal, setcarttotal] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', address: '', city: '', state: '', postcode: '', country: '', email: '', phone: '', paymentMethod: 'paypal',
    visaCardNumber: '',
    visaExpiryDate: '',
    visaCvv: ''
  });
  const [orderCreated, setOrderCreated] = useState(false);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };




  const createOrder = async () => {

    const cartproducts = products.map((product) => ({
      product_id: product.id, // Replace with actual product ID
      quantity: product.quantity
    }))
    const orderData = {
      payment_method: formData.paymentMethod,
      payment_method_title: formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Visa',
      set_paid: formData.paymentMethod === 'cod',
      billing: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        address_1: formData.address,
        city: formData.city,
        state: formData.state,
        postcode: formData.postcode,
        country: formData.country,
        email: formData.email,
        phone: formData.phone
      },
      shipping: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        address_1: formData.address,
        city: formData.city,
        state: formData.state,
        postcode: formData.postcode,
        country: formData.country
      },
      line_items: cartproducts
    };

    try {
      const response = await axios.post(`${ApiData.url}wp-json/wc/v3/orders`, orderData, {
        auth: {
          username: `${ApiData.Consumerkey}`,
          password: `${ApiData.Consumersecret}`
        },
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Order created successfully:', response.data);
      setOrderCreated(true);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    createOrder();


  };







  useEffect(() => {
    const total = products.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setcarttotal(total);
  }, [products])
  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
      <div className='container m-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='billing-section'>
            <h4 className='text-center bg-slate-100 p-4'>Billing Info</h4>
            <PayPalScriptProvider options={{ "client-id": "your-client-id" }}>
              <form onSubmit={handleSubmit}>
                <CustomInput label='First Name' type='text' onchange={handleChange} name='firstName' />
                <CustomInput label='Last Name' type='text' onchange={handleChange} name='lastName' />
                <CustomInput label='Your Address' type='text' onchange={handleChange} name='address' />
                <CustomInput label='Your City' type='text' onchange={handleChange} name='city' />
                <CustomInput label='Your State' type='text' onchange={handleChange} name='state' />
                <CustomInput label='Postcode' type='text' onchange={handleChange} name='postcode' />
                <CustomInput label='Country' type='text' onchange={handleChange} name='country' />
                <CustomInput label='Eamil' type='text' onchange={handleChange} name='email' />
                <CustomInput label='Phone' type='tel' onchange={handleChange} name='phone' />


                <div>
                  <label className='block bg-light p-2 my-2'>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className='mx-2'
                    />
                    Cash on Delivery
                  </label>
                  <label className='block bg-light p-2 my-2'>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="visa"
                      checked={formData.paymentMethod === 'visa'}
                      onChange={handleChange}
                      className='mx-2'
                    />
                    Visa
                  </label>
                  {formData.paymentMethod === 'visa' && (
                  <div className='px-5'>
                    <input
                      type="text"
                      name="visaCardNumber"
                      placeholder="Card Number"
                      onChange={handleChange}
                      required
                      className='p-2 focus:outline-none mx-1'
                    />
                    <input
                      type="text"
                      name="visaExpiryDate"
                      placeholder="Expiry Date"
                      onChange={handleChange}
                      required
                       className='p-2 focus:outline-none mx-1'
                    />
                    <input
                      type="text"
                      name="visaCvv"
                      placeholder="CVV"
                      onChange={handleChange}
                      required
                       className='p-2 focus:outline-none mx-1'
                    />
                  </div>
                )}
                  <label className='block bg-light p-2 my-2'>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleChange}
                       className='mx-2'
                    />
                    PayPal
                  </label>
                </div>

               

                {/* <button type="submit">Place Order</button> */}
                <CustomButton bg='bg-primary' text='text-white' title='Place Order' />
                
              </form>

              {orderCreated && formData.paymentMethod === 'paypal' && (
                <PayPalButtons
                  style={{ layout: 'vertical' }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [{
                        amount: {
                          value: '1.00' // Replace with actual order amount
                        }
                      }]
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      alert('Transaction completed by ' + details.payer.name.given_name);
                      // You can also update the order status in WooCommerce to "paid" here
                    });
                  }}
                />
              )}
            </PayPalScriptProvider>

          </div>
          <div className='cart-section p-3'>
            <h4 className='text-center bg-slate-100 p-4'>Cart Content</h4>

            <div className='cart-items flex flex-col justify-between items-center '>
              {products.map(product => (
                <div className='my-2 cart-item flex items-center justify-between border shadow-md rounded-lg flex-1 w-full mx-3'>
                  <div>
                    <img src={product.image} width='100px' />
                  </div>
                  <div className='block flex-1 mx-2'>
                    <h1 className='text-sm'>{product.name.split('', 50)}</h1>

                    <div className='quanity-section flex items-center my-2'>
                      <button onClick={() => handleIncreaseQuantity(product.id)} className='bg-black w-5 h-5 text-white flex justify-center items-center'>+</button>
                      <input className='w-16 text-center' value={product.quantity} />
                      <button onClick={() => handleDecreaseQuantity(product.id)} className='bg-black w-5 h-5 text-white flex justify-center items-center'>-</button>
                    </div>

                  </div>
                  <div className='price-section mx-5'>
                    <p className='text-green-600'>{product.sale ? (<>product.sale</>) : (<>{product.price}</>)}</p>
                  </div>
                  <div className='m-2'>
                    <button onClick={() => handleremoveproduct(product.id)}><FaTrash color='red' /></button>
                  </div>
                </div>
              ))}



            </div>
            <div className='flex justify-between p-2'>
              <p>Total</p>
              <p>{carttotal}</p>
            </div>
            <div className='checkout-action mt-5'>
              <button className='w-full bg-primary p-3 text-white'>Place Order</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MobileFooter />
    </>
  )
}
