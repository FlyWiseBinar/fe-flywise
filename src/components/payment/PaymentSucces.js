import React from "react"
import Image from "next/image"
import Link from "next/link"

const PaymentSuccess = () => {
  return (
    <>
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
        <div className="items-center justify-center font-semibold text-center mt-3 mx-5">
          <p className=" text-purple-500">Selamat!</p>
          <p>Transaksi pembayaran tiket sukes!</p>
        </div>
        <div className="py-4 flex items-center justify-center mt-3">
          <button className="bg-purple-900 text-white w-80 font-semibold text-xl  p-3 rounded-lg hover:bg-purple-700 hover:text-white transition-colors duration-300 ease-in-out mx-5">
            Terbitkan Tiket
          </button>
        </div>
        <div className="flex justify-center items-center mb-5">
          <Link href={"/"} className="mx-5 text-center bg-white text-purple-900 border border-solid-2 border-purple-900 w-80 font-semibold text-xl  p-3 rounded-lg hover:bg-purple-700 hover:text-white transition-colors duration-300 ease-in-out">
            Cari Penerbangan Lain
          </Link>
        </div>
      </div>
    </>
  )
}

export default PaymentSuccess
