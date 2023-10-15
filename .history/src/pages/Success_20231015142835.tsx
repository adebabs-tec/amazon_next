import React from 'react'
import { resetCart } from '@/store/nextSlice'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

const Success = () => {
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col gap-2 items-center justify-center py-20">
      <h1 className="text-2xl font-semibold text-hoverBg">
        Thank you for shopping with us
      </h1>
      <Link
        className="text-lg text-gray-500 hover:underline underline-offset-4 "
        href={'/'}
        onClick={() => dispatch(resetCart())}
      >
        <p>Continue Shopping</p>
      </Link>
    </div>
  )
}

export default Success
