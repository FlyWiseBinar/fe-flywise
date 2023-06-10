import React from 'react'
import {styles} from "@/styles/styles"

const Empty = () => {
  return (
    <div className={`${styles.mainCol} mt-10`}>
      <div><img src="./empty.svg" alt="" /></div>
      <p className="font-medium">Maaf, pencarian Anda tidak ditemukan</p>
      <p className="text-main-purple font-medium">Coba cari perjalanan lainnya!</p>
    </div>
  )
}

export default Empty
