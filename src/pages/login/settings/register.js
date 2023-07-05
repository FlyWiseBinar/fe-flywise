import Image from "next/image"
import React, {useEffect} from "react"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router"
import { PropagateLoader } from "react-spinners"
import Link from "next/link"
import Head from "next/head"
import api from "@/configs/api"
import getToken from "@/utils/getToken"

const Register = () => {
  const router = useRouter()
  const token = getToken()
	const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
	if (token) {
		router.push("/")
	} else {
		setIsLogin(true)
	}
	},[token])
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)

  const initialForm = {
    fullName: "",
    email: "",
    password: "",
    telephone: "",
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
    setLoading(true)
    try {
      const response = await axios.post(api.apiRegister, form)
      setForm(initialForm)
      if (response.status == 201) {
        await axios.post(api.apiOtp, {
          email: form.email,
        })
        router.push(`/login/settings/otp-register?email=${form.email}`)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setErrors(error.response.data.errors)
    }
  }

  return (
    <>
	 {
		isLogin && 
		<div className="flex flex-col md:flex-row h-screen">
      <Head>
        <title>Register | FlyWise</title>
        <link rel="icon" href="../logo.svg" />
      </Head>
      <div className="md:flex hidden w-full md:w-1/2 bg-orange-400 justify-around items-center">
        <div className="flex items-center justify-center py-2 px-5">
          <Image src="/pesawat.png" width={70} height={70} alt="Logo" />
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

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 md:py-12 pb-10 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Daftar
          </h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nama
              </label>
              <div className="mt-2">
                <input
                  id="nama"
                  name="fullName"
                  type="text"
                  autoComplete="nama"
                  className="block w-full rounded-2xl border-0 py-1.5 pl-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={form.fullName}
                  onChange={handleChange}
                />

                {errors &&
                  errors.map(
                    (err, index) =>
                      err.field == "fullName" && (
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
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
              </div>
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
              <label
                htmlFor="notelp"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nomor Telepon
              </label>
              <div className="mt-2">
                <input
                  id="notelp"
                  name="telephone"
                  type="text"
                  className="block w-full rounded-2xl border-0 py-1.5 pl-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={form.telephone}
                  onChange={handleChange}
                />
                {errors &&
                  errors.map(
                    (err, index) =>
                      err.field == "telephone" && (
                        <p key={index} className="text-red-500">
                          {err.message}
                        </p>
                      )
                  )}
              </div>
            </div>
            <div>
              <label
                htmlFor="buatpass"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Buat Password
              </label>
              <div className="mt-2">
                <input
                  id="buatpass"
                  name="password"
                  type="password"
                  className="block w-full rounded-2xl border-0 py-1.5 pl-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={form.password}
                  onChange={handleChange}
                />
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
              {!loading ? (
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-2xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Daftar
                </button>
              ) : (
                <div className="flex justify-center">
                  <PropagateLoader color="#d6b136" speedMultiplier={4} />
                </div>
              )}
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
	 }
	 </>
  )
}

export default Register
