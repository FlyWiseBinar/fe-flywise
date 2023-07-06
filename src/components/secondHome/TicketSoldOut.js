import React from "react"
import { styles } from "@/styles/styles"

const SoldOut = () => {
  return (
    <div className={`${styles.mainCol} mt-10`}>
      <div>
        <img src="./soldOut.svg" alt="" />
      </div>
      <p className="font-medium">Maaf, Tiket Terjual Habis!</p>
      <p className="text-main-purple font-medium">
        Coba cari perjalanan lainnya!
      </p>
    </div>
  )
}

export default SoldOut
