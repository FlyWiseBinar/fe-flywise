import React from "react"
import Button from "@/components/orderHistory/Button"
import ImportAccordion from "@/components/orderHistory/ImportAccordion"
import EmptyHistory from "@/components/orderHistory/EmptyHistory"

const MainOrderHistory = () => {
  return (
    <div className="md:mb-16">
      <div className="md:w-1/2 md:ml-0 ml-3 flex md:justify-center">
        <div className={"py-10 font-bold text-xl"}>Riwayat Pemesanan</div>
      </div>
      <Button/>
      <ImportAccordion/>
      <EmptyHistory/>
    </div>
  )
}

export default MainOrderHistory
