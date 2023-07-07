import React from "react"
import { styles } from "@/styles/styles"

const Banner = () => {
  const randomNumber = Math.floor(Math.random() * 100)
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
