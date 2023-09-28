import Image from 'next/image'
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <>
      <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
        <div className="h-full w-full inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
          {/* logo */}
          <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
            <Image
              src={logo}
              alt="logoImg"
              className="w-28 object-cover mt-1"
            />
          </div>
          {/* delivery */}
          <div>
            <p>Delivery to</p>
            <p>USA</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
