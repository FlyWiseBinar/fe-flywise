import React from 'react'
import { styles } from "@/styles/styles";
import { LuArrowDownUp } from 'react-icons/lu';

const FilterDate = () => {
  return (
    <>
    <div className="flex w-9/12 justify-end mt-4">
    <div>
    <button className="flex gap-3 items-center justify-center rounded-full border-2 font-semibold border-main-purple py-2 px-5 text-main-purple"><LuArrowDownUp/> Termurah</button></div>
    </div>
    </>
  )
}

export default FilterDate
