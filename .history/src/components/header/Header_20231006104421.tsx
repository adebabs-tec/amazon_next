import Image from 'next/image'
import Link from 'next/link'
import logo from '../../images/logo.png'
import cartIcon from '../../images/carticon.png'
import { BiCaretDown } from 'react-icons/bi'
import { HiOutlineSearch } from 'react-icons/hi'
import { SlLocationPin } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { StateProps } from '../../../type'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { addUser } from '@/store/nextSlice'
import { userInfo } from 'os'

const Header = () => {
  const { data: session } = useSession()
  const { productData, favoriteData } = useSelector(
    (state: StateProps) => state.next,
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        }),
      )
    }
  }, [session])
  return (
    <>
      <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
        <div className="h-full w-full inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
          {/* logo */}
          <Link
            href={'/'}
            className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]"
          >
            <Image
              src={logo}
              alt="logoImg"
              className="w-28 object-cover mt-1"
            />
          </Link>
          {/* delivery */}
          <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
            <SlLocationPin />
            <div>
              <p>Delivery to</p>
              <p className="text-white font-bold uppercase">USA</p>
            </div>
          </div>
          {/* searchBar */}
          <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
            <input
              className="w-full h-full rounded-md placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
              type="text"
              placeholder="Search amazon_next products"
            />
            <span className="w-13 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
              <HiOutlineSearch />
            </span>
          </div>
          {/* signin */}
          {userInfo ? (
            <div>
              <img src="" alt="" />
            </div>
          ) : (
            <div
              onClick={() => signIn()}
              className="text-xs text-gray-100 px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex flex-col items-center justify-center h-[70%]"
            >
              <p>Hello, sign in</p>
              <p className="text-white font-bold flex items-center">
                Account & Lists{' '}
                <span>
                  <BiCaretDown />
                </span>
              </p>
            </div>
          )}
          {/* favourite */}
          <div className="text-xs text-gray-100 px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex flex-col items-center justify-center h-[70%] relative">
            <p>Marked</p>
            <p className="text-white font-bold">& Favourite</p>
            {favoriteData.length > 0 && (
              <span className="absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">
                {favoriteData.length}
              </span>
            )}
          </div>
          {/* cart */}
          <Link
            href={'/cart'}
            className="flex items-center px-2  border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
          >
            <Image
              src={cartIcon}
              alt="cartImg"
              className="w-auto object-cover h-8"
            />
            <p className="text-xs text-white font-bold mt-3">Cart</p>
            <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
              {productData ? productData.length : 0}
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
