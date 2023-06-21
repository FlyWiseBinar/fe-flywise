import React from "react"
import Button from "@/components/orderHistory/Button"

const MainOrderHistory = () => {
  return (
    <div className="md:mb-16">
      <div className="md:w-1/2 md:ml-0 ml-3 flex md:justify-center">
        <div className={"py-10 font-bold text-xl"}>Riwayat Pemesanan</div>
      </div>
      <Button/>
    </div>
  )
}

export default MainOrderHistory
