import React from "react"
import Image from "next/image"
import { styles } from "@/styles/styles"
import Link from "next/link"
import Button from "@/components/orderHistory/Button"
import AccordionHistory from "@/components/orderHistory/AccordionHistory"
import { useState, useEffect } from "react"
import getToken from "@/utils/getToken"

const MainOrderHistory = () => {
  const token = getToken()
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
        "https://be-flywise-stagging-jcbxz3zpbq-as.a.run.app/v1/api/order/history",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
      const response = await fetch(
        `https://be-flywise-stagging-jcbxz3zpbq-as.a.run.app/v1/api/order/historysearch?orderCode=${searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
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
      <Button onSearch={handleSearch} />
      {showAlert && (
        <div>
          <div className={`${styles.mainCol} pt-10`}>
            <Image src="../empty.svg" width={250} height={250} alt="empty" />
            <p className="text-main-purple pt-3 text-sm">
              Oops Riwayat Pesanan Tidak Ditemukan!
            </p>
            <p className="text-sm">Silakan Cek Kembali Tiket Anda</p>
            <Link
              href="/orderHistory"
              className="py-3 px-24 rounded-xl mt-8 cursor-pointer bg-main-purple hover:bg-second-purple hover:font-semibold text-white"
            >
              Cari
            </Link>
          </div>
        </div>
      )}
      <AccordionHistory orders={data} loading={loading} />
    </div>
  )
}

export default MainOrderHistory
