import React from "react"
import { styles } from "@/styles/styles"
import { BsSearch } from "react-icons/bs"
import { BiLogIn } from "react-icons/bi"


const Navbar = () => {
    return (
        <div className={`${styles.mainRow} shadow-lg`}>
            <div className={`${styles.mainMaxWidth} ${styles.mainRow} !justify-between px-8`}>


                <div className="flex gap-5 items-center w-full justify-between">
                    <div className={`${styles.mainCol} gap-0 p-5`}>
                        <p className="text-2xl font-bold text-main-purple">
                            FlyWise
                        </p>
                        <p className="text-lg text-main-purple">
                            Your Traveling Parner
                        </p>
                    </div>

                    <div className="bg-slate-50 w-full h-10 px-5 py-2 text-black  rounded-xl flex gap-4 justify-between items-center">
                        <input type="text" className='ring-0 outline-none w-full ' placeholder='Cari di sini...' />
                        <BsSearch className='text-2xl' />
                    </div>
                </div>

                <div className="w-full flex justify-end items-center">
                    <button className='flex gap-5 items-center justify-center bg-main-orange py-3 px-4 rounded-xl text-white hover:scale-110 duration-300'>
                        <BiLogIn/>
                        <p>Masuk</p>
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Navbar