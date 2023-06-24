import React from "react"
import Button from "@/components/secondHome/Button"
import FilterSort from "@/components/secondHome/FilterSort"
import ImportAccordion from "@/components/secondHome/ImportAccordion"
import ImportDateRow from "@/components/secondHome/ImportDateRow"

const secondHome = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className=" flex-col w-full flex items-start max-w-[1000px] px-5 pt-5 ">
          <div>
            <p className="pt-5 font-bold text-xl items-start justify-start">Pilih Penerbangan</p>
          </div>
        </div>
      </div>
      <div className="mb-16 flex flex-col">
        <Button />
        <div className=" relative lg:static md:relative overflow-x-scroll lg:overflow-hidden md:overflow-x-scroll ">
          <ImportDateRow />
        </div>
        <FilterSort />
        <div className=" flex-row justify-center items-center">
          <ImportAccordion />
        </div>
      </div>
    </>
  )
}

export default secondHome
