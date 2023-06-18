import React from 'react'
// import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Navbar_login from '@/components/Navbar_login'

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar_login />
      <Component {...pageProps} />
    </>
  )
}
