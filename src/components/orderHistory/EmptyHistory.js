import React from "react"
import Image from "next/image"
import {styles} from "@/styles/styles"
import Link from "next/link"

const EmptyHistory = () => {
  return (
    <div>
      <div className={`${styles.mainCol} pt-10`}>
      <Image src="../empty_history.svg" width={150} height={150} alt="empty"/>
      <p className="text-main-purple pt-3 text-sm">Oops Riwayat Pesanan Kosong!</p>
      <p className="text-sm">Anda belum melakukan pemesanan penerbangan</p>
      <Link href="/" className="py-3 px-24 rounded-xl mt-8 cursor-pointer bg-main-purple hover:bg-second-purple hover:font-semibold text-white">Cari Penerbangan</Link>
      </div>
    </div>
  )
}

export default EmptyHistory
