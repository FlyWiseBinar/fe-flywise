import React from "react"
import { styles } from "@/styles/styles"
import PaymentMethod from "./PaymentMethod"
import PaymentCountdown from "./PaymentCountdown"
import DetailMethod from "./DetailMethod"

const Payment = () => {
  return (
    <div className={`${styles.mainCol}`}>
      <PaymentCountdown />
      <div
        className={`${styles.deadline} justify-center lg:items-start md:items-center py-5 flex flex-col-reverse lg:flex-row md:flex-col-reverse `}
      >
        <PaymentMethod />
        <DetailMethod />
      </div>
    </div>
  )
}

export default Payment
