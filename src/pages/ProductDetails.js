import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ApiData from '../GlobalData/ApiData';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import ProductInfo from '../components/productinfo/ProductInfo';
import TopHeader from '../components/topHeader/TopHeader'
import MiddleHeader from '../components/MiddleHeader/MiddleHeader'
import MobileFooter from '../components/mobileFooter/MobileFooter'
import Footer from '../components/footer/Footer'


export default function ProductDetails() {
  const { id } = useParams()
  const [ProductDetails, setproductDetils] = useState();
  const [images, setImages] = useState([])


  const getProductDetails = async () => {
    try {
      const response = await axios.get(`${ApiData.url}wp-json/wc/v3/products/${id}`, {
        auth: {
          username: `${ApiData.Consumerkey}`,
          password: `${ApiData.Consumersecret}`,
        }
      })
      setproductDetils(response.data)
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    getProductDetails()
    if (ProductDetails && ProductDetails.images && ProductDetails.images.length > 0) {
      const imageUrls = ProductDetails.images.map(image => ({
        original: image.src,
        thumbnail: image.src,
      }));
      setImages(imageUrls);
    }
  }, [images, ProductDetails])

  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <div className='container m-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='images-gallery'>
            {images && images.length > 0 ? (<ImageGallery items={images} showIndex='true' showBullets='true' thumbnailPosition="bottom" autoPlay='true' />) : (<>
              <Skeleton width={700} height={500} />
            </>)}
          </div>

          <ProductInfo ProductDetails={ProductDetails} />
        </div>

        <div className='product-details p-3'>
          {ProductDetails ? (
            <div dangerouslySetInnerHTML={{ __html: ProductDetails.description }} />
          ) : (
            <Skeleton width={500} height={300} />
          )}


        </div>

      </div>
      <Footer />
      <MobileFooter />
    </>


  )
}
