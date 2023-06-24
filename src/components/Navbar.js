import React, { useEffect, useState } from "react"
import { styles } from "@/styles/styles"
import { BiLogIn, BiLogOut } from "react-icons/bi"
import { AiOutlineBars } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import Link from "next/link"
import { getCookie, deleteCookie } from "cookies-next"
import { useRouter } from "next/router"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Navbar = () => {
  const router = useRouter()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    const token = getCookie("accessToken")
    if (token) setIsLogin(true)
  }, [])

  const handleClickLogout = () => {
    deleteCookie("accessToken")
    toast.success("logout success", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
    setTimeout(() => {
      router.push("login")
    }, 1500)
  }
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={`${styles.mainRow} shadow-lg`}>
        <div
          className={` ${styles.mainRow} bg-white z-20 !justify-between px-12 lg:px-20 md:px-20`}
        >
          <div className="w-full flex-col justify-start p-3">
            <p className="md:text-2xl text-xl font-bold text-main-purple">FlyWise</p>
            <p className="md:text-lg text-base text-main-purple">Your Traveling Partner</p>
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
              {isLogin ? (
                <div className="flex gap-6">
                  <div>
                    <Link
                      href="orderHistory"
                      className="flex items-center justify-center text-black hover:text-main-purple text-2xl hover:scale-110 duration-300"
                    >
                      <AiOutlineBars />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/profile"
                      className="flex items-center justify-center text-black hover:text-main-purple text-2xl hover:scale-110 duration-300"
                    >
                      <CgProfile />
                    </Link>
                  </div>
                  <div>
                    <div
                      className=" cursor-pointer flex items-center justify-center text-black hover:text-main-purple text-2xl hover:scale-110 duration-300"
                      onClick={handleClickLogout}
                    >
                      <BiLogOut />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <Link
                    href="login"
                    className="flex items-center justify-center text-black hover:text-main-purple text-2xl hover:scale-110 duration-300"
                  >
                    <BiLogIn />
                    <p>Masuk</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={`md:hidden bg-white z-50 fixed top-0 right-0 w-3/5 h-screen overflow-y-auto ease-in-out transition-all duration-300 transform ${isSidebarOpen
            ? "translate-x-0 md:filter-none shadow-[0_0_500px_rgba(37,37,37,1)] border"
            : "translate-x-full"
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
          <div className="px-4 pb-8">
            <ul className="space-y-2">
              {isLogin ? (
                <>
                  <div className="w-full justify-center">
                    <div className="border-b border-gray-400"></div>
                  </div>
                  <li className="flex justify-center">
                    <Link
                      href="/orderHistory"
                      className="flex items-center gap-3 w-1/2 text-lg text-black hover:text-main-purple hover:font-semibold hover:scale-110 duration-300"
                    >
                      <AiOutlineBars />
                      <p>History</p>
                    </Link>
                  </li>
                  <div className="w-full justify-center">
                    <div className="border-b border-gray-400"></div>
                  </div>
                  <li className="flex justify-center  ">
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 w-1/2 text-lg rounded-xl text-black hover:text-main-purple hover:font-semibold hover:scale-110 duration-300"
                    >
                      <CgProfile />
                      <p>Profile</p>
                    </Link>
                  </li>
                  <div className="w-full justify-center">
                    <div className="border-b border-gray-400"></div>
                  </div>
                  <li>
                    <div className="justify-center flex">
                      <div
                        className="fixed bottom-0 mb-8 px-10 gap-3 text-lg cursor-pointer bg-orange-500 py-2 rounded-lg flex items-center justify-center hover:font-semibold text-white hover:bg-orange-600 hover:text-xl hover:scale-110 duration-300"
                        onClick={handleClickLogout}
                      >
                        <BiLogOut />
                        <p>Keluar</p>
                      </div>
                    </div>
                  </li>
                </>
              ) : (
                <li>
                  <div>
                    <Link
                      href="login"
                      className="flex items-center gap-2 text-main-purple"
                    >
                      <BiLogIn />
                      <p>Masuk</p>
                    </Link>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
