import { styles } from "@/styles/styles"
import { LuArrowLeft } from "react-icons/lu"

import React from "react"
import Link from "next/link"

const Button = () => {
  return (
    <>
      <div className={`${styles.mainRow} gap-3`}>
        <div>
          <Link href="/" className="flex gap-5 md:justify-end items-center bg-third-purple p-3 md:ml-auto px-10 rounded-xl text-white hover:bg-main-purple md:pr-80 duration-75">
            {" "}
            <LuArrowLeft /> JKT &gt; MLB - 2 Penumpang - Economy
          </Link>
        </div>
        <div>
          <button className="flex gap-5 md:justify-end items-center  bg-main-green py-3 rounded-xl text-white hover:bg-lime-500 duration-75 md:px-12 font-bold">
            {" "}
            Ubah Pencarian
          </button>
        </div>
      </div>
    </>
  )
}

export default Button
