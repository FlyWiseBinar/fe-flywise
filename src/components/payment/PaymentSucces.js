import React from "react"
import { styles } from "@/styles/styles"
import Image from "next/image"
import { LuPlaneTakeoff, LuPlaneLanding } from "react-icons/lu"
import { MdDateRange, MdOutlineAirlineSeatReclineNormal } from "react-icons/md"
import { BsRepeat } from "react-icons/bs"
import Link from "next/link"

const PaymentSuccess = () => {
  return (
    <>
      <div className={`${styles.mainCol} py-5 shadow-md`}>
        <div
          className={`${styles.deadline} font-sans font-bold flex p-0 mt-10 mb-2`}
        >
          <p>Isi Data Diri</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <p>Bayar</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <p>Selesai</p>
        </div>
        <div
          className={`${styles.deadline} flex justify-center items-center w-3/4 p-5 mx-10 rounded-lg bg-green-500 text-white`}
        >
          <p className="font-sans font-semibold">
            Terimakasih atas pembayaran transaksi
          </p>
        </div>
      </div>
      <div className="py-5">
        <div className="flex justify-center items-center mb-5">
          <Image
            src="/assets/success.png"
            alt="image"
            width="250"
            height="250"
            className="flex justify-center items-center mt-10"
          ></Image>
        </div>
        <div className="items-center justify-center font-semibold text-center mt-3">
          <p className=" text-purple-500">Selamat!</p>
          <p>Transaksi pembayaran tiket sukes!</p>
        </div>
        <div className="py-4 flex items-center justify-center mt-3">
          <button className="bg-purple-900 text-white w-80 font-semibold text-xl text-sm  p-3 rounded-lg hover:bg-purple-700 hover:text-white transition-colors duration-300 ease-in-out">
            Terbitkan Tiket
          </button>
        </div>
        <div className="flex justify-center items-center mb-5">
          <button href="/home" className="bg-white text-purple-900 border border-solid-2 border-purple-900 w-80 font-semibold text-xl text-sm p-3 rounded-lg hover:bg-purple-700 hover:text-white transition-colors duration-300 ease-in-out">
            <Link href="/home">Cari Penerbangan Lain</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default PaymentSuccess
