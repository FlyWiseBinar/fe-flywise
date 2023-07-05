import React from "react"
import MainHome from "@/views/home/MainHome"
import Head from "next/head"

import api from "@/configs/api"
import axios from "axios"
import Navbar from "@/components/Navbar"

const index = ({ favorite }) => {
  return (
    <div>
      <Head>
        <title>Homepage | FlyWise</title>
        <link rel="icon" href="../logo.svg" />
      </Head>
      <Navbar />
      <MainHome favorite={favorite} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await axios.get(api.apiScheduleFavorite)
  const favorite = data.data.data
  return { props: { favorite } }
}

export default index
