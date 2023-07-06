import React from "react"
import { styles } from "@/styles/styles"
import PaymentMethod from "./PaymentMethod"
import PaymentCountdown from "./PaymentCountdown"
import Detail from "./Detail"

const Payment = ({ token, code, data }) => {
  return (
    <div className={`${styles.mainCol}`}>
      <PaymentCountdown />
      <div
        className={`${styles.deadline} justify-center lg:items-start md:items-center py-5 flex flex-col-reverse lg:flex-row md:flex-col-reverse `}
      >
        <PaymentMethod code={code} token={token} />
        <Detail
          countseat={data?.countseat}
          dataSchedule={data?.dataSchedule}
          dataSeat={data?.dataSeat}
          isPayment={true}
        />
      </div>
    </div>
  )
}

export default Payment
