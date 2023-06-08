import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      {/*awal navbar*/}
      <nav className="pt-4 shadow">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-1/12">
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
              <button className="btn px-5 py-2 rounded-xl bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 text-white ">
                Masuk
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/*akhir navbar*/}
      {/*awal banner*/}
      <div className="mx-auto mt-7 relative">
        <div className="flex">
          <div className="w-1/12 my-auto">
            <div className="bg-orange-400 hover:bg-orange-400 w-full h-36"></div>
          </div>
          <div className="w-10/12">
            <div className="bg-gradient-to-r from-indigo-600 to-transparent w-full h-48 rounded-2xl flex items-center">
              <div className="pl-16">
                <p className="font-bold italic text-4xl text-white mb-1">
                  Diskon hari ini
                </p>
                <p className="font-bold text-4xl text-orange-400">85%!</p>
              </div>
            </div>
          </div>
          <div className="w-1/12 my-auto">
            <div className="bg-orange-400 hover:bg-orange-400  w-full h-36"></div>
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
              <Image src="/icon-airplane.png" height={24} width={24} />
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
              <Image src="/icon-airplane.png" height={24} width={24} />
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
              <Image src="/icon-date.png" width={24} height={24} />
            </div>
            <div className="text-center text-neutral-400">Date</div>
          </div>
          <div className="col-span-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-neutral-400">Departure</div>
              <div>
                <button className="text-indigo-600">Pilih tanggal</button>
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
          <div className="col-span-1 pl-2 h-3 grid grid-cols-2 gap-3">
            <div>
              <Image src="/icon-kursi.png" height={18} width={18} />
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
          <div className="col-start-8 col-span-4">
            <button className="px-20 py-3 ml-auto  bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 rounded-xl text-white">
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
              <div className="grid grid-cols-6 gap-1 px-3 py-2 rounded-xl items-center bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
                <div className="col-span-2">
                  <Image src="/icon-search.png" width={20} height={20} />
                </div>
                <div className="col-span-4 text-white">Semua</div>
              </div>
            </Link>
            {/*Asia*/}
            <Link href="*">
              <div className="grid grid-cols-6 gap-1 px-3 py-2 rounded-xl items-center bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
                <div className="col-span-2">
                  <Image src="/icon-search.png" width={20} height={20} />
                </div>
                <div className="col-span-4 text-white">Asia</div>
              </div>
            </Link>
            {/*Amerika*/}
            <Link href="*">
              <div className="grid grid-cols-6 gap-1 px-3 py-2 rounded-xl items-center bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
                <div className="col-span-2">
                  <Image src="/icon-search.png" width={20} height={20} />
                </div>
                <div className="col-span-4 text-white">Amerika</div>
              </div>
            </Link>
            {/*Australia*/}
            <Link href="*">
              <div className="grid grid-cols-6 gap-1 px-3 py-2 rounded-xl items-center bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
                <div className="col-span-2">
                  <Image src="/icon-search.png" width={20} height={20} />
                </div>
                <div className="col-span-4 text-white">Australia</div>
              </div>
            </Link>
            {/*Eropa*/}
            <Link href="*">
              <div className="grid grid-cols-6 gap-1 px-3 py-2 rounded-xl items-center bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
                <div className="col-span-2">
                  <Image src="/icon-search.png" width={20} height={20} />
                </div>
                <div className="col-span-4 text-white">Eropa</div>
              </div>
            </Link>
            {/*Afrika*/}
            <Link href="*">
              <div className="grid grid-cols-6 gap-1 px-3 py-2 rounded-xl items-center bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
                <div className="col-span-2">
                  <Image src="/icon-search.png" width={20} height={20} />
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
                <Image src="/image-card.png" height={100} width={149.82} />
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
                <Image src="/image-card.png" height={100} width={149.82} />
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
                <Image src="/image-card.png" height={100} width={149.82} />
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
                <Image src="/image-card.png" height={100} width={149.82} />
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
                <Image src="/image-card.png" height={100} width={149.82} />
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
    </div>
  );
};

export default Header;
