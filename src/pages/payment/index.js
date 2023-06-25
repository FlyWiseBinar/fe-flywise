import Isidata from "@/components/payment/Isidata"
import React from "react"
import Head from "next/head"

const index = () => {
  return (
    <div>
      <Head>
        <title>Payment | FlyWise</title>
        <link rel="icon" href="../logo.svg" />
      </Head>

      <Isidata />
    </div>
  )
}

export default index
