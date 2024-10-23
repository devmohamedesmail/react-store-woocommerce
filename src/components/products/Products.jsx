import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios';
import ApiData from '../../GlobalData/ApiData';
import ProductItem from './ProductItem';
import ProductsSkeleton from './ProductsSkeleton';
import { FetchedData } from '../../context/FetchedData';


export default function Products() {
    const {products}=useContext(FetchedData)
  return (
    <div className='container px-5 m-auto'>
        <div className="section-title mb-5">
            <h3 className='font-bold'>All Products</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-2">
            {products && products.length > 0 ? (
            <>{products.map((product)=>(
                <ProductItem id={product.id} key={product.id} image={product.images[0].src} price={product.price} sale={product.sale} name={product.name} />
            ))}</>
            ):(<ProductsSkeleton />)}
           
        </div>
      
    </div>
  )
}
