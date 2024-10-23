import React from 'react'
import { Link } from 'react-router-dom'

export default function TopHeader() {
  return (
    <div className='top-header bg-slate-50'>
      <div className='container m-auto flex flex-col lg:flex-row justify-between items-center py-2'>
        <div className='left-side'>
        <p className='text-xs'>Special collection already available. Read more ...</p>
        </div>
        <div className='right-side'>
           <button className='text-xs mx-2'>Arabic</button>
           <Link to='/login' className='text-xs mx-2'>Login / Sign up</Link>
        </div>
      </div>
    </div>
  )
}
