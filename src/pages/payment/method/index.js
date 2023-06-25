import Navbar from "@/components/Navbar"
import Payment from "@/components/payment/Payment"
import React from "react"
import Head from "next/head"

const index = () => {
  return (
    <div>
      <Head>
        <title>Payment | FlyWise</title>
        <link rel="icon" href="../logo.svg" />
      </Head>
      <Payment />
    </div>
  )
}

export default index
