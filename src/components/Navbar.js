import React, { useState } from "react"
import { styles } from "@/styles/styles"
import { BiLogIn } from "react-icons/bi"
import Link from "next/link"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={`${styles.mainRow} shadow-lg`}>
      <div
        className={` ${styles.mainRow} bg-white z-50 !justify-between px-12`}
      >
        <div className="w-full flex-col justify-start p-3">
          <p className="text-2xl font-bold text-main-purple">FlyWise</p>
          <p className="text-lg text-main-purple">Your Traveling Partner</p>
        </div>

        <div className="w-full flex justify-end items-center">
          <div className="md:hidden">
            <button className="focus:outline-none" onClick={toggleSidebar}>
              <svg
                className="w-6 h-6 text-main-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex gap-2 items-center">
            <div>
              <Link
                href="/login"
                className="flex items-center justify-center bg-main-orange py-3 px-4 rounded-xl text-white hover:scale-110 duration-300"
              >
                <BiLogIn />
                <p>Masuk</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden bg-white z-50 fixed top-0 right-0 w-64 h-screen overflow-y-auto ease-in-out transition-all duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button className="focus:outline-none" onClick={toggleSidebar}>
            <svg
              className="w-6 h-6 text-main-purple"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-4 py-8">
          <ul className="space-y-4">
            <li>
              <div>
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-main-purple"
                >
                  <BiLogIn />
                  <p>Masuk</p>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
