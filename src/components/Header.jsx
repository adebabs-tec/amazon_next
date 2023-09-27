import Image from 'next/image'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <>
      <div>
        <Image src={logo} className="" />
      </div>
    </>
  )
}

export default Header
