import React from "react";
import { useState } from "react";
import { styles } from "@/styles/styles";
import {
  LuSend,
  LuBaggageClaim,
  LuChevronDown,
  LuChevronUp,
} from "react-icons/lu";
import { MdLocationOn } from "react-icons/md";

const AccordionHistory = ({
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
  codeBooking,
  totalPrice,
  namePassenger,
  idPassenger,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`${styles.mainCol} w-3/5 mx-auto border-2 rounded-xl border-third-purple mb-2`}
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
            <p className="font-bold">{cityDeparture}</p>
            <p>{date}</p>
            <p>{hourAttendate}</p>
          </div>
          <span className="text-center font-normal text-sm text-gray-400">
            <div className="w-80 border-b-2 ">{duration}</div>
            <div>{""}</div>
          </span>
          <div className="flex self-start items-center text-gray-400 text-4xl">
            <MdLocationOn />
          </div>
          <div>
            <p className="font-bold">{cityDestination}</p>
            <p>{date}</p>
            <p>{hourTo}</p>
          </div>
        </div>
        <div className="w-11/12 border-t border-gray-400"></div>
        <div className="flex justify-between items-center gap-4 p-4 text-lg bg-white cursor-pointer rounded-xl">
          <div>
            <p className="font-bold">Booking Code:</p>
            <p>{codeBooking}</p>
          </div>
          <div className="px-44">
            <p className="font-bold">Class:</p>
            <p>{classAirflight}</p>
          </div>
          <div>
            <p className="font-bold text-main-purple">IDR {totalPrice}</p>
          </div>
        </div>
        {isOpen && (
          <div className=" p-4 border-t-2 w-11/12 border-slate-300">
            <div className="font-bold text-xl">
              <p>Detail Pesanan</p>
            </div>
            <span className="flex gap-1 text-xl">
              <p>Booking Code:</p>{" "}
              <p className="font-bold text-main-purple mb-3">{codeBooking}</p>
            </span>
            <div className="flex justify-between font-bold">
              <p className="text-lg">{hourAttendate}</p>
              <p className="text-third-purple">Keberangkatan</p>
            </div>
            <p>{date}</p>
            <p className="flex font-semibold">
              {airPortDeparture} - Terminal 1A Domestik
            </p>
            <div className="flex justify-center pt-3">
              <div className="w-11/12 border-t-2 border-slate-200"></div>
            </div>
            <div className="px-9">
              <p className="flex font-bold">
                {airflight} - {classAirflight}
              </p>
              <p className="font-bold">{codeAirFlight}</p>
              <div className="flex pt-4 gap-2">
                <div className="self-start pt-1">
                  <LuSend />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">Informasi</p>
                  <p className="text-second-purple">
                    Penumpang 1: {namePassenger}{" "}
                  </p>
                  <p>ID: {idPassenger} </p>
                  <p className="text-second-purple">
                    Penumpang 2: {namePassenger}
                  </p>
                  <p>ID: {idPassenger} </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-3">
              <div className="w-11/12 border-t-2 border-slate-200"></div>
            </div>
            <div className="flex justify-between font-bold">
              <p className="text-lg">{hourTo}</p>
              <p className="text-third-purple">Kedatangan</p>
            </div>
            <p>{date}</p>
            <p className="flex font-semibold mb-5">
              {airPortTo} - Terminal 1A Domestik
            </p>
            <div className="flex justify-center pt-3">
              <div className="w-11/12 border-t-2 border-slate-200"></div>
            </div>
            <div className="flex font-bold">
              <p className="text-lg">Rincian Harga</p>
            </div>
            <div className="flex justify-between">
              <p>2 Adults</p>
              <p>IDR {totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p>1 Baby</p>
              <p>IDR {totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>IDR {totalPrice}</p>
            </div>
            <div className="flex justify-center pt-3">
              <div className="w-11/12 border-t border-slate-200"></div>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <p>Total</p>
              <p className="text-main-purple">IDR {totalPrice}</p>
            </div>
            <div className="flex justify-end mt-5">
            <button className="px-16 py-3 rounded-2xl bg-main-purple hover:bg-second-purple text-white">Cetak Tiket</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AccordionHistory;
