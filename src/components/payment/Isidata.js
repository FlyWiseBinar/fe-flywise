import React from "react"
import { styles } from "@/styles/styles"
import { Fragment, useState } from "react"
import CardPemesan from "./CardPemesan"
import CardPenumpang from "./CardPenumpang.js"
import Detail from "./Detail"
import PaymentCountdown from "./PaymentCountdown"
import Simpan from "./Simpan"
import { CountdownProvider } from "./CountdownContext"

const Isidata = () => {
  return (
    <>
      <div className={`${styles.mainCol}`}>
        <PaymentCountdown />
        <div
          className={`${styles.deadline} justify-center lg:items-start w-full md:items-center p-5 flex flex-col lg:flex-row md:flex-col`}
        >
          <div className="flex flex-col w-full gap-10 px-5">
            <CardPemesan />
            <CardPenumpang />
            <Simpan />
          </div>
          <Detail />
        </div>
      </div>
    </>
  )
}

export default Isidata
