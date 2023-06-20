import React from "react"
import MainHome from "@/views/home/MainHome"
import Head from "next/head"

const index = () => {
  return (
    <div>
      <Head>
        <title>Homepage | FlyWise</title>
        <link rel="icon" href="./logo.svg" />
      </Head>
      <MainHome />
    </div>
  )
}

export default index