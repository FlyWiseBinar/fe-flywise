import React from "react"
import Head from "next/head"
import Navbar from "@/components/Navbar"
import EmptyHistory from "@/components/orderHistory/EmptyHistory"
import MainOrderHistory from "@/views/orderHistory/MainOrderHistory"

const emptyHistory = () => {
  return (
    <div>
      <Head>
        <title>Riwayat Pemesanan | FlyWise</title>
        <link rel="icon" href="../logo.svg" />
      </Head>

      <MainOrderHistory />
      <EmptyHistory />
    </div>
  )
}

export default emptyHistory
