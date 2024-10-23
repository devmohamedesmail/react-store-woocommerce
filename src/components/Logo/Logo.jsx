import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({ width }) {
  return (
    <Link to='/' className="logo">
      <img src="/images/logo.png" width={width} alt='website name' />
    </Link>
  )
}
