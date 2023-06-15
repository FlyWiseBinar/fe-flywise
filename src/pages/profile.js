import { styles } from "@/styles/styles"
import { LuArrowLeft, LuSearch, LuFilter, LuX } from "react-icons/lu"
import { AiOutlineSearch } from "react-icons/ai"
import { useState } from "react"
import Navbar from "@/components/Navbar"
import {HiOutlinePencil} from "react-icons/hi";
import {LuLogOut} from "react-icons/lu";

import React from "react"

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
    <Navbar/>
    <div className="py-5 font-bold text-xl w-1/2 flex justify-center">Akun</div>
      <div className={`${styles.mainRow} gap-3`}>
        <div>
          <button className="flex gap-5 md:justify-end items-center bg-third-purple p-3 md:ml-auto rounded-xl text-white hover:bg-main-purple md:pr-100 duration-75">
            {" "}
            <LuArrowLeft /> Beranda
          </button>
        </div>
        {isOpen && (
          <div className="fixed inset-0 inset- flex items-center justify-center z-50">
           </div>
        )}
      </div>
      <div className="flex justify-center pt-3">
        <div className="w-7/12 border-t-2 border-slate-200"></div>
      </div>

      <div className="flex justify-center gap-20 pt-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-3"><div className="text-main-purple text-lg"><HiOutlinePencil/></div>Ubah Profil</div>
            <div className="border-b w-60 pt-2 border-gray-300"></div>
            <div className="flex items-center pt-4 gap-3"><div className="text-main-purple text-lg"><LuLogOut/></div>Keluar</div>
            <div className="border-b w-60 pt-2 border-gray-300"></div>
            </div>
          <div className="flex flex-col">
            

<div className="justify-center py-1 md:px-8">
				
					<h2 className="mt-1 text-left text-xl font-bold leading-4 tracking-tight text-gray-900">
						Ubah Data Profil
					</h2>
				
        </div>

<div className="w-full pt-4">
<div className="flex rounded-t-lg bg-third-purple py-1 px-28">
<h3 className="font-medium text-white">Data Diri</h3>




</div>



</div>


        


            </div>
      </div>
    </>
  )
}

export default Profile
