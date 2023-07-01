import React from "react"
import AccordionDetail from "./AccordionDetail"

const ImportAccordion = ({ data, countSeat, search }) => {
  return (
    <div className="flex justify-center">
      <div className="flex-col w-full flex items-center gap-3 max-w-[1000px] p-5">
        <AccordionDetail countSeat={countSeat} search={search} item={data} />
      </div>
    </div>
  )
}

export default ImportAccordion
