import React, { useState, useEffect } from "react"
import { styles } from "@/styles/styles"

const PaymentCountdown = () => {
  const [countdown, setCountdown] = useState(900)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(interval)
  }, [])

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes} : ${seconds}`
  }
  return (
    <div className={`${styles.mainCol} py-5 shadow-md px-5`}>
      <div
        className={`${styles.deadline} font-sans font-bold flex p-0 mt-10 mb-2 mx-5`}
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
        <p className="text-gray-400">Bayar</p>
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
        <p className="text-gray-400">Selesai</p>
      </div>
      <div
        className={`${styles.deadline} flex justify-center items-center w-full p-5 mx-10 rounded-lg bg-red-500 text-white`}
      >
        <p className="font-sans font-bold text-xl flex gap-1">
          Selesaikan Dalam {formatTime(countdown)}
        </p>
      </div>
    </div>
  )
}

export default PaymentCountdown
