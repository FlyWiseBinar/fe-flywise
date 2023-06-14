import { styles } from "@/styles/styles"
import { LuArrowLeft,LuSearch, LuFilter } from "react-icons/lu"
import {AiOutlineSearch} from "react-icons/ai"

import React from "react"

const Button = () => {
  return (
    <>
      <div className={`${styles.mainRow} gap-3`}>
        <div>
          <button className="flex gap-5 md:justify-end items-center bg-third-purple p-3 md:ml-auto rounded-xl text-white hover:bg-main-purple md:pr-100 duration-75">
            {" "}
            <LuArrowLeft /> Beranda
          </button>
        </div>
        <div>
          <button className="flex gap-2 md:justify-end items-center border border-main-purple py-1 rounded-full duration-75 md:px-5">
            {" "}
            <LuFilter/>
            Filter
          </button>
        </div>
        <div className="text-main-purple text-4xl"><AiOutlineSearch/></div>
        
      </div>
      <div className="flex justify-center pt-3">
        <div className="w-7/12 border-t-2 border-slate-200"></div>
      </div>
    </>
  )
}

export default Button
