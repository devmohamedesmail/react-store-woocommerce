import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import TopHeader from '../components/topHeader/TopHeader'
import MiddleHeader from '../components/MiddleHeader/MiddleHeader'
import BottomHeader from '../components/BottomHeader/BottomHeader'
import Footer from '../components/footer/Footer'
import MobileFooter from '../components/mobileFooter/MobileFooter'
import { HiAdjustments } from "react-icons/hi";
import axios from 'axios'
import ApiData from '../GlobalData/ApiData'
import ProductItem from '../components/products/ProductItem'
import ProductsSkeleton from '../components/products/ProductsSkeleton'
import { FetchedData } from '../context/FetchedData'




export default function Shop() {
  const { id } = useParams()
  const [categoryproducts, setcategoryproducts] = useState([])
  const [filterOpen, setFilterOpen] = useState(false)
  const { categories } = useContext(FetchedData)


  const fetchcategoryproducts = async () => {
    try {
      const response = await axios.get(`${ApiData.url}wp-json/wc/v3/products?category=${id}}`, {
        auth: {
          username: `${ApiData.Consumerkey}`,
          password: `${ApiData.Consumersecret}`,
        },
      })
      setcategoryproducts(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  // openFilter
  const openFilter = () => {
    setFilterOpen(prevState => !prevState)

  }



  useEffect(() => {
    fetchcategoryproducts()
  }, [])

  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
      <div className='container m-auto'>
        {/* <div className='my-3 flex justify-end'>
          <button onClick={openFilter} className='bg-white p-2 shadow'> <HiAdjustments /></button>
        </div> */}

        {/* <div className={`fixed top-0 bottom-0 w-5/6 lg:w-1/4  z-50 bg-white p-2 ${filterOpen ? 'left-0 ' : 'left-full'}`}>
          <div className='content'>
            <section className='my-3'>
              <h2 className='font-bold text-center bg-primary p-2 text-white text-sm mb-3'>Categories</h2>

              {categories && categories.map((category) => (
                <div className='flex items-center mb-1'>
                  <input type='checkbox' className='block' name='category-name' />
                  <label className='block text-sm mx-2'>{category.name}</label>
                </div>
              ))}
            </section>
            <hr />

     
            <section className='mt-4'>
              <button className='text-center  px-3 py-2 text-white rounded-lg mx-5 bg-primary'>Apply Filter</button>
            </section>
          </div>

        </div> */}


        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-2">
          {categoryproducts && categoryproducts.length > 0 ? (
            <>{categoryproducts.map((product) => (
              <ProductItem id={product.id} key={product.id} image={product.images[0].src} price={product.price} sale={product.sale} name={product.name} />
            ))}</>
          ) : (<ProductsSkeleton />)}

        </div>


      </div>
      <Footer />
      <MobileFooter />

    </>
  )
}
