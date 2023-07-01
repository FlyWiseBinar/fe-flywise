import Isidata from "@/components/payment/Isidata"
import React from "react"
import Head from "next/head"
// import { getCookie } from "cookies-next"
import axios from "axios"
import api from "@/configs/api"

const index = ({ data }) => {


  // const token = getCookie("accessToken")

  // console.log('cookie', token);
  // console.log('data', data);
  return (
    <div>
      <Head>
        <title>Payment | FlyWise</title>
        <link rel="icon" href="../logo.svg" />
      </Head>
      <Isidata countseat={data?.countseat} dataSchedule={data?.dataSchedule} dataSeat={data?.dataSeat} />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { countseat, idschedule, adult, child, baby } = context.query

  const response = await axios.get(`${api.apiSchedule}/${idschedule}`)
  const dataSchedule = response.data.data
  return {
    props: {
      data: {
        countseat: countseat,
        dataSchedule: dataSchedule,
        dataSeat: {
          adult: parseInt(adult),
          baby: parseInt(baby),
          child: parseInt(child)
        }
      }
    }
  }
}

export default index
