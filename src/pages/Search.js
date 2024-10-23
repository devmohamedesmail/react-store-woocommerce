import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import TopHeader from '../components/topHeader/TopHeader';
import MiddleHeader from '../components/MiddleHeader/MiddleHeader';
import BottomHeader from '../components/BottomHeader/BottomHeader';
import Footer from '../components/footer/Footer';
import MobileFooter from '../components/mobileFooter/MobileFooter';

export default function Search() {
    const location = useLocation();
    const { state } = location;
    const { result } = state || { results: [] };

    console.log(result)
  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
      <ul>
        {result.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    
       <Footer />
       <MobileFooter />
    </>
  )
}
