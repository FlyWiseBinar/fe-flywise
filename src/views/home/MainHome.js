
import React from "react"
import Banner from "@/components/main-home/Banner"
import CardOrder from "@/components/main-home/CardOrder"
import Favorit from "@/components/main-home/Favorit"

const MainHome = () => {
  return (
    <div>
      <Banner />
      <div className="mt-[360px] absolute inset-0 z-30">
        <CardOrder />
        <Favorit />
      </div>
    </div>
  )
}

export default MainHome

