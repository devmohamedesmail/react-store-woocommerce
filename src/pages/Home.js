import React from 'react'
import Categories from '../components/categories/Categories'
import Products from '../components/products/Products'
import Footer from '../components/footer/Footer'
import MobileFooter from '../components/mobileFooter/MobileFooter'
import TopHeader from '../components/topHeader/TopHeader'
import MiddleHeader from '../components/MiddleHeader/MiddleHeader'
import BottomHeader from '../components/BottomHeader/BottomHeader'
import Banner from '../components/banner/Banner'


export default function Home() {
  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
      <Categories />
      <Banner />
      <Products />
      <Footer />
      <MobileFooter />
    </>
  )
}
