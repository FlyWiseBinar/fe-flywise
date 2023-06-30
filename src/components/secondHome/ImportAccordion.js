import React from "react"
import AccordionDetail from "./AccordionDetail"

const ImportAccordion = ({ data }) => {
  return (
    <div className="flex justify-center">
      <div className="flex-col w-full flex items-center gap-3 max-w-[1000px] p-5">
        <AccordionDetail item={data} />
      </div>
    </div>
  )
}

export default ImportAccordion
