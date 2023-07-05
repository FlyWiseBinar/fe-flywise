import React, { useEffect, useState } from "react"
import { styles } from "@/styles/styles"
import { LuArrowLeft } from "react-icons/lu"
import { HiOutlinePencil } from "react-icons/hi"
import { LuLogOut } from "react-icons/lu"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Head from "next/head"
import Link from "next/link"
import api from "@/configs/api"
import { getCookie, deleteCookie } from "cookies-next"
import { useRouter } from "next/router"
import Navbar from "@/components/Navbar"

const Profile = () => {
  const router = useRouter()
  const token = getCookie("accessToken")
  const [errors, setErrors] = useState([])
  const [form, setForm] = useState({
    fullName: "",
    telephone: "",
    email: "",
  })

  useEffect(() => {
    axios
      .get(api.apiWhoAmI, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setForm({
          email: res.data.data.email,
          fullName: res.data.data.fullName,
          telephone: res.data.data.telephone,
        })
      })
  }, [])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // untuk menghindari refresh laman
    try {
      const response = await axios.put(
        api.apiUpdateProfile,
        {
          fullName: form.fullName,
          telephone: form.telephone,
          email: form.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.status === 200) {
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
      }
    } catch (error) {
      if (error.response.status === 400) {
        setErrors(error.response.data.errors)
      }
      if (error.response.status === 500) {
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
  }

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
      router.push("/login")
    }, 1500)
  }

  return (
    <>
      <Head>
        <title>Profile | FlyWise</title>
        <link rel="icon" href="../logo.svg" />
      </Head>
      <Navbar />
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
      <div className="flex lg:justify-center ml-5 my-3 lg:w-3/4">
        <div className="py-5 font-bold text-xl w-1/2 flex">Akun</div>
      </div>
      <div className={`${styles.mainRow} gap-3`}>
        <div className="">
          <Link
            href="/"
            className="pr-56 flex gap-5 md:justify-end items-center bg-third-purple p-3 md:ml-auto rounded-xl text-white hover:bg-main-purple md:pr-100 duration-75"
          >
            <LuArrowLeft /> Beranda
          </Link>
        </div>
      </div>
      <div className="flex justify-center pt-3">
        <div className="md:w-7/12 w-10/12 border-t-2 border-slate-200"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:gap-20 gap-8 pt-10">
        <div className="flex justify-center">
          <ul className="flex flex-col ml-5">
            <li className="flex items-center gap-3 cursor-pointer hover:scale-105">
              <Link href="profile/profile" className="flex items-center gap-2">
                <div className="text-main-purple text-lg">
                  <HiOutlinePencil />
                </div>
                Ubah Profil
              </Link>
            </li>
            <div className="border-b w-60 pt-2 border-gray-300"></div>
            <li className="flex items-center pt-4 gap-3 cursor-pointer hover:scale-105">
              <div
                className="flex items-center gap-2"
                onClick={handleClickLogout}
              >
                <div className="text-main-purple text-lg">
                  <LuLogOut />
                </div>
                Keluar
              </div>
            </li>
            <div className="border-b md:w-60 pt-2 border-gray-300"></div>
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col border-2 md:w-96 w-80 rounded-lg py-10 px-7 mb-5">
            <div className="py-1 font-bold text-lg">Ubah Data Profil</div>
            <form onSubmit={handleSubmit}>
              <div className="pt-3 flex flex-col md:max-w-md">
                <div className="rounded-t-lg bg-third-purple py-2 pl-4 font-medium text-white mb-3">
                  Data Diri
                </div>
                <div className="pl-4 pt-2 pb-1 text-second-purple text-sm font-bold">
                  Nama Lengkap
                </div>
                <input
                  onChange={handleChange}
                  className="ml-4 pl-4 border border-gray-300 rounded-md py-2 focus:border-main-purple outline-none"
                  type="text"
                  id="fullname"
                  value={form.fullName}
                  name="fullName"
                />
                {errors &&
                  errors.map(
                    (err, index) =>
                      err.field === "fullName" && (
                        <p key={index} className="text-red-500">
                          {err.message}
                        </p>
                      )
                  )}
                <div className="pl-4 pt-2 pb-1 text-second-purple text-sm font-bold">
                  Nomor Telepon
                </div>
                <input
                  onChange={handleChange}
                  className="ml-4 pl-4 border border-gray-300 rounded-md py-2 focus:border-main-purple outline-none"
                  type="text"
                  placeholder="+6213486777"
                  id="telephone"
                  value={form.telephone}
                  name="telephone"
                />
                {errors &&
                  errors.map(
                    (err, index) =>
                      err.field === "telephone" && (
                        <p key={index} className="text-red-500">
                          {err.message}
                        </p>
                      )
                  )}
                <div className="pl-4 pt-2 pb-1 text-second-purple text-sm font-bold">
                  Email
                </div>
                <input
                  onChange={handleChange}
                  className="ml-4 pl-4 border border-gray-300 rounded-md py-2 focus:border-main-purple outline-none"
                  type="text"
                  placeholder="JohnDoe@gmail.com"
                  id="email"
                  value={form.email}
                  name="email"
                />
                {errors &&
                  errors.map(
                    (err, index) =>
                      err.field === "email" && (
                        <p key={index} className="text-red-500">
                          {err.message}
                        </p>
                      )
                  )}
                <div className="flex self-center pt-7">
                  <button className="bg-second-purple hover:bg-main-purple px-8 py-1.5 rounded-lg text-white">
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
