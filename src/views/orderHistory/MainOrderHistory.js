import React from "react"
import Image from "next/image"
import { styles } from "@/styles/styles"
import Link from "next/link"
import Button from "@/components/orderHistory/Button"
import AccordionHistory from "@/components/orderHistory/AccordionHistory"
import { useState, useEffect } from "react"

const MainOrderHistory = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData()
    }, 300) // Tunda pengecekan kondisi showAlert selama 300 milidetik

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/v1/api/order/history"
      )
      const { orders } = await response.json()
      const jsonData = orders
      setData(jsonData)
      setLoading(false)
    } catch (error) {
      console.log("Error fetching data:", error)
    }
  }

  const fetchFilteredOrders = async (searchQuery) => {
    try {
      const response = await fetch(`http://localhost:5000/v1/api/order/historysearch?orderCode=${searchQuery}`)
      const { orders } = await response.json()
      const data = orders
      setData(data)
    } catch (error) {
      console.error("Error fetching filtered order history:", error)
    }
  }

  const handleSearch = async (searchQuery) => {
    if (searchQuery.trim() !== "" && data.length !== 0) {
      console.log(data)
      await fetchFilteredOrders(searchQuery)
      setShowAlert(false)
    } else if (searchQuery === "") {
      setLoading(true)
      fetchData()
      setShowAlert(false)
    } else {
      setShowAlert(searchQuery.trim() !== "" && data.length == 0)
    }
  }

  return (
    <div className="md:mb-16">
      <div className="md:w-1/2 md:ml-0 ml-3 flex md:justify-center">
        <div className={"py-10 font-bold text-xl"}>Riwayat Pemesanan</div>
      </div>
      <Button
        onSearch={handleSearch}
      />
      {showAlert && (
        <div>
          <div className={`${styles.mainCol} pt-10`}>
            <Image src="../empty_history.svg" width={150} height={150} alt="empty" />
            <p className="text-main-purple pt-3 text-sm">Oops Riwayat Pesanan Kosong!</p>
            <p className="text-sm">Anda belum melakukan pemesanan penerbangan</p>
            <Link href="/home" className="py-3 px-24 rounded-xl mt-8 cursor-pointer bg-main-purple hover:bg-second-purple hover:font-semibold text-white">Cari Penerbangan</Link>
          </div>
        </div>
      )}
      <AccordionHistory
        orders={data}
        loading={loading}
      />
    </div>
  )
}

export default MainOrderHistory
