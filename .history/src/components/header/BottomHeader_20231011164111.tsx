import React from 'react'
import { signOut } from 'next-auth/react'
import { LuMenu } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { StateProps } from '../../../type'
import { removeUser } from '@/store/nextSlice'

const BottomHeader = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state: StateProps) => state.next)
  const handleSignOut = () => {
    signOut()
    dispatch(removeUser)
  }
  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
      <p className="flex items-center gap-1 h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        <LuMenu className="text-md" />
        All
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Todays Deals
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Customer Service
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Registry
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Gift Cards
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Sell
      </p>
      {userInfo && (
        <button
          onClick={handleSignOut}
          className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-red-600 text-amazon_yellow hover:text-red-400 cursor-pointer duration-300 px-2"
        >
          Sign Out
        </button>
      )}
    </div>
  )
}

export default BottomHeader
