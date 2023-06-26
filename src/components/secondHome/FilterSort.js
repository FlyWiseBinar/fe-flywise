import React, { useState } from "react"
import { LuArrowDownUp } from "react-icons/lu"
import { LuX } from "react-icons/lu"

const FilterDate = () => {

  const [selectedOption, setSelectedOption] = useState("")
  const [isOpenClass, setIsOpenClass] = useState(false)

  const openModalClass = () => {
    setIsOpenClass(true)
  }

  const closeModal = () => {
    setIsOpenClass(false)
  }

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="flex-col w-full flex items-end max-w-[1000px] px-5 pt-5">
          <div>
            <button className="flex gap-3 items-center justify-center rounded-full border-2 font-semibold text-sm lg:text-base md:text-base sm:text-sm border-main-purple py-2 px-5 text-main-purple" onClick={openModalClass}><LuArrowDownUp /> Termurah</button></div>
        </div>
        {isOpenClass && (
          <div className="fixed z-20 inset-0 bg-opacity-70 bg-black flex items-center justify-center">
            <div className="absolute bg-white rounded-lg shadow-2xl w-[450px] h-auto">
              <div
                className="text-2xl hover:text-gray-400 justify-end p-3"
                onClick={closeModal}
              >
                <LuX />
              </div>
              <div className="flex flex-col py-3 justify-center w-full">
                <hr className="bg-black" />
                <div className="flex flex-col py-3 justify-center w-full hover:bg-purple-300 hover:text-white active:bg-purple-600 focus:bg-purple-600 focus:text-white cursor-pointer">
                  <div className="w-full h-10">
                    <div className="flex flex-row justify-start items-center w-full h-full px-3 ">
                      <input
                        className="font-bold"
                        type="button"
                        name="option"
                        id="HargaTermurah"
                        value="Harga -"
                        checked={selectedOption === "HargaTermurah"}
                        onChange={() => handleOptionChange("HargaTermurah")}
                      />
                      <div className="p-1">
                        <h2>Termurah</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="bg-black" />
                <div className="flex flex-col py-3 justify-center w-full hover:bg-purple-300 hover:text-white active:bg-purple-600 focus:bg-purple-600 focus:text-white cursor-pointer">
                  <div className="w-full h-10">
                    <div className="flex flex-row justify-start items-center w-full h-full px-3 ">
                      <input
                        className="font-bold"
                        type="button"
                        name="option"
                        id="Durasi"
                        value="Durasi -"
                        checked={
                          selectedOption === "DurasiTerpendek"
                        }
                        onChange={() =>
                          handleOptionChange("DurasiTerpendek")
                        }
                      />
                      <div className="p-1">
                        <h2>
                          Terpendek
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="bg-black" />
                <div className=" flex flex-col py-3 justify-center w-full hover:bg-purple-300 hover:text-white active:bg-purple-600 focus:bg-purple-600 focus:text-white cursor-pointer">
                  <div className="w-full h-10">
                    <div className="flex flex-row justify-start items-center w-full h-full px-3 ">
                      <input
                        className="font-bold"
                        type="button"
                        name="option"
                        id="BerangkatAwal"
                        value="Keberangkatan -"
                        checked={selectedOption === "BerangkatAwal"}
                        onChange={() =>
                          handleOptionChange("BerangkatAwal")
                        }
                      />

                      <div className="p-1">
                        <h2>Paling Awal</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="bg-black" />
                <div className="flex flex-col py-3 justify-center w-full">
                  <div className="w-full h-10">
                    <div className="flex flex-row justify-start items-center w-full h-full hover:bg-purple-300 hover:text-white px-3 ">
                      <input
                        className="font-bold"
                        type="button"
                        name="option"
                        id="BerangkatAkhir"
                        value="Keberangkatan -"
                        checked={selectedOption === "BerangkatAkhir"}
                        onChange={() =>
                          handleOptionChange("BerangkatAkhir")
                        }
                      />
                      <div className="p-1">
                        <h2>Paling Akhir</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="bg-black" />
                <div className=" flex flex-col py-3 justify-center w-full">
                  <div className="w-full h-10">
                    <div className="flex flex-row justify-start items-center w-full h-full hover:bg-purple-300 hover:text-white px-3  ">
                      <input
                        className="font-bold"
                        type="button"
                        name="option"
                        id="DatangAwal"
                        value="Kedatangan -"
                        checked={selectedOption === "DatangAwal"}
                        onChange={() =>
                          handleOptionChange("DatangAwal")
                        }
                      />
                      <div className="p-1">
                        <h2>Paling Awal</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="bg-black" />
                <div className="  flex flex-col py-3 justify-center w-full">
                  <div className="w-full h-10">
                    <div className="flex flex-row justify-start items-center w-full h-full hover:bg-purple-300 hover:text-white px-3 ">
                      <input
                        className="font-bold"
                        type="button"
                        name="option"
                        id="DatangAkhir"
                        value="Kedatangan -"
                        checked={selectedOption === "DatangAkhir"}
                        onChange={() =>
                          handleOptionChange("DatangAkhir")
                        }
                      />
                      <div className="p-1">
                        <h2>Paling Akhir</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="bg-black" />
                <div className="flex flex-row justify-end p-3">
                  <div className="">
                    <button className="bg-purple-800 text-white flex rounded-xl items-center justify- w-full py-3 p-5 hover:scale-105 duration-100">
                      <span className="text-lg">Simpan</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div >
    </>
  )
}

export default FilterDate
