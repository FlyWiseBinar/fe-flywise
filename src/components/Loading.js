import React from "react"
import { styles } from "@/styles/styles"

const Loading = () => {
  return (
    <div className={`${styles.mainCol} mt-10`}>
      <p className="text-slate-600 mb-3">Mesin Penerbangan Terbaik...</p>
      <p className="text-slate-300 text-xl mb-3">Loading...</p>
      <div>
        <img src="./illustrationLoading.svg" alt="ini loading" />
      </div>
    </div>
  )
}

export default Loading
