/* eslint-disable */
import Isidata from "@/components/payment/Isidata"
import React, { useEffect, useState } from "react"
import Head from "next/head"
import { getCookie } from "cookies-next"
import axios from "axios"
import api from "@/configs/api"
import { useRouter } from "next/router"
import Link from "next/link"
import Navbar from "@/components/Navbar"

const index = ({ data }) => {
  const token = getCookie("accessToken")
  const [isLogin, setIsLogin] = useState(token)
  const router = useRouter()

  useEffect(() => {
    axios
      .get(api.apiWhoAmI, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setIsLogin({ status: true, data: result?.data?.data })
      })
      .catch(() => {
        router.push("/login")
      })
  }, [])

  // console.log('islogin', isLogin);

  if (isLogin?.status) {
    return (
      <div>
        <Head>
          <title>Payment | FlyWise</title>
          <link rel="icon" href="../logo.svg" />
        </Head>
        <Navbar />
        <Isidata
          token={token}
          countseat={data?.countseat}
          dataSchedule={data?.dataSchedule}
          dataSeat={data?.dataSeat}
        />
      </div>
    )
  } else {
    return (
      <div className="h-screen w-full items-center justify-center flex flex-col gap-4">
        <Navbar />
        <img
          src="/assets/schedule-not-found.png"
          height={200}
          width={200}
          alt="not login"
        />
        <p className="text-2xl font-semibold">
          Silahkan Login Terlebih Dahulu!
        </p>
        <Link
          href={"/login"}
          className="p-5 bg-main-purple rounded-xl hover:scale-110 duration-300 text-white"
        >
          Menu Login
        </Link>
      </div>
    )
  }
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
          child: parseInt(child),
        },
      },
    },
  }
}

export default index
