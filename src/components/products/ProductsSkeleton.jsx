import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function ProductsSkeleton() {
  const skeletons = Array.from({ length: 6 }, (_, index) => (
    <div key={index} className='flex flex-col justify-center m-2'>
      <div className='text-center'>
        <Skeleton height={200} />
      </div>
      <div className='text-center'>
        <Skeleton height={20} count={4} />
      </div>
    </div>
  ))
  return (
    <>
      {skeletons}
    </>
  )
}
