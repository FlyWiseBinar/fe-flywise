import React from "react"
import MainHome from "@/views/home/MainHome"
import Navbar from "@/components/Navbar"
import Head from "next/head"

const index = () => {
  return (
    <div>
    <Head>
    <title>Homepage | FlyWise</title>
    <link rel="icon" href="./logo.svg" />
    </Head>
    <Navbar/>
        <MainHome/>
    </div>
  )
}

export default index