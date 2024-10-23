import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function CategoriesSkeleton() {
    const skeletons = Array.from({ length: 5 }, (_, index) => (
        <div key={index} className='flex flex-col justify-center m-2'>
          <div className='text-center'>
            <Skeleton circle width={100} height={100} />
          </div>
          <div className='text-center'>
            <Skeleton height={20} width={100} />
          </div>
        </div>
      ));
    return (
       <> {skeletons}</>
    )
}
