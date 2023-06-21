import React from "react"
import Button from "@/components/orderHistory/Button"
import AccordionHistory from "@/components/orderHistory/AccordionHistory"
import { useState, useEffect } from "react"

const MainOrderHistory = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://be-flywise-stagging-jcbxz3zpbq-as.a.run.app/v1/api/order/history"
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
      const response = await fetch(`https://be-flywise-stagging-jcbxz3zpbq-as.a.run.app/v1/api/order/historysearch?orderCode=${searchQuery}`)
      const { orders } = await response.json()
      const data = orders
      setData(data)
    } catch (error) {
      console.error("Error fetching filtered order history:", error)
    }
  }

  const handleSearch = async (searchQuery) => {
    if (searchQuery.trim() !== "") {
      await fetchFilteredOrders(searchQuery)
    } else {
      setLoading(true)
      fetchData()
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
      <AccordionHistory
        orders={data}
        loading={loading}
      />
    </div>
  )
}

export default MainOrderHistory
