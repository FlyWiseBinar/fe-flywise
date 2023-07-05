import React, { useState, useEffect } from "react"
import { styles } from "@/styles/styles"
import Datepicker from "react-tailwindcss-datepicker"
import { LuPlaneTakeoff, LuPlaneLanding, LuX } from "react-icons/lu"
import { MdDateRange, MdOutlineAirlineSeatReclineNormal } from "react-icons/md"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { BsRepeat } from "react-icons/bs"
import { IoMdMan, IoMdWoman } from "react-icons/io"
import { BiChild, BiSearch } from "react-icons/bi"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import api from "@/configs/api"
import axios from "axios"

const CardOrder = () => {
  const [departureDate, setDepartureDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)
  const [isReturnActive, setIsReturnActive] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")
  const handleReturnToggle = () => {
    setIsReturnActive(!isReturnActive)
  }
  const [isOpenFrom, setIsOpenFrom] = useState(false)
  const [isOpenTo, setIsOpenTo] = useState(false)
  const [isOpenPass, setIsOpenPass] = useState(false)
  const [from, setFrom] = useState()
  const [to, setTo] = useState()

  const [CountAdult, setCountAdult] = useState(0)
  const [CountChild, setCountChild] = useState(0)
  const [CountBaby, setCountBaby] = useState(0)

  const [options, setOptions] = useState([])


  const router = useRouter()

  useEffect(() => {
    if (from) {
      fetchOptionsFrom()
    } else {
      setOptions([])
    }
  }, [from])

  useEffect(() => {
    if (to) {
      fetchOptionsTo()
    } else {
      setOptions([])
    }
  }, [to])

  const fetchOptionsFrom = async () => {
    try {
      const response = await axios.get(`${api.apiAirport}?search=${from}`)
      const result = await response.data.data
      setOptions(result)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchOptionsTo = async () => {
    try {
      const response = await axios.get(`${api.apiAirport}?search=${to}`)
      const result = await response.data.data
      setOptions(result)
    } catch (error) {
      console.error(error)
    }
  }

  const handleChangeFrom = (event) => {
    const { value } = event.target
    setFrom(value)
  }

  const handleOptionClickFrom = (options) => {
    setFrom(options.city)
  }

  const handleChangeTo = (event) => {
    const { value } = event.target
    setTo(value)
  }

  const handleOptionClickTo = (options) => {
    setTo(options.city)
  }

  const decreaseCount = (where) => {
    if (where === "baby") {
      if (CountBaby > 0) {
        setCountBaby(CountBaby - 1)
      }
    } else if (where === "child") {
      if (CountChild > 0) {
        setCountChild(CountChild - 1)
      }
    } else {
      if (CountAdult > 0) {
        setCountAdult(CountAdult - 1)
      }
    }
  }

  const increaseCount = (where) => {
    if (where === "baby") {
      if (CountBaby >= 0) {
        setCountBaby(CountBaby + 1)
      }
    } else if (where === "child") {
      if (CountChild >= 0) {
        setCountChild(CountChild + 1)
      }
    } else {
      if (CountAdult >= 0) {
        setCountAdult(CountAdult + 1)
      }
    }
  }

  const handleRepeatClick = () => {
    const temp = from
    setFrom(to)
    setTo(temp)
  }

  const onChangefrom = (e) => {
    setFrom(e.target.value)
  }

  const onChangeto = (e) => {
    setTo(e.target.value)
  }

  const openModalFrom = () => {
    setIsOpenFrom(true)
  }

  const openModalTo = () => {
    setIsOpenTo(true)
  }

  const openModalPass = () => {
    setIsOpenPass(true)
  }

  const closeModal = () => {
    setIsOpenTo(false)
    setIsOpenFrom(false)
    setIsOpenPass(false)
  }

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  const onSubmit = () => {
    const data = {
      from: from,
      to: to,
      departureDate: departureDate?.startDate,
      returnDate: returnDate?.startDate,
      CountAdult: CountAdult,
      CountBaby: CountBaby,
      CountChild: CountChild,
      CountTotal: CountAdult + CountBaby + CountChild,
    }

    const countTotal = CountAdult + CountBaby + CountChild

    if (departureDate && from && countTotal > 0) {
      router.push({
        pathname: "/search",
        query: data,
      })
    } else {
      toast.error(
        "Mohon isi tanggal keberangkatan, lokasi keberangkatan, dan jumlah penumpang!",
        {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      )
    }
  }

  return (
    <div className={`${styles.mainCol} `}>
      <div
        className={`${styles.mainMaxWidth}  w-full p-5 flex items-center justify-center`}
      >
        <div className="flex flex-col bg-white items-center justify-center lg:w-[1000px] md:w-[800px] w-[350px] gap-5 rounded-xl shadow-xl p-5 border-solid border-[1px] border-slate-400">
          <h3 className="self-start font-bold text-xl">
            Pilih Jadwal Penerbangan spesial di{" "}
            <span className="text-main-purple">FlyWise!</span>
          </h3>

          <div className="flex flex-row md:flex-col lg:flex-col items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-8 w-full items-start">
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-row gap-3">
                  <div className="flex items-center text-slate-500 gap-2 justify-center">
                    <LuPlaneTakeoff />
                    <p>From</p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      className=" hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent"
                      onClick={openModalFrom}
                      value={from}
                      onChange={handleChangeFrom}
                      placeholder="Jakarta (JKT)"
                    />
                    <hr className="w-full" />
                    {isOpenFrom && (
                      <div className="fixed z-20 inset-0 bg-opacity-70 bg-black flex items-center justify-center">
                        <div className="absolute bg-white rounded-lg shadow-2xl w-96 h-auto">
                          <div className="flex gap-3 items-center p-4 ">
                            <div className="flex flex-col gap-2 w-full">
                              <div className="justify-between flex">
                                <div>Masukkan Asal Penerbangan</div>
                                <div
                                  className="text-2xl hover:text-gray-400"
                                  onClick={closeModal}
                                >
                                  <LuX />
                                </div>
                              </div>
                              <div className="relative flex items-center gap-2">
                                <input
                                  type="text"
                                  placeholder="Masukkan Asal Penerbangan"
                                  onChange={(e) => onChangefrom(e)}
                                  className="py-1 pl-2 pr-3 border-2 w-full rounded-lg border-gray-300"
                                />
                                <div className="absolute top-2 left-2"></div>
                                <div
                                  className="text-2xl text-white hover:text-white bg-blue-500 p-1.5 rounded-lg"
                                  onClick={closeModal}
                                >
                                  <BiSearch />
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="bg-black" />
                          {options.map((option, index) => (
                            <div className="px-4 py-2 overflow-y-auto">
                              <button onClickCapture={() => handleOptionClickFrom(option)} onClick={closeModal} key={index}>{option.city}</button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-row gap-3 py-3">
                  <div className="flex items-center text-slate-500 gap-2 justify-center">
                    <MdDateRange />
                    <p>Date</p>
                  </div>

                  <div className="flex-col md:flex-row lg:flex-row flex gap-3 justify-center items-center">
                    <div className="flex flex-col gap-2">
                      <p>Departure</p>
                      <Datepicker
                        asSingle={true}
                        value={departureDate}
                        primaryColor={"orange"}
                        selected={departureDate}
                        inputClassName={
                          "bg-white text-black w-[130px] border-none"
                        }
                        onChange={(date) => setDepartureDate(date)}
                        placeholder="Departure"
                        className="hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent"
                      />

                      <hr className="w-full" />
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <p>Return</p>
                      {isReturnActive ? (
                        <Datepicker
                          asSingle={true}
                          value={returnDate}
                          primaryColor={"orange"}
                          selected={returnDate}
                          inputClassName={
                            "bg-white text-black w-[130px] border-none"
                          }
                          onChange={(date) => setReturnDate(date)}
                          placeholder="Return"
                          className="hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent"
                        />
                      ) : (
                        <input
                          className="hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent"
                          disabled
                          placeholder="Return"
                        />
                      )}
                      <hr className="w-full" />
                    </div>
                  </div>

                  <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked={isReturnActive}
                        onChange={handleReturnToggle}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex w-full lg:w-0 md:w-0 justify-center items-center px-3">
                <button
                  className="bg-black text-white rounded-xl flex items-center hover:scale-105 duration-100"
                  onClick={handleRepeatClick}
                >
                  <BsRepeat className="m-3 text-xl" />
                </button>
              </div>

              <div className="flex w-full flex-col gap-8 p3">
                <div className="flex flex-row gap-3">
                  <div className="flex items-center text-slate-500 gap-2 justify-center">
                    <LuPlaneLanding />
                    <p>To</p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      className=" hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent"
                      onClick={openModalTo}
                      value={to}
                      onChange={handleChangeTo}
                      placeholder="Melbourne (MLB)"
                    />
                    <hr className="w-full" />
                    {isOpenTo && (
                      <div className="fixed z-20 inset-0 bg-opacity-70 bg-black flex items-center justify-center">
                        <div className="absolute bg-white rounded-lg shadow-2xl w-96 h-auto">
                          <div className="flex gap-3 items-center p-4 ">
                            <div className="flex flex-col gap-2 w-full">
                              <div className="justify-between flex">
                                <div>Masukkan Asal Penerbangan</div>
                                <div
                                  className="text-2xl hover:text-gray-400"
                                  onClick={closeModal}
                                >
                                  <LuX />
                                </div>
                              </div>
                              <div className="relative flex items-center gap-2">
                                <input
                                  type="text"
                                  placeholder="Masukkan Tujuan Penerbangan"
                                  onChange={(e) => onChangeto(e)}
                                  className="py-1 pl-2 pr-3 border-2 w-full rounded-lg border-gray-300"
                                />

                                <div
                                  className="text-2xl text-white hover:text-white bg-blue-500 p-1.5 rounded-lg"
                                  onClick={closeModal}
                                >
                                  <BiSearch />
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="bg-black" />
                          {options.map((option, index) => (
                            <div className="px-4 py-2 overflow-y-auto">
                              <button onClickCapture={() => handleOptionClickTo(option)} onClick={closeModal} key={index}>{option.city}</button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex w-full flex-row gap-3">
                  <div className="flex items-center text-slate-500 gap-2 justify-center">
                    <MdOutlineAirlineSeatReclineNormal />
                    <p>To</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Passengers</p>
                    <input
                      onClick={openModalPass}
                      className="hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent"
                      value={CountAdult + CountBaby + CountChild}
                    />
                    <hr className="w-full" />
                    {isOpenPass && (
                      <div className="fixed z-20 inset-0 bg-opacity-70 bg-black flex items-center justify-center">
                        <div className="absolute bg-white rounded-lg shadow-2xl w-auto h-auto">
                          <div className="flex gap-3 items-center p-4 ">
                            <div className="flex flex-col gap-2 w-full"></div>
                            <div
                              className="text-2xl hover:text-gray-400"
                              onClick={closeModal}
                            >
                              <LuX />
                            </div>
                          </div>
                          <hr className="bg-black" />
                          <div className="flex flex-col p-4 gap-10">
                            <div className="flex flex-row justify-between">
                              <div className="flex">
                                <IoMdMan className="text-3xl" />
                                <div className="flex flex-row justify-between items-center">
                                  <div>
                                    <h2 className="font-bold">Dewasa</h2>
                                    <p>(12 Tahun ke atas)</p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex px-2 gap-3 items-center">
                                <button
                                  className="text-purple-700 rounded-md flex items-center justify-center hover:scale-105 duration-100 border-2 border-purple-700 p-2"
                                  onClick={() => decreaseCount("adult")}
                                >
                                  <AiOutlineMinus className="text-xl" />
                                </button>
                                <div className="text-2xl font-semibold p-2">
                                  {CountAdult}
                                </div>
                                <button
                                  className="text-purple-700 rounded-md flex items-center justify-center hover:scale-105 duration-100 border-2 border-purple-700 p-2"
                                  onClick={() => increaseCount("adult")}
                                >
                                  <AiOutlinePlus className="text-xl" />
                                </button>
                              </div>
                            </div>
                            <hr className="bg-black" />
                            <div className="flex flex-row justify-between ">
                              <div className="flex">
                                <IoMdWoman className="text-3xl" />
                                <div className="flex flex-row justify-between items-center">
                                  <div>
                                    <h2 className="font-bold">Anak</h2>
                                    <p>(2 - 11 tahun)</p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex px-2 gap-3 items-center">
                                <button
                                  className="text-purple-700 rounded-md flex items-center justify-center hover:scale-105 duration-100 border-2 border-purple-700 p-2"
                                  onClick={() => decreaseCount("child")}
                                >
                                  <AiOutlineMinus className="text-xl" />
                                </button>
                                <div className="text-2xl font-semibold p-2">
                                  {CountChild}
                                </div>
                                <button
                                  className="text-purple-700 rounded-md flex items-center justify-center hover:scale-105 duration-100 border-2 border-purple-700 p-2"
                                  onClick={() => increaseCount("child")}
                                >
                                  <AiOutlinePlus className="text-xl" />
                                </button>
                              </div>
                            </div>
                            <hr className="bg-black" />
                            <div className="flex flex-row justify-between">
                              <div className="flex">
                                <BiChild className="text-3xl" />
                                <div className="flex flex-row justify-between items-center">
                                  <div>
                                    <h2 className="font-bold">Bayi</h2>
                                    <p>(Dibawah 2 tahun)</p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex px-2 gap-3 items-center">
                                <button
                                  className="text-purple-700 rounded-md flex items-center justify-center hover:scale-105 duration-100 border-2 border-purple-700 p-2"
                                  onClick={() => decreaseCount("baby")}
                                >
                                  <AiOutlineMinus className="text-xl" />
                                </button>
                                <div className="text-2xl font-semibold p-2">
                                  {CountBaby}
                                </div>
                                <button
                                  className="text-purple-700 rounded-md flex items-center justify-center hover:scale-105 duration-100 border-2 border-purple-700 p-2"
                                  onClick={() => increaseCount("baby")}
                                >
                                  <AiOutlinePlus className="text-xl" />
                                </button>
                              </div>
                            </div>
                            <hr className="bg-black" />
                            <div className="flex flex-row justify-end">
                              <div className="flex flex-row justify-between items-center">
                                <button
                                  onClick={closeModal}
                                  className="bg-purple-800 text-white flex rounded-xl items-center justify- w-full py-3 p-5 hover:scale-105 duration-100"
                                >
                                  <span className="text-lg">Simpan</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    <p>Seat Class</p>
                    <select
                      name="option"
                      value={selectedOption}
                      onChange={(e) => handleOptionChange(e.target.value)}
                      className="border-none hover:border-none"
                    >
                      <option value="Ekonomi">Ekonomi</option>
                      <option value="Business">Business</option>
                      <option value="First Class">First Class</option>
                    </select>
                    <hr className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button
              onClick={() => onSubmit()}
              className="w-full flex items-center justify-center"
            >
              <span className="text-lg bg-purple-800 text-white w-[95%] flex rounded-xl items-center justify-center py-3 hover:scale-105 duration-300">
                Lihat Jadwal Penerbangan
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardOrder
