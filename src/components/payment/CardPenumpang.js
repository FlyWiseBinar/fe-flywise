import React from "react"
import { Fragment, useState } from "react"
import Datepicker from "react-tailwindcss-datepicker"

const CardPenumpang = () => {
  const [value, setValue] = useState({
    startDate: null,
  })

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue)
    setValue(newValue)
  }

  const [showForm, setShowForm] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const handleToggle = () => {
    setShowForm(!showForm)
    setInputValue("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lakukan logika atau tindakan yang Anda inginkan dengan nilai input
    console.log(inputValue)
  }

  return (
    <div className="flex flex-col bg-white gap-5 rounded-xl shadow-xl p-5 border-solid border-[1px] border-slate-400 ">
      <div>
        <p className="font-extrabold text-2xl"> Isi Data Penumpang</p>
        <h1 className="bg-black text-white p-3 rounded-t-xl mt-5 ">
          Data Diri Penumpang 1 - Adult
        </h1>
        <form className="mx-5">
          <div className="my-6">
            <label className="block mb-2 font-semibold text-purple-500">
              Nama Lengkap
            </label>
            <input
              className=" p-3 border border-gray-300 text-gray-900 text-sm rounded-sm w-full"
              required
            />
          </div>
          <div>
            <label
              htmlFor="toggle1"
              className="flex cursor-pointer justify-between"
            >
              <span className="font-medium text-gray-900 ">
                Punya Nama Keluarga ?
              </span>
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggle1"
                  className="sr-only peer"
                  checked={showForm}
                  onChange={handleToggle}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <div
                  className={`dot absolute transition transform ${
                    showForm ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </label>

            {showForm && (
              <form onSubmit={handleSubmit}>
                <div className="mb-6 mt-5">
                  <label className="block mb-2 font-semibold text-purple-500">
                    Nama Keluarga
                  </label>
                  <input
                    className=" p-3 border border-gray-300 text-gray-900 text-sm rounded-sm w-full"
                    required
                  />
                </div>
              </form>
            )}
          </div>
          <div className="mb-6 mt-5">
            <label className="block mb-2 font-semibold text-purple-500">
              Nomor Telepon
            </label>
            <input
              className=" p-3 border border-gray-300 text-gray-900 text-sm rounded-sm w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-purple-500">
              Tanggal Lahir
            </label>

            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="text-white">
                <Datepicker
                  primaryColor={"blue"}
                  inputClassName={"bg-white w-full p-3 border border-gray-300"}
                  useRange={false}
                  asSingle={true}
                  value={value}
                  onChange={handleValueChange}
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-purple-500">
              Kewarganegaraan
            </label>
            <input
              className=" p-3 border border-gray-300 text-gray-900 text-sm rounded-sm w-full "
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-purple-500">
              KTP / Paspor
            </label>
            <input
              className=" p-3 border border-gray-300 text-gray-900 text-sm rounded-sm w-full "
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-purple-500">
              Negara Penerbit
            </label>
            <input
              className=" p-3 border border-gray-300 text-gray-900 text-sm rounded-sm w-full "
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-purple-500">
              Berlaku Sampai
            </label>

            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="text-white">
                <Datepicker
                  primaryColor={"blue"}
                  inputClassName={"bg-white w-full p-3 border border-gray-300"}
                  useRange={false}
                  asSingle={true}
                  value={value}
                  onChange={handleValueChange}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CardPenumpang