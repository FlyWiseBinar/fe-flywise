import { convertTime } from "@/utils/convertTime"
import { handlerDate } from "@/utils/handlerDate"
import { handlerIDR } from "@/utils/handlerIDR"
import Link from "next/link"
import React from "react"
import { useState } from "react"
import { LuChevronDown } from "react-icons/lu"
import { LuChevronUp } from "react-icons/lu"
import { LuSend } from "react-icons/lu"
import { LuBaggageClaim } from "react-icons/lu"

const AccordionDetail = ({ item, countSeat, search }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { CountBaby, CountChild, CountAdult } = search

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <div className='border-2 rounded-xl border-third-purple w-full'>
        <div>
          <button
            className={
              "flex items-center justify-between w-full p-4 text-lg font-medium text-left bg-white cursor-pointer rounded-xl b"
            }
            onClick={toggleAccordion}
          >
            <span className="flex items-center gap-2 text-sm">
              <img src={`${item?.plane?.airline?.logo}`} className="w-6 h-6" alt="" />
              {item?.plane?.airline?.airlineName} - {item?.class?.name}
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

          <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col items-center justify-center gap-5 w-full p-4 px-10 text-lg font-medium bg-white cursor-pointer rounded-xl ">
            <div className="flex w-full gap-3">
              <span>
                <div>{item?.departureTime}</div>
                <div>{item?.originAirport?.airportCode}</div>
              </span>
              <span className="text-center font-normal text-sm text-gray-400 flex flex-col w-full">
                <div className=" border-b-2 ">{convertTime(item?.durationInSecond)}</div>
                <div>Direct</div>
              </span>
              <span>
                <div>{item?.arrivedTime}</div>
                <div>{item?.destinationAirport?.airportCode}</div>
              </span>
            </div>
            <div className="flex w-full lg:w-fit md:w-fit justify-end items-center gap-20 lg:gap-5 md:gap-3 sm:gap-20">
              <span className="text-2xl text-main-purple">
                <LuBaggageClaim />
              </span>
              <span className="text-center">
                <div className=" w-full font-bold text-sm lg:text-lg md:text-lg sm:text-sm">{handlerIDR(item?.provTotalPrice)}</div>
                <div>
                  <Link href={{
                    pathname: "/payment",
                    query: {
                      countseat: countSeat,
                      idschedule: item?.id,
                      adult: CountAdult,
                      baby: CountBaby,
                      child: CountChild
                    }
                  }} className="py-1 px-8 bg-main-purple hover:bg-second-purple rounded-xl font-normal text-sm lg:text-base md:text-base sm:text-sm text-white">
                    Pilih
                  </Link>
                </div>
              </span>
            </div>
          </div>

          {isOpen && (
            <div className="text-sm lg:text-base md:text-base sm:text-sm p-4 px-10 border-t-2 w-full border-slate-300">
              <div className="text-second-purple font-bold">
                <p>Detail Keberangkatan</p>
              </div>
              <div className="flex justify-between font-bold">
                <p className="text-lg">{item?.departureTime}</p>
                <p className="text-third-purple">Keberangkatan</p>
              </div>
              <p>{handlerDate(item?.departureDate)}</p>
              <p className="flex font-semibold">
                {item?.originAirport?.name} - Terminal 1A Domestik
              </p>
              <div className="flex justify-center pt-3">
                <div className="w-full border-t-2 border-slate-200"></div>
              </div>
              <div className="px-9">
                <p className="flex font-bold">
                  {item?.plane?.airline?.airlineName} - {item?.class?.name}
                </p>
                <p className="font-bold">{item?.plane?.airline?.airlineCode}</p>
                <div className="flex pt-4 gap-2">
                  <div className="self-start pt-1">
                    <LuSend />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold">Informasi</p>
                    <p>Baggage {item?.plane?.baggageMaxCapacity} kg</p>
                    <p>Cabin baggage {item?.plane?.cabinMaxCapacity} kg</p>
                    <p>In Flight Entertainment</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center pt-3">
                <div className="w-full border-t-2 border-slate-200"></div>
              </div>
              <div className="flex justify-between font-bold">
                <p className="text-lg">{item?.departureTime}</p>
                <p className="text-third-purple">Kedatangan</p>
              </div>
              <p>{handlerDate(item?.departureDate)}</p>
              <p className="flex font-semibold mb-5">
                {item?.destinationAirport?.name} - Terminal 1A Domestik
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default AccordionDetail
