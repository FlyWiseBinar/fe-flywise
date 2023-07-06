import React from "react"
import Image from "next/image"

const DetailMethod = () => {
  return (
    <div className=" flex flex-col bg-white rounded-xl content-start p-5 justify-center items-center">
      <div className="w-[200px] lg:w-[400px] md:w-[400px] sm:w-[400px]">
        <div className="flex flex-row ">
          <h2 className="font-bold text-xl">Detail Penerbangan</h2>
        </div>
        <div className="flex flex-row justify-between mt-2 items-center">
          <p className="font-bold ">07:00</p>
          <p className="font-medium text-purple-500 text-xs">Keberangkatan</p>
        </div>
        <p className="font-light text-sm">3 Maret 2023</p>
        <p className="font-medium text-sm">
          Soekarno Hatta - Terminal 1A Domestik
        </p>

        <div className="flex flex-row items-center gap-3 border-t-2 border-b-2 my-3">
          <div className="h-full items-center flex">
            <Image
              src="/assets/JetAir.png"
              alt="JetAir"
              width={20}
              height={20}
              className="items-center"
            />
          </div>
          <div className=" my-3 flex flex-col gap-3">
            <div>
              <p className="font-bold text-sm">Jet Air - Economy</p>
              <p className="font-bold text-sm">JT-203</p>
            </div>
            <div>
              <p className="font-bold text-sm">Informasi :</p>
              <p className="text-sm">Baggage 20 kg</p>
              <p className="text-sm">Cabin Baggage 7 kg</p>
              <p className="text-sm">In Flight Entertainment</p>
            </div>
          </div>
        </div>

        <div className="border-b-2">
          <div className="flex flex-row justify-between items-center">
            <p className="font-bold text-sm">11:00</p>
            <p className="font-medium text-purple-500 text-xs">Kedatangan</p>
          </div>
          <p className="text-sm">3 Maret 2023</p>
          <p className="text-sm font-medium mb-3">
            Melbourne International Airport
          </p>
        </div>

        <p className="font-bold text-sm mt-3">Rincian Harga</p>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row justify-between">
            <p className="text-sm">2 Adults</p>
            <p className="text-sm">IDR 9.550.000</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm">1 Baby</p>
            <p className="text-sm">IDR 0</p>
          </div>
          <div className="flex flex-row justify-between border-b-2">
            <p className="text-sm">Tax</p>
            <p className="text-sm mb-3">IDR 550.000</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold my-3">Total</p>
          <p className="font-bold text-lg text-purple-900 my-3">
            IDR 10.100.000
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailMethod
