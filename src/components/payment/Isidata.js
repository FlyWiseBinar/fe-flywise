import React from "react"
import { styles } from "@/styles/styles"
import CardPemesan from "./CardPemesan"
import CardPenumpang from "./CardPenumpang.js"
import Detail from "./Detail"
import PaymentCountdown from "./PaymentCountdown"
// import Simpan from "./Simpan"

const Isidata = ({ countseat, dataSchedule, dataSeat }) => {
  // console.log('data schedule', dataSeat);
  return (
    <>
      <div className={`${styles.mainCol}`}>
        <PaymentCountdown />
        <div
          className={`${styles.deadline} justify-center lg:items-start w-full md:items-center p-5 flex flex-col lg:flex-row md:flex-col`}
        >
          <div className="flex flex-col w-full gap-10 px-5">

            <CardPemesan />
            {
              Array.from({ length: countseat }, (i) => (
                <div key={i}>
                  <CardPenumpang />
                </div>
              ))
            }

            {/* <Simpan /> */}
          </div>
          <Detail dataSchedule={dataSchedule} dataSeat={dataSeat} />
        </div>
      </div>
    </>
  )
}

export default Isidata
