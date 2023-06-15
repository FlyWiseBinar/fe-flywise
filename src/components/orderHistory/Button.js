import { styles } from "@/styles/styles"
import { LuArrowLeft, LuSearch, LuFilter, LuX } from "react-icons/lu"
import { AiOutlineSearch } from "react-icons/ai"
import { useState, useRef } from "react"
import Datepicker from "react-tailwindcss-datepicker"

import React from "react"


const Button = () => {
  const [isOpen, setIsOpen] = useState(false)
  const reference = useRef(null)

  const openDatePicker = () => {
    reference.current()
  }
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue)
  }


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
          <button className="flex gap-2 md:justify-end items-center border border-main-purple py-1 rounded-full duration-75 md:px-5" onClick={openDatePicker}>
            {" "}
            <LuFilter />
            Filter
          </button>
          <div className="">  <Datepicker 
          ref = {reference}
          primaryColor={"violet"}
          showFooter={true}
          useRange={false}
          value={value}
          placeholder={"halo"}
          onChange={handleValueChange}
          configs={{
            footer: {
            cancel: "Batal", 
            apply: "Simpan" 
            }
            }} 
        /></div>
        </div>
        <div
          className="text-main-purple hover:text-third-purple text-4xl"
          onClick={openModal}
        >
          <AiOutlineSearch />
        </div>
        {isOpen && (
          <div className="fixed inset-0 inset- flex items-center justify-center z-50">
            <div className="absolute bg-white rounded-lg shadow-2xl w-96 h-72">
              <div className="flex gap-3 items-center p-4 ">
                <input
                  type="text"
                  placeholder="  Masukkan Nomor Penerbangan"
                  className="py-1 px-3 border-2 w-full rounded-lg border-gray-300"
                />{" "}
                <div
                  className="text-2xl hover:text-gray-400"
                  onClick={closeModal}
                >
                  <LuX />
                </div>
              </div>
              <hr className="bg-black" />
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center pt-3">
        <div className="w-7/12 border-t-2 border-slate-200"></div>
      </div>
    </>
  );
};

export default Button;
