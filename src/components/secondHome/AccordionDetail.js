import React from "react";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { LuChevronUp } from "react-icons/lu";
import { LuSend } from "react-icons/lu";
import { LuBaggageClaim } from "react-icons/lu";
import { styles } from "@/styles/styles";

const AccordionDetail = ({
  hourAttendate,
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
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`${styles.mainCol} w-1/2 mx-auto border-2 rounded-lg border-third-purple mb-1`}
      >
        <button
          className="flex items-center justify-between w-full p-4 text-lg font-medium text-left bg-white cursor-pointer rounded-lg b"
          onClick={toggleAccordion}
        >
          <span className="flex items-center gap-2 text-sm">
            <LuSend />
            {airflight} - {classAirflight}
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
        <div className="flex items-center justify-center gap-4 w-full p-4 text-lg font-medium bg-white cursor-pointer rounded-lg b">
          <span>
            <div>{hourAttendate}</div>
            <div>{Departure}</div>
          </span>
          <span className="text-center font-normal text-sm text-gray-400">
            <div className="w-80 border-b-2 ">{duration}</div>
            <div>Direct</div>
          </span>
          <span>
            <div>{hourTo}</div>
            <div>{ToLocation}</div>
          </span>
          <span className="text-2xl text-main-purple">
            <LuBaggageClaim />
          </span>
          <span className="pl-16 text-center">
            <div className="font-bold">IDR {price}</div>
            <div>
              <button className="py-1 px-8 bg-main-purple hover:bg-second-purple rounded-xl font-normal text-white">
                Pilih
              </button>
            </div>
          </span>
        </div>
        {isOpen && (
          <div className=" p-4 border-t-2 w-11/12 border-slate-300">
            <div className="text-second-purple font-bold">
              <p>Detail Keberangkatan</p>
            </div>
            <div className="flex justify-between font-bold">
              <p className="text-lg">{hourAttendate}</p>
              <p className="text-third-purple">Keberangkatan</p>
            </div>
            <p>{date}</p>
            <p className="flex font-semibold">
              {airPortDeparture} - Terminal 1A Domestik
            </p>
            <div className="flex justify-center pt-3">
              <div className="w-7/12 border-t-2 border-slate-200"></div>
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
                  <p>Baggage 20 kg</p>
                  <p>Cabin baggage 7 kg</p>
                  <p>In Flight Entertainment</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-3">
              <div className="w-7/12 border-t-2 border-slate-200"></div>
            </div>
            <div className="flex justify-between font-bold">
              <p className="text-lg">{hourTo}</p>
              <p className="text-third-purple">Kedatangan</p>
            </div>
            <p>{date}</p>
            <p className="flex font-semibold mb-5">
              {airPortTo} - Terminal 1A Domestik
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default AccordionDetail;
