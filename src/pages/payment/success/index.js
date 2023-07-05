import PaymentSuccess from "@/components/payment/PaymentSucces"
import React from "react"
import Head from "next/head"
import Navbar from "@/components/Navbar"

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
