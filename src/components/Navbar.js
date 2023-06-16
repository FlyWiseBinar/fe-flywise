
import React from "react"
import { styles } from "@/styles/styles"
import { BiLogIn } from "react-icons/bi"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className={`${styles.mainRow} shadow-lg`}>
      <div
        className={` ${styles.mainRow} bg-white z-50 !justify-between px-12`}
      >
        <div className='w-full flex-col justify-start p-3'>
          <p className='text-2xl font-bold text-main-purple'>FlyWise</p>
          <p className='text-lg text-main-purple'>Your Traveling Parner</p>
        </div>

        <div className='w-full flex justify-end items-center'>
          <Link href="/login" className='flex gap-2  items-center justify-center bg-main-orange py-3 px-4 rounded-xl text-white hover:scale-110 duration-300'>
            <BiLogIn />
            <p>Masuk</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
