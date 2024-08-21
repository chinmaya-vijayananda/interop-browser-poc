import React from 'react'
import Footer from '../footer/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className='flex flex-grow h-full mb-10'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
