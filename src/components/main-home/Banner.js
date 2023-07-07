import React, { useState, useEffect } from "react"
import { styles } from "@/styles/styles"

const Banner = () => {
  const [randomNumber, setRandomNumber] = useState(0)

  useEffect(() => {
    const updateRandomNumber = () => {
      const newRandomNumber = Math.floor(Math.random() * 100)
      setRandomNumber(newRandomNumber)
    }

    // Update angka acak setiap 6 jam (21600000 ms)
    updateRandomNumber() // Pertama kali saat komponen di-mount
    const interval = setInterval(updateRandomNumber, 3600000)

    return () => {
      clearInterval(interval) // Membersihkan interval saat komponen di-unmount
    }
  }, [])

  return (
    <div className={`${styles.mainCol} py-5`}>
      <div className="w-full bg-main-orange h-[150px] absolute z-0 top-52"></div>
      <div
        className={`${styles.mainMaxWidth} flex justify-between items-center absolute h-[232px] z-10 top-44 lg:w-[90%] w-[80%] rounded-3xl bg-main-purple`}
      >
        <div className="text-4xl font-bold px-[5%] py-5 w-full flex flex-col text-white  gap-5 ">
          <i className="font-bold">Diskon Hari Ini</i>
          <div className="text-main-orange">{randomNumber}%</div>
        </div>

        <div
          className="w-full h-[232px] flex justify-end "
          style={{
            backgroundImage: "url('/assets/banner.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
          <div className="w-full h-auto bg-gradient-to-r  from-main-purple to-transparent"></div>
        </div>
      </div>
      <div className={`${styles.mainMaxWidth}`}></div>
    </div>
  )
}

export default Banner
