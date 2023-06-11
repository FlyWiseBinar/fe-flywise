import React from "react"
import DateRow from "./DateRow"
import { styles } from "@/styles/styles"

const ImportDateRow = () => {
  return (
    <div className={`${styles.mainRow}`}>
      <DateRow day="Senin" date="12/12/2023" />
      <DateRow day="Selasa" date="12/12/2023" />
      <DateRow day="Rabu" date="12/12/2023" />
      <DateRow day="Kamis" date="12/12/2023" />
      <DateRow day="Jumat" date="12/12/2023" />
      <DateRow day="Sabtu" date="12/12/2023" />
    </div>
  )
}

export default ImportDateRow
