import React from 'react'
import { resetCart } from '@/store/nextSlice'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

const Success = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Thank you for shopping with us</h1>
      <Link href={'/'} onClick={() => dispatch(resetCart())}>
        <p>Continue Shopping</p>
      </Link>
    </div>
  )
}

export default Success
