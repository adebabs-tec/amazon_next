import React from 'react'
import { resetCart } from '@/store/nextSlice'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

const Success = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Thank you for shopping with us</h1>
      <Link href={}></Link>
    </div>
  )
}

export default Success
