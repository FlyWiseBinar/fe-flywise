import Image from "next/image"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { setCookie } from "cookies-next"
import { PropagateLoader } from "react-spinners"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Link from "next/link"
import Head from "next/head"
import api from "@/configs/api"
import getToken from "@/utils/getToken"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const token = getToken()
  const [isLogin, setIsLogin] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  useEffect(() => {
    if (token) {
      router.push("/")
    } else {
      setIsLogin(true)
    }
  }, [token])
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)
  const initialForm = {
    email: "",
    password: "",
  }
  const [form, setForm] = useState(initialForm)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await axios.post(api.apiLogin, {
        email: form.email,
        password: form.password,
      })
      if (response.status == 200) {
        setCookie("accessToken", response.data.accessToken, {
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
        })
        toast.success("login success, redirect in 3s...", {
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
          router.push("/")
        }, 2000)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setErrors(error.response.data.errors)
      if (error.response.status == 403) {
        toast.error(`${error.response.data.message}, redirect in 3s...`, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
        await axios.post(api.apiOtp, {
          email: form.email,
        })
        setTimeout(() => {
          router.push(`login/settings/otp-register?email=${form.email}`)
        }, 2000)
      }
    }
  }

  const handleForgotPassword = async () => {
    if (!form.email) {
      toast.error("email is required to reset password", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    } else {
      try {
        const response = await axios.post(api.apiSendResetPassOtp, {
          email: form.email,
        })
        if (response.status == 201) {
          setTimeout(() => {
            router.push(
              `/login/settings/otp-forgot-password?email=${form.email}`
            )
          }, 2000)
          toast.success(`${response.data.message}, will redirect 3s...`, {
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
        console.log(error)
        if (error.response.status == 403) {
          toast.error(error.response.data.message + " with login", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        } else {
          toast.error("email not found", {
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
    }
  }
  return (
    <>
      {isLogin && (
        <div className="flex flex-col md:flex-row h-screen">
          <Head>
            <title>Login | FlyWise</title>
            <link rel="icon" href="../logo.svg" />
          </Head>
          <div className="md:flex hidden w-full md:w-1/2 bg-orange-400 justify-around items-center">
            <div className="flex items-center justify-center py-2 px-5">
              <Image src="/logo-2.svg" width={70} height={70} alt="Logo" />
              <div className="ml-5 flex flex-col">
                <span className="text-5xl text-white font-bold font-sans italic">
                  FlyWise
                </span>
                <span className="font-sans text-lg text-white mt-1">
                  {"Choose Smarter Fly Further"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center px-6 md:px-8 md:py-12 pb-16">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Masuk
              </h2>
            </div>
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email/No Telepon
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="email"
                      className="block w-full rounded-2xl border-0 py-1.5 pl-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors &&
                      errors.map(
                        (err, index) =>
                          err.field == "email" && (
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
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <div
                        className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
                        onClick={handleForgotPassword}
                      >
                        Lupa Kata Sandi
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      className="block w-full rounded-2xl border-0 py-1.5 pl-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={form.password}
                      onChange={handleChange}
                    />
                    <div
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer absolute xl:right-52 right-12 text-xl"
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </div>
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
                <div>
                  {!loading ? (
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-2xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Kirim
                    </button>
                  ) : (
                    <div className="flex justify-center">
                      <PropagateLoader color="#d6b136" speedMultiplier={4} />
                    </div>
                  )}
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Belum punya akun?{" "}
                <Link
                  href="login/settings/register"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Daftar di sini
                </Link>
              </p>
            </div>
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
        </div>
      )}
    </>
  )
}

export default Login
