import React from "react"
import DateRow from "./DateRow"
import { styles } from "@/styles/styles"

const ImportDateRow = () => {
  return (
    <>
      <div className={`${styles.mainRow} text-xs lg:text-base md:text-base xstext-xs:text-sm`}>
        <DateRow day="Senin" date="12/12/2023" />
        <DateRow day="Selasa" date="12/12/2023" />
        <DateRow day="Rabu" date="12/12/2023" />
        <DateRow day="Kamis" date="12/12/2023" />
        <DateRow day="Jumat" date="12/12/2023" />
        <DateRow day="Sabtu" date="12/12/2023" />
      </div>
      <div className="flex justify-center pt-3">
        <div className="w-7/12 border-t-2 border-slate-200"></div>
      </div>
    </>
  )
}

export default ImportDateRow
