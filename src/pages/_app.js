
import React from "react"
import Navbar from "@/components/Navbar"
import "@/styles/globals.css"


// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )

}

