import Image from "next/image"
import React, { useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { useSearchParams } from "next/navigation"
import { PropagateLoader } from "react-spinners"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Head from "next/head"
import api from "@/configs/api"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const Forgotpassword = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams?.get("email")
  const initialForm = {
    password: "",
    confirm_password: "",
  }
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.put(api.apiResetPass, {
        email,
        password: form.password,
        confirm_password: form.confirm_password,
      })
      if (response.status == 200) {
        setLoading(false)
        setTimeout(() => {
          router.push("/login")
        }, 2000)
        toast.success(`${response.data.message}, redirect login in 3s...`, {
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
      setLoading(false)
      if (error.response.status == 403) {
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
      setErrors(error.response.data.errors)
    }
  }
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Head>
        <title>Forgot Password | FlyWise</title>
        <link rel="icon" href="../logo.svg" />
      </Head>
      <div className="md:flex hidden w-full md:w-1/2 bg-orange-400 justify-around items-center">
        <div className="flex items-center justify-center py-2 px-5">
          <Image src="/logo-2.svg" width={70} height={70} alt="Logo" />
          <div className="ml-5 flex flex-col">
            <span className="text-5xl text-white font-bold font-sans italic">
              FlyWise
            </span>
            <span className="font-sans text-indigo-600 mt-1">
              {"Choose Smarter Fly Further"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 md:py-12 pb-16 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset Password
          </h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Masukkan Password Baru
              </label>
              <div className="mt-2 flex items-center">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="block w-full rounded-2xl border-0 py-1.5 pl-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={form.password}
                  onChange={handleChange}
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="cursor-pointer absolute xl:right-52 right-12 text-xl"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </div>
                {errors &&
                  errors.map(
                    (err, index) =>
                      err.field == "password" && (
                        <p key={index} className="text-red-500">
                          {err.message}
                        </p>
                      )
                  )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirm_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Ulangi Password Baru
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  className="block w-full rounded-2xl border-0 py-1.5 pl-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={form.confirm_password}
                  onChange={handleChange}
                />
                {errors &&
                  errors.map(
                    (err, index) =>
                      err.field == "confirm_password" && (
                        <p key={index} className="text-red-500">
                          {err.message}
                        </p>
                      )
                  )}
              </div>
            </div>

            <div>
              {!loading ? (
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-2xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Simpan
                </button>
              ) : (
                <div className="flex justify-center">
                  <PropagateLoader color="#d6b136" speedMultiplier={4} />
                </div>
              )}
            </div>
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default Forgotpassword
