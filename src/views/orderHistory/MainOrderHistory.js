import React from "react"
import Button from "@/components/orderHistory/Button"
import ImportAccordion from "@/components/orderHistory/ImportAccordion"

const MainOrderHistory = () => {
  return (
    <div className="mb-16">
      <div className="w-1/2 flex justify-center">
        <div className={"py-10 font-bold text-xl"}>Riwayat Pemesanan</div>
      </div>
      <Button/>
      <ImportAccordion/>
    </div>
  )
}

export default MainOrderHistory
