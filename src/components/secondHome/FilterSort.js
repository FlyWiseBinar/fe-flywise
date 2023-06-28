import api from "@/configs/api"
import axios from "axios"
import React, { useState } from "react"
import { LuArrowDownUp } from "react-icons/lu"
import { LuX } from "react-icons/lu"

const FilterDate = ({ setLoading, search, paginateFunc }) => {

  const [selectedOption, setSelectedOption] = useState("")
  const [label, setLabel] = useState()
  const [isOpenClass, setIsOpenClass] = useState(false)

  const openModalClass = () => {
    setIsOpenClass(true)
  }

  const closeModal = () => {
    setIsOpenClass(false)
  }

  const handleOptionChange = (option) => {
    // console.log('option', option);
    setSelectedOption(option?.value)
    setLabel(option?.label)
    setIsOpenClass(false)
    // setLoading(true)


    const {
      CountAdult,
      CountBaby,
      CountChild,
      departureDate,
      from,
      returnDate,
      to
    } = search


    axios.get(`${api.apiSearchTicket}?departureDate=${departureDate}${returnDate && `&arrivedDate=${returnDate}`}${from && `&originAirport=${from}`}${to && `&destinationAirport=${to}`}${option && `&order=${option?.value}`}`)
      .then((result) => {
        setLoading(false)
        // console.log('res', result.data.data);
        paginateFunc(result.data.data)
      }).catch((err) => {
        // console.log(err);
      })
  }

  // console.log('select option', label, selectedOption);

  const searchArray = [
    {
      label: "Termurah",
      value: "price",
      add: "Harga"
    },
    {
      label: "Terpendek",
      value: "duration",
      add: "Durasi"
    },
    {
      label: "Paling Awal",
      value: "departureAsc",
      add: "Keberangakatan"
    },
    {
      label: "Paling Akhir",
      value: "departureDesc",
      add: "Keberangkatan"
    },
    {
      label: "Paling Awal",
      value: "arriveAsc",
      add: "Kedatangan"
    },
    {
      label: "Paling Akhir",
      value: "arriveDesc",
      add: "Kedatangan"
    },
  ]

  return (
    <>
      <div className="flex justify-center">
        <div className="flex-col w-full flex items-end max-w-[1000px] px-5 pt-5">
          <div>
            <button className="flex gap-3 items-center justify-center rounded-full border-2 font-semibold text-sm lg:text-base md:text-base sm:text-sm border-main-purple py-2 px-5 text-main-purple" onClick={openModalClass}><LuArrowDownUp /> {label}</button></div>
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
              <div className="flex flex-col py-3 gap-3 justify-center w-full">

                {
                  searchArray?.map((item, i) => (
                    <div key={i}>
                      <hr className="bg-black" />
                      <div className="flex flex-col py-3 justify-start items-start p-4 w-full hover:bg-purple-300 hover:text-white active:bg-purple-600 focus:bg-purple-600 focus:text-white cursor-pointer"
                        onClick={() => handleOptionChange(item)}>
                        <h2>
                          <span className="font-bold">{item?.add}</span> - {item?.label}</h2>
                      </div>
                    </div>
                  ))
                }

              </div>
            </div>
          </div>
        )}
      </div >
    </>
  )
}

export default FilterDate
