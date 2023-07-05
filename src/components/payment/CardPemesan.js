import React from "react"
import { useState } from "react"

const CardPemesan = () => {
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
    <div className="flex flex-col bg-white gap-5 rounded-xl shadow-xl p-5 border-solid border-[1px] border-slate-400 px-5">
      <div>
        <p className="font-extrabold text-2xl"> Isi Data Pesanan</p>
        <h1 className="bg-black text-white p-3 rounded-t-xl mt-5 ">
          Data Diri Pemesan
        </h1>
        <form className="mx-5">
          <div className="my-6">
            <label className="block mb-2 font-semibold text-purple-500">
              Nama Lengkap
            </label>
            <input
              className=" p-3 border border-gray-300 text-gray-900 text-sm rounded-sm w-full"
              required
              placeholder="Nama Lengkap"
            />
          </div>
          <div>
            <label
              htmlFor="toggle"
              className="flex cursor-pointer justify-between"
            >
              <span className="font-medium text-gray-900 ">
                Punya Nama Keluarga ?
              </span>
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggle"
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
                    placeholder="Nama Keluarga"
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
              placeholder="Nomor Telepon"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-purple-500">
              Email
            </label>
            <input
              className=" p-3 border border-gray-300 text-gray-900 text-sm rounded-sm w-full "
              placeholder="Email"
              required
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CardPemesan
