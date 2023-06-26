import React from "react"
import MainOrderHistory from "@/views/orderHistory/MainOrderHistory"
import Head from "next/head"

const index = () => {
  return (
    <>
      <Head>
        <title>Riwayat Pemesanan | FlyWise</title>
        <link rel="icon" href="../logo.svg" />
      </Head>

      <MainOrderHistory />
    </>
  )
}

export default index
