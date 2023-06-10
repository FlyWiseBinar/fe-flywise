import React, { useState } from "react";
import Header from "../../component/Header";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Datepicker from "tailwind-datepicker-react";

const options = {
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-gray-100 dark:bg-gray-800",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "bg-gray-300",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => <span className="">Previous</span>,
    next: () => <span>Next</span>,
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date(),
  language: "en",
};

const index = () => {
  /*const [value, setValue] = useState({ 
    startDate: new Date(),
    endDate: new Date().setMonth(11), 
})

const handleValueChange = (newValue) => {
console.log("newValue:", newValue); 
setValue(newValue); 
} */

  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    console.log(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };

  return (
    <>
      {/*awal navbar*/}
      <nav className="pt-4 shadow">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-1/12 pl-5">
              <Image src="/logo.png" alt="logo" height={83} width={83} />
            </div>
            <div className="w-7/12">
              <input
                className="bg-slate-200 hover:bg-slate-50 focus:outline-none focus:ring focus:ring-gray-300 px-5 py-2 w-2/4 rounded-full"
                placeholder="Cari di sini ..."
              />
            </div>
            <div className="w-3/12"></div>
            <div className="w-1/12">
              <Link href="*">
                <div className="grid grid-cols-6 gap-1 px-2 py-2 rounded-xl items-center bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 shadow-lg mr-8">
                  <div className="col-span-2">
                    <Image src="/login.svg" width={20} height={20} />
                  </div>
                  <div className="col-span-4 text-white">Masuk</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/*akhir navbar*/}
      {/*awal banner*/}
      <div className="mx-auto mt-14 relative">
        <div className="flex">
          <div className="w-full my-auto">
            <div className="bg-orange-400 hover:bg-orange-400 w-full h-36"></div>
            <img
              src="/banner.svg"
              alt="banner-img"
              className="absolute -top-8 w-full px-28 h-52 flex items-center"
            />
          </div>
        </div>
      </div>
      {/*akhir banner*/}
      {/*awal search form*/}
      <div className=" flex justify-center">
        <div className="justify-items-start px-10 bg-white h-[298px] w-[950px] absolute top-64 rounded-xl shadow-lg grid grid-cols-12 gap-0">
          {/*row-1*/}
          <div className="pt-4 col-span-12 font-bold text-xl">
            Pilih Jadwal Penerbangan spesial di{" "}
            <span className="text-indigo-700">Tiketku!</span>
          </div>
          {/*row-2*/}
          <div className="col-span-1 h-3 grid grid-cols-2 gap-0">
            <div>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21.5004V19.5004H23V21.5004H5ZM6.85 16.5004L4 11.6504L5.55 11.3504L7.3 12.9004L12.1 11.6004L8.05 4.75039L10 4.15039L16.85 10.3004L21.85 8.95039C22.3833 8.80039 22.8667 8.90039 23.3 9.25039C23.7333 9.60039 23.95 10.0671 23.95 10.6504C23.95 11.0171 23.8377 11.3421 23.613 11.6254C23.3877 11.9087 23.1 12.1004 22.75 12.2004L6.85 16.5004Z"
                  fill="#8A8A8A"
                />
              </svg>
            </div>
            <div className="text-neutral-400">From</div>
          </div>
          <div className="col-span-4 pl-2">
            <div>
              {" "}
              <input
                className=" hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent"
                placeholder="Jakarta (JKT)"
              />
            </div>{" "}
            <div>
              <hr className="border-t-1 border-gray-600 mt-1" />
            </div>
          </div>
          <div className="col-span-2">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="32" height="32" rx="12" fill="#151515" />
              <path
                d="M6 17C6 13.675 8.698 11 12 11H26"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23 8L26 11L23 14M26 16C26 19.325 23.302 22 20 22H6"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 25L6 22L9 19"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="col-span-1 h-3 grid grid-cols-2">
            <div>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21.5004V19.5004H23V21.5004H5ZM6.85 16.5004L4 11.6504L5.55 11.3504L7.3 12.9004L12.1 11.6004L8.05 4.75039L10 4.15039L16.85 10.3004L21.85 8.95039C22.3833 8.80039 22.8667 8.90039 23.3 9.25039C23.7333 9.60039 23.95 10.0671 23.95 10.6504C23.95 11.0171 23.8377 11.3421 23.613 11.6254C23.3877 11.9087 23.1 12.1004 22.75 12.2004L6.85 16.5004Z"
                  fill="#8A8A8A"
                />
              </svg>
            </div>
            <div className="text-neutral-400 pl-3">To</div>
          </div>
          <div className="col-span-4">
            <div>
              {" "}
              <input
                className=" hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent"
                placeholder="Surabaya (SBY)"
              />
            </div>{" "}
            <div>
              <hr className="border-t-1 border-gray-600 mt-1" />
            </div>
          </div>
          {/*row-3*/}
          <div className="col-span-1 h-3 grid grid-cols-2 gap-0">
            <div>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.19303 14.8648C6.81526 14.8648 6.49837 14.7496 6.24237 14.5192C5.98726 14.2896 5.8597 14.0048 5.8597 13.6648C5.8597 13.3248 5.98726 13.0396 6.24237 12.8092C6.49837 12.5796 6.81526 12.4648 7.19303 12.4648C7.57081 12.4648 7.8877 12.5796 8.1437 12.8092C8.39881 13.0396 8.52637 13.3248 8.52637 13.6648C8.52637 14.0048 8.39881 14.2896 8.1437 14.5192C7.8877 14.7496 7.57081 14.8648 7.19303 14.8648ZM12.5264 14.8648C12.1486 14.8648 11.8321 14.7496 11.577 14.5192C11.321 14.2896 11.193 14.0048 11.193 13.6648C11.193 13.3248 11.321 13.0396 11.577 12.8092C11.8321 12.5796 12.1486 12.4648 12.5264 12.4648C12.9041 12.4648 13.221 12.5796 13.477 12.8092C13.7321 13.0396 13.8597 13.3248 13.8597 13.6648C13.8597 14.0048 13.7321 14.2896 13.477 14.5192C13.221 14.7496 12.9041 14.8648 12.5264 14.8648ZM17.8597 14.8648C17.4819 14.8648 17.1655 14.7496 16.9104 14.5192C16.6544 14.2896 16.5264 14.0048 16.5264 13.6648C16.5264 13.3248 16.6544 13.0396 16.9104 12.8092C17.1655 12.5796 17.4819 12.4648 17.8597 12.4648C18.2375 12.4648 18.5539 12.5796 18.809 12.8092C19.065 13.0396 19.193 13.3248 19.193 13.6648C19.193 14.0048 19.065 14.2896 18.809 14.5192C18.5539 14.7496 18.2375 14.8648 17.8597 14.8648ZM0.526367 24.4648V2.86484H4.52637V0.464844H7.19303V2.86484H17.8597V0.464844H20.5264V2.86484H24.5264V24.4648H0.526367ZM3.19303 22.0648H21.8597V10.0648H3.19303V22.0648ZM3.19303 7.66484H21.8597V5.26484H3.19303V7.66484Z"
                  fill="#8A8A8A"
                />
              </svg>
            </div>
            <div className="text-center text-neutral-400">Date</div>
          </div>
          <div className="col-span-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-neutral-400">Departure</div>
              <div>
                <div class="relative max-w-sm">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                  <button className="text-indigo-600">Pilih tanggal</button>
                </div>
              </div>
              <div>
                <hr className="border-t-1 w-full border-gray-600 mt-1" />
              </div>
            </div>
            <div>
              <div className="text-neutral-400">Return</div>
              <div>
                <button className="text-indigo-600">Pilih tanggal</button>
              </div>
              <div>
                <hr className="border-t-1 w-full border-gray-600 mt-1" />
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-1 pl-2 h-3 grid grid-cols-2 gap-2">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 20H8C7.45 20 6.979 19.804 6.587 19.412C6.195 19.02 5.99934 18.5493 6 18V7H8V18H15V20ZM11.5 6C10.95 6 10.479 5.804 10.087 5.412C9.695 5.02 9.49934 4.54934 9.5 4C9.5 3.45 9.696 2.979 10.088 2.587C10.48 2.195 10.9507 1.99934 11.5 2C12.05 2 12.521 2.196 12.913 2.588C13.305 2.98 13.5007 3.45067 13.5 4C13.5 4.55 13.304 5.021 12.912 5.413C12.52 5.805 12.0493 6.00067 11.5 6ZM16 22V17H11C10.45 17 9.979 16.804 9.587 16.412C9.195 16.02 8.99934 15.5493 9 15V9.5C9 8.8 9.24167 8.20833 9.725 7.725C10.2083 7.24167 10.8 7 11.5 7C12.2 7 12.7917 7.24167 13.275 7.725C13.7583 8.20833 14 8.8 14 9.5V14H16C16.55 14 17.021 14.196 17.413 14.588C17.805 14.98 18.0007 15.4507 18 16V22H16Z"
                  fill="#8A8A8A"
                />
              </svg>
            </div>
            <div className="text-neutral-400">To</div>
          </div>
          <div className="col-span-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-neutral-400">Passengers</div>
              <div>
                <button className="text-indigo-600">Penumpang</button>
              </div>
              <div>
                <hr className="border-t-1 w-full border-gray-600 mt-1" />
              </div>
            </div>
            <div>
              <div className="text-neutral-400">Set Class</div>
              <div>
                <button className="text-indigo-600">Pilih Class</button>
              </div>
              <div>
                <hr className="border-t-1 w-full border-gray-600 mt-1" />
              </div>
            </div>
          </div>
          {/*row-3*/}
          <div className="col-start-9 col-span-3">
            <button className=" px-10 py-3 ml-auto  bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 rounded-xl text-white">
              Cari Penerbangan
            </button>
          </div>
        </div>
      </div>
      {/*akhir search form*/}
      {/*awal section destinasi favorit*/}
      <div className="grid grid-cols-12 relative top-72">
        <div className="col-span-3"></div>
        <div className="col-span-6 ">
          <div className="text-lg font-bold">Destinasi Favorit</div>
          <div className="flex flex-row gap-3 mt-3">
            {/*semua*/}
            <Link href="*">
              <div className="grid grid-cols-6 gap-1 px-3 py-2 rounded-xl items-center bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 shadow-lg">
                <div className="col-span-2">
                  <Image src="/search.svg" width={20} height={20} />
                </div>
                <div className="col-span-4 text-white">Semua</div>
              </div>
            </Link>
            {/*Asia*/}
            <Link href="*">
              <div className="grid grid-cols-6 gap-1 px-3 py-2 rounded-xl items-center bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 shadow-lg">
                <div className="col-span-2">
                  <Image src="/search.svg" width={20} height={20} />
                </div>
                <div className="col-span-4 text-white">Asia</div>
              </div>
            </Link>
            {/*Amerika*/}
            <Link href="*">
              <div className="grid grid-cols-6 gap-1 px-3 py-2 rounded-xl items-center bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 shadow-lg">
                <div className="col-span-2">
                  <Image src="/search.svg" width={20} height={20} />
                </div>
                <div className="col-span-4 text-white">Amerika</div>
              </div>
            </Link>
            {/*Australia*/}
            <Link href="*">
              <div className="grid grid-cols-6 gap-1 px-3 py-2 rounded-xl items-center bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 shadow-lg">
                <div className="col-span-2">
                  <Image src="/search.svg" width={20} height={20} />
                </div>
                <div className="col-span-4 text-white">Australia</div>
              </div>
            </Link>
            {/*Eropa*/}
            <Link href="*">
              <div className="grid grid-cols-6 gap-1 px-3 py-2 rounded-xl items-center bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 shadow-lg">
                <div className="col-span-2">
                  <Image src="/search.svg" width={20} height={20} />
                </div>
                <div className="col-span-4 text-white">Eropa</div>
              </div>
            </Link>
            {/*Afrika*/}
            <Link href="*">
              <div className="grid grid-cols-6 gap-1 px-3 py-2 rounded-xl items-center bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 shadow-lg">
                <div className="col-span-2">
                  <Image src="/search.svg" width={20} height={20} />
                </div>
                <div className="col-span-4 text-white">Afrika</div>
              </div>
            </Link>
          </div>
          {/*awal card*/}
          <div className="mt-7 container flex flex-row gap-3 mb-10">
            {/*card-1 */}
            <Link href="*">
              <div className="bg-white shadow-xl h-[194px] w-[166.94px] rounded-md p-2">
                <Image src="/card.svg" height={100} width={149.82} />
                <div className="pt-2">
                  <p className="text-[12px]">Jakarta &rarr; Bangkok</p>
                  <p className="text-indigo-500 font-bold text-[10px]">
                    AirAsia
                  </p>
                  <p className="text-[12px]">20-30 Maret 2023</p>
                  <p className="text-[12px]">
                    Mulai dari{" "}
                    <span className="text-orange-700 font-bold text-[12px]">
                      IDR 950.000
                    </span>
                  </p>
                </div>
              </div>
            </Link>
            {/*card-2 */}
            <Link href="*">
              <div className="bg-white shadow-xl h-[194px] w-[166.94px] rounded-md p-2">
                <Image src="/card.svg" height={100} width={149.82} />
                <div className="pt-2">
                  <p className="text-[12px]">Jakarta &rarr; Bangkok</p>
                  <p className="text-indigo-500 font-bold text-[10px]">
                    AirAsia
                  </p>
                  <p className="text-[12px]">20-30 Maret 2023</p>
                  <p className="text-[12px]">
                    Mulai dari{" "}
                    <span className="text-orange-700 font-bold text-[12px]">
                      IDR 950.000
                    </span>
                  </p>
                </div>
              </div>
            </Link>
            {/*card-3 */}
            <Link href="*">
              <div className="bg-white shadow-xl h-[194px] w-[166.94px] rounded-md p-2">
                <Image src="/card.svg" height={100} width={149.82} />
                <div className="pt-2">
                  <p className="text-[12px]">Jakarta &rarr; Bangkok</p>
                  <p className="text-indigo-500 font-bold text-[10px]">
                    AirAsia
                  </p>
                  <p className="text-[12px]">20-30 Maret 2023</p>
                  <p className="text-[12px]">
                    Mulai dari{" "}
                    <span className="text-orange-700 font-bold text-[12px]">
                      IDR 950.000
                    </span>
                  </p>
                </div>
              </div>
            </Link>
            {/*card-4 */}
            <Link href="*">
              <div className="bg-white shadow-xl h-[194px] w-[166.94px] rounded-md p-2">
                <Image src="/card.svg" height={100} width={149.82} />
                <div className="pt-2">
                  <p className="text-[12px]">Jakarta &rarr; Bangkok</p>
                  <p className="text-indigo-500 font-bold text-[10px]">
                    AirAsia
                  </p>
                  <p className="text-[12px]">20-30 Maret 2023</p>
                  <p className="text-[12px]">
                    Mulai dari{" "}
                    <span className="text-orange-700 font-bold text-[12px]">
                      IDR 950.000
                    </span>
                  </p>
                </div>
              </div>
            </Link>
            {/*card-5 */}
            <Link href="*">
              <div className="bg-white shadow-xl h-[194px] w-[166.94px] rounded-md p-2">
                <Image src="/card.svg" height={100} width={149.82} />
                <div className="pt-2">
                  <p className="text-[12px]">Jakarta &rarr; Bangkok</p>
                  <p className="text-indigo-500 font-bold text-[10px]">
                    AirAsia
                  </p>
                  <p className="text-[12px]">20-30 Maret 2023</p>
                  <p className="text-[12px]">
                    Mulai dari{" "}
                    <span className="text-orange-700 font-bold text-[12px]">
                      IDR 950.000
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/*akhir card*/}
        </div>
        <div className="col-span-3"></div>
      </div>
      {/*awal card*/}
      {/*akhir section destinasi favorit*/}
    </>
  );
};

export default index;
