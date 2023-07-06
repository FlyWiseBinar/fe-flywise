import React, { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { useSearchParams } from "next/navigation"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Head from "next/head"
import api from "@/configs/api"

const Otp = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams?.get("email")
  const initialOtp = {
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
  }
  const [otp, setOtp] = useState(initialOtp)

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      document.getElementsByTagName("input")[i].value &&
        document.getElementsByTagName("input")[i + 1]?.focus()
    }
  }, [otp])

  const handleChange = (e) => {
    setOtp({
      ...otp,
      [e.target.id]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(api.apiVerifyOtp, {
        email: email,
        otp:
          otp.first +
          otp.second +
          otp.third +
          otp.fourth +
          otp.fifth +
          otp.sixth,
      })
      if (response.status == 200) {
        toast.success(response.data.message, {
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
          router.push("/login")
        }, 2000)
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  }

  const handleResendOtp = async () => {
    try {
      const response = await axios.post(api.apiResendOtp, {
        email: email,
      })
      if (response.status == 200) {
        toast.success("Otp resent successfuly, check your email", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  }

  return (
    <div className="fixed z-50 top-4 bg-white w-full">
      <Head>
        <title>Register | FlyWise</title>
        <link rel="icon" href="../logo.svg" />
      </Head>
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
      <div className="container flex z-50 xl:mx-28 mx-10 ">
        <img src="/logo.svg" alt="logo" className="h-10 w-10" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="h-screen bg-slate-50 py-20 px-3">
          <div className="container mx-auto">
            <div className="max-w-sm mx-auto md:max-w-lg">
              <div className="w-full">
                <div className="bg-white h-64 py-3 rounded text-center">
                  <h1 className="text-2xl mx-14 text-left font-medium">
                    Register
                  </h1>
                  <div className="flex flex-col mt-4">
                    <span>Ketik 6 digit kode yang dikirimkan ke</span>
                    <span className="font-bold">
                      {email ?? "******@yourdomain"}
                    </span>
                  </div>
                  <div
                    id="otp"
                    className="flex flex-row justify-center text-center px-2 mt-5"
                  >
                    <input
                      className="m-2 border h-10 w-10 text-center form-control rounded"
                      type="text"
                      id="first"
                      maxLength="1"
                      value={otp.first}
                      onChange={handleChange}
                    />
                    <input
                      className="m-2 border h-10 w-10 text-center form-control rounded"
                      type="text"
                      id="second"
                      maxLength="1"
                      value={otp.second}
                      onChange={handleChange}
                    />
                    <input
                      className="m-2 border h-10 w-10 text-center form-control rounded"
                      type="text"
                      id="third"
                      maxLength="1"
                      value={otp.third}
                      onChange={handleChange}
                    />
                    <input
                      className="m-2 border h-10 w-10 text-center form-control rounded"
                      type="text"
                      id="fourth"
                      maxLength="1"
                      value={otp.fourth}
                      onChange={handleChange}
                    />
                    <input
                      className="m-2 border h-10 w-10 text-center form-control rounded"
                      type="text"
                      id="fifth"
                      maxLength="1"
                      value={otp.fifth}
                      onChange={handleChange}
                    />
                    <input
                      className="m-2 border h-10 w-10 text-center form-control rounded"
                      type="text"
                      id="sixth"
                      maxLength="1"
                      value={otp.sixth}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex justify-center text-center mt-5">
                    <div
                      onClick={handleResendOtp}
                      className="flex items-center text-black hover:text-violet-600 cursor-pointer"
                    >
                      <span className="font-medium">Kirim ulang OTP</span>
                      <i className="bx bx-caret-right ml-1"></i>
                    </div>
                  </div>
                </div>

                <div className="items-center mx-4 sm:px-32 sm:pt-9">
                  <button
                    type="submit"
                    className="flex w-full sm:w-64 justify-center rounded-2xl bg-black px-6 sm:px-24 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Otp
