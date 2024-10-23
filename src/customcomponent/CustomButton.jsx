import React from 'react'

export default function CustomButton({title, bg, text,onclick}) {
  return (
    
      <button type='submit' onClick={onclick} className={`px-10 py-2 rounded-md ${bg} ${text}`}>{title}</button>
   
  )
}
