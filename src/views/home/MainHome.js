import React from "react"
import Banner from "@/components/main-home/Banner"
import CardOrder from "@/components/main-home/CardOrder"
import Favorit from "@/components/main-home/Favorit"

const MainHome = ({ favorite }) => {
  return (
    <div>
      <Banner />
      <div className="mt-[360px] absolute inset-0 z-30 flex flex-col gap-20">
        <CardOrder />
        <Favorit favorite={favorite} />
      </div>
    </div>
  )
}

export default MainHome
