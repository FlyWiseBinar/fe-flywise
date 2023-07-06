import { styles } from "@/styles/styles"
import { LuArrowLeft } from "react-icons/lu"

import React from "react"
import Link from "next/link"

const Button = ({airportButton, classButton, countPassengerButton}) => {
  return (
    <>
      <div className="flex justify-center">
        <div className={`${styles.mainRow} gap-3 flex flex-col lg:flex-row md:flex-col max-w-[1000px] p-5`}>
          <div className="w-full">
            <Link href="/" className="flex gap-5 items-center bg-purple-900 p-3 px-10 rounded-xl text-white hover:bg-purple-700 md:pr-80 duration-75">
              {" "}
              <LuArrowLeft /> {airportButton.originAirport.airportCode} &gt; {airportButton.destinationAirport.airportCode} - {countPassengerButton} Penumpang - {classButton}
            </Link>
          </div>
          <div className="w-full lg:w-[300px] md:w-full">
            <button className="justify-center bg-green-500 p-3 rounded-xl text-white hover:bg-green-300 duration-75 w-full lg:w-full md:w-full font-bold">
              {" "}
              Ubah Pencarian
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Button
