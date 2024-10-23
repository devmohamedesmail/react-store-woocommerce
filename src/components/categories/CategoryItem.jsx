import React from 'react'
import { Link } from 'react-router-dom'
export default function CategoryItem({id,name,image,count}) {
    return (
        <Link to={`shop/${id}`} className='flex flex-col items-center my-3 bg-white py-3 rounded-lg' key={id}>
            <Link to={`shop/${id}`} className="cat-image block overflow-hidden w-28 h-28 " key={id}>
               {image ? ( <img src={image} width='100%' alt={name} />) :(<></>) }
                
            </Link>
            <div className="cat-content text-center mt-3">
                <p className='font-bold text-sm'>{name}</p>
                <p>{count}</p>
            </div>

        </Link>
    )
}
