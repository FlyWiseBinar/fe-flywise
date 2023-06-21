import React from "react"
import SecondHome from "@/views/secondHome/secondHome"
import Navbar from "@/components/Navbar"
import Head from "next/head"

const index = () => {
  return (
    <div>
    <Head>
    <title>Search | Flywise</title>
    <link rel="icon" href="../logo.svg" />
    </Head>
    <Navbar/>
      <SecondHome/>
    </div>
  )
}

export default index
