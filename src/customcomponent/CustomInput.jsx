import React from 'react'

export default function CustomInput({label,type,placeholder,value , onchange , name}) {
    return (
        <div className='p-2 m-1'>
            <label className='block text-sm mb-2'>{label}</label>
            <input type={type} placeholder={placeholder} onChange={onchange} name={name} value={value} className='px-2 border py-2 rounded-md w-full focus:outline-none' />
        </div>
    )
}
