import React from 'react'
import Image from 'next/image'
import { cartProductProps } from '../../type'
import FormattedPrice from './FormattedPrice'
import { LuMinus, LuPlus } from 'react-icons/lu'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import {
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
} from '@/store/nextSlice'

const CartProduct = ({ item }: cartProductProps) => {
  const dispatch = useDispatch()
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
              <span
                onClick={() =>
                  dispatch(
                    increaseQuantity({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      image: item.image,
                      description: item.description,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quantity: 1,
                    }),
                  )
                }
                className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-gray-300 rounded-full duration-300 cursor-pointer"
              >
                <LuPlus />
              </span>
              <span>{item.quantity}</span>
              <span
                onClick={() =>
                  dispatch(
                    decreaseQuantity({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      image: item.image,
                      description: item.description,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quantity: 1,
                    }),
                  )
                }
                className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-gray-300 rounded-full duration-300 cursor-pointer"
              >
                <LuMinus />
              </span>
            </div>
            <div
              onClick={() => dispatch(deleteProduct(item._id))}
              className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300"
            >
              <IoMdClose className="mt-[2px]" /> <p>remove</p>
            </div>
          </div>
        </div>
        <div className="text-lg font-semibold text-amazon_blue">
          <FormattedPrice amount={item.price * item.quantity} />
        </div>
      </div>
    </div>
  )
}

export default CartProduct
