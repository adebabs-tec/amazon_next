import React from 'react'
import { resetCart } from '@/store/nextSlice'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

const Success = () => {
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col gap-2 items-center justify-center py-20">
      <h1>Thank you for shopping with us</h1>
      <Link href={'/'} onClick={() => dispatch(resetCart())}>
        <p>Continue Shopping</p>
      </Link>
    </div>
  )
}

export default Success
