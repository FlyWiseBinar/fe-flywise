import { LuArrowLeft, LuSearch, LuFilter, LuX } from "react-icons/lu"
import { AiOutlineSearch } from "react-icons/ai"
import { useState } from "react"
import Datepicker from "react-tailwindcss-datepicker"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"

import React from "react"
import Link from "next/link"

const Button = ({ onSearch }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [searchQuery, setSearchQuery] = useState("")

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const openDatePicker = () => {
    document.getElementById("datepicker").focus()
  }

  const handleClickModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  })

  return (
    <>
      <div className="flex flex-row justify-center items-center md:w-full w-full md:gap-3 gap-2">
        <>
          <Link
            href="/"
            className="flex gap-5 md:justify-end items-center bg-third-purple p-3 rounded-xl text-white hover:bg-main-purple lg:pr-100 md:pr-96 pr-24 duration-75"
          >
            {" "}
            <LuArrowLeft /> Beranda
          </Link>
        </>
        <div>
          <button
            className="flex gap-2 md:justify-end items-center border border-main-purple py-1 rounded-full duration-75 md:px-5 px-3"
            onClick={openDatePicker}
          >
            {" "}
            <LuFilter />
            Filter
          </button>
          <Datepicker
            inputId="datepicker"
            inputClassName={
              "absolute flex text-[10px] bg-white focus:outline-none opacity-0 pointer-events-none"
            }
            primaryColor={"violet"}
            showFooter={true}
            useRange={false}
            value={value}
            placeholder={" "}
            toggleClassName={"absolute opacity-0 pointer-events-none "}
            onChange={(e) => setValue(e.target.value)}
            configs={{
              footer: {
                cancel: "Batal",
                apply: "Simpan",
              },
            }}
            popoverDirection="down"
          />
        </div>
        <div
          className="text-main-purple hover:text-third-purple md:text-4xl text-2xl cursor-pointer"
          onClick={handleClickModal}
        >
          <AiOutlineSearch />
        </div>
        <Transition appear show={isOpenModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={handleClickModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="items-center md:gap-28 mb-2  flex md:text-lg font-medium leading-6 text-gray-900"
                    >
                      Pencarian Riwayat Pesanan
                      <div
                        className="text-2xl md:ml-2 ml-14 hover:text-third-purple text-main-purple cursor-pointer flex justify-end"
                        onClick={handleClickModal}
                      >
                        <LuX />
                      </div>
                    </Dialog.Title>
                    <form onSubmit={handleFormSubmit} className="w-full">
                      <input
                        type="text"
                        placeholder="  Masukkan Nomor Penerbangan"
                        className="py-1 px-3 border-2 hover:border-main-purple outline-none w-full rounded-lg md:text-base text-sm border-gray-300"
                        value={searchQuery}
                        onChange={handleInputChange}
                      />{" "}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      <div className="flex justify-center mt-3">
        <div className="lg:w-7/12 w-11/12 border-t-2 border-slate-300"></div>
      </div>
    </>
  )
}

export default Button
