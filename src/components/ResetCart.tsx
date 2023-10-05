import { resetCart } from '@/store/nextSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const ResetCart = () => {
  const dispatch = useDispatch()
  const handleResetClick = () => {
    const confirmReset = window.confirm(
      'Are you sure you want to reset your items from the cart?',
    )
    if (confirmReset) {
      dispatch(resetCart())
    }
  }
  return (
    <button
      onClick={handleResetClick}
      className="w-44 h-10 font-semibold rounded-lg bg-gray-200 hover:bg-red-600 hover:text-white duration-300"
    >
      reset cart
    </button>
  )
}

export default ResetCart
