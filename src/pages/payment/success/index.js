import Navbar from "@/components/Navbar"
import PaymentSuccess from "@/components/payment/PaymentSucces"
import React from "react"
import Head from "next/head"

const index = () => {
  return (
    <div>
      <Head>
        <title>Payment | FlyWise</title>
        <link rel="icon" href="../logo.svg" />
      </Head>
      <Navbar />
      <PaymentSuccess />
    </div>
  )
}

export default index
