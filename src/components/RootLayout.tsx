import React, { Children, ReactElement } from 'react'
import Footer from './Footer'
import BottomHeader from './header/BottomHeader'
import Header from './header/Header'

interface Props {
  children: ReactElement
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </>
  )
}

export default RootLayout
