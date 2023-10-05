import React from 'react'
import Image from 'next/image'
import { cartProductProps } from '../../type'
import FormattedPrice from './FormattedPrice'
import { LuMinus, LuPlus } from 'react-icons/lu'
import { IoMdClose } from 'react-icons/io'

const CartProduct = ({ item }: cartProductProps) => {
  return (
    <div className="bg-gray-100 rounded-lg flex items-center gap-4">
      <Image
        src={item.image}
        width={150}
        height={150}
        alt="productImage"
        className="object-cover"
      />
      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-600">
            Unit Price{' '}
            <span className="font-semibold text-amazon_blue">
              <FormattedPrice amount={item.price} />
            </span>
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-between mt-1 border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
              <span className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-gray-300 rounded-full duration-300 cursor-pointer">
                <LuPlus />
              </span>
              <span>{item.quantity}</span>
              <span className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-gray-300 rounded-full duration-300 cursor-pointer">
                <LuMinus />
              </span>
            </div>
            <div className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300">
              <IoMdClose className="mt-[2px]" /> <p>remove</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
