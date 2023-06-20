/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"
import { useState, useEffect } from "react"
import { styles } from "@/styles/styles"
import {
  LuSend,
  LuChevronDown,
  LuChevronUp,
} from "react-icons/lu"
import { MdLocationOn } from "react-icons/md"
import Loading from "../Loading"
import axios from "axios"

export default function AccordionHistory({
  orders,
  hourAttendate,
  cityDeparture,
  cityDestination,
  hourTo,
  Departure,
  ToLocation,
  airflight,
  classAirflight,
  price,
  duration,
  date,
  airPortDeparture,
  airPortTo,
  codeAirFlight,
  totalPrice,
  namePassenger,
  idPassenger,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/v1/api/order/history"
      )
      const { orders } = await response.json()
      const jsonData = orders
      setData(jsonData)
      setLoading(false)
    } catch (error) {
      console.log("Error fetching data:", error)
    }
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" }
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", options)
  }

  function formatTime(timeString) {
    const timeParts = timeString.split(":")
    const hours = timeParts[0]
    const minutes = timeParts[1]
    return `${hours}:${minutes}`
  }

  function formatNumber(number) {
    const formatter = new Intl.NumberFormat("id-ID")
    return formatter.format(number)
  }

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {loading ? (<Loading />) : (<div>      {data?.map((item, index) => (
        <div
          className={`${styles.mainCol} flex w-3/5 mx-auto border-2 rounded-xl border-gray-400 hover:border-main-purple mb-2`}
          key={index}
        >
          <button
            className="flex items-center justify-between w-full p-4 text-lg font-medium text-left bg-white cursor-pointer rounded-xl b"
            onClick={toggleAccordion}
          >
            <span className="flex items-center text-white bg-main-green px-6 py-2 rounded-full">
              Issued
            </span>
            <span className="text-gray-500">
              {isOpen ? (
                <span className="flex border border-main-purple rounded-full text-main-purple">
                  <LuChevronUp />
                </span>
              ) : (
                <span className="flex border border-main-purple rounded-full text-main-purple">
                  <LuChevronDown />
                </span>
              )}
            </span>
          </button>
          <div className="flex items-center mx-auto justify-center gap-4  p-4 text-lg bg-white cursor-pointer rounded-xl b">
            <div className="flex self-start items-center text-gray-400 text-4xl">
              <MdLocationOn />
            </div>
            <div>
              <p className="font-bold">{item.schedule.originAirport.city}</p>
              <p>{formatDate(item.schedule.departureDate)}</p>
              <p>{formatTime(item.schedule.departureTime)}</p>
            </div>
            <span className="text-center font-normal text-sm text-gray-400">
              <div className="w-80 border-b-2 ">{duration}</div>
              <div>{""}</div>
            </span>
            <div className="flex self-start items-center text-gray-400 text-4xl">
              <MdLocationOn />
            </div>
            <div>
              <p className="font-bold">{item.schedule.destinationAirport.city}</p>
              <p>{formatDate(item.schedule.arrivedDate)}</p>
              <p>{formatTime(item.schedule.arrivedTime)}</p>
            </div>
          </div>
          <div className="w-11/12 border-t border-gray-400"></div>
          <div className="flex justify-between items-center gap-4 p-4 text-lg bg-white cursor-pointer rounded-xl">
            <div>
              <p className="font-bold">Booking Code:</p>
              <p>{item.order.orderCode}</p>
            </div>
            <div className="px-44">
              <p className="font-bold">Class:</p>
              <p>{item.schedule.class.name}</p>
            </div>
            <div>
              <p className="font-bold text-main-purple">IDR {formatNumber(item.order.totalPrice)}</p>
            </div>
          </div>
          {isOpen && (
            <div className=" p-4 border-t-2 w-11/12 border-slate-300">
              <div className="font-bold text-xl">
                <p>Detail Pesanan</p>
              </div>
              <span className="flex gap-1 text-xl">
                <p>Booking Code:</p>{" "}
                <p className="font-bold text-main-purple mb-3">
                  {item.order.orderCode}
                </p>
              </span>
              <div className="flex justify-between font-bold">
                <p className="text-lg">{formatTime(item.schedule.departureTime)}</p>
                <p className="text-third-purple">Keberangkatan</p>
              </div>
              <p>{formatDate(item.schedule.arrivedDate)}</p>
              <p className="flex font-semibold">
                {item.schedule.originAirport.name}
              </p>
              <div className="flex justify-center pt-3">
                <div className="w-11/12 border-t-2 border-slate-200"></div>
              </div>
              <div className="px-9">
                <p className="flex font-bold">
                  {item.schedule.plane.airline.airlineName} - {item.schedule.class.name}
                </p>
                <p className="font-bold">{item.schedule.plane.airline.airlineCode}</p>
                <div className="flex pt-4 gap-2">
                  <div className="self-start pt-1">
                    <LuSend />
                  </div>
                  <div className="flex flex-col">
                    {item.order.passengers.map((passenger) => (
                      <>
                        <p className="font-bold" key={passenger.id}>Informasi</p><p className="text-second-purple">
                          Penumpang 1: {passenger.name}{" "}
                        </p><p>ID: {passenger.id} </p>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center pt-3">
                <div className="w-11/12 border-t-2 border-slate-200"></div>
              </div>
              <div className="flex justify-between font-bold">
                <p className="text-lg">{formatTime(item.schedule.arrivedTime)}</p>
                <p className="text-third-purple">Kedatangan</p>
              </div>
              <p>{formatDate(item.schedule.arrivedDate)}</p>
              <p className="flex font-semibold mb-5">
                {item.schedule.destinationAirport.name}
              </p>
              <div className="flex justify-center pt-3">
                <div className="w-11/12 border-t-2 border-slate-200"></div>
              </div>
              <div className="flex font-bold">
                <p className="text-lg">Rincian Harga</p>
              </div>
              <div className="flex justify-between">
                <p>2 Adults</p>
                <p>IDR {formatNumber(item.schedule.adultPrice)}</p>
              </div>
              <div className="flex justify-between">
                <p>1 Baby</p>
                <p>IDR {formatNumber(item.schedule.babyPrice)}</p>
              </div>
              <div className="flex justify-between">
                <p>Tax</p>
                <p>IDR {formatNumber(item.schedule.taxPrice)}</p>
              </div>
              <div className="flex justify-center pt-3">
                <div className="w-11/12 border-t border-slate-200"></div>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <p>Total</p>
                <p className="text-main-purple">IDR {formatNumber(item.order.totalPrice)}</p>
              </div>
              <div className="flex justify-end mt-5">
                <button className="px-16 py-3 rounded-2xl bg-main-purple hover:bg-second-purple text-white">
                  Cetak Tiket
                </button>
              </div>
            </div>
          )}
        </div>
      ))}</div>)}
    </>
  )
}
