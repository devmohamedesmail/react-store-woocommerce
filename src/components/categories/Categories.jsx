import React, { useContext } from 'react'
import CategoryItem from './CategoryItem'
import 'react-loading-skeleton/dist/skeleton.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import CategoriesSkeleton from '../categoriesSkeleton/CategoriesSkeleton'
import { FetchedData } from '../../context/FetchedData'




export default function Categories() {
    const {categories,setCategories} = useContext(FetchedData)   
    return (
        <div className='container px-5 m-auto'>
            <div className='flex justify-between items-center my-4'>
                <h4>Browse Categories</h4>
                <div className='flex items-center'>
                    <h4 className='mx-2'>show more</h4>
                    <FaLongArrowAltRight />

                </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3 items-center">
                {categories && categories.length > 0 ? (<>{categories.map((cat) => (
                    <CategoryItem 
                    id={cat.id} 
                    // image={cat.image.src} 
                    name={cat.name} count={cat.count} key={cat.id} />
                ))}</>) : (<CategoriesSkeleton />)}
            </div>
        </div>
    )
}
