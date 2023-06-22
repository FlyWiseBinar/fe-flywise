import React from "react"
import MainOrderHistory from "@/views/orderHistory/MainOrderHistory"
import Head from "next/head"
import Navbar from "@/components/Navbar"
import ImportAccordion from "@/components/orderHistory/ImportAccordion"

const index = () => {
  return (
    <>
    <Head>
    <title>Riwayat Pemesanan | FlyWise</title>
    <link rel="icon" href="../logo.svg" />
  </Head>
  <Navbar/>
    <MainOrderHistory/>
    </>

  )
}

export default index
