import React, {useEffect, useState} from "react"
import {styles} from "@/styles/styles"
import {LuArrowLeft} from "react-icons/lu"
import {HiOutlinePencil} from "react-icons/hi"
import {LuLogOut} from "react-icons/lu"
import {getCookie} from "cookies-next"
import axios from "axios"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Profile = () => {
	const token = getCookie('accessToken');
	const [errors, setErrors] = useState([])
	const [form, setForm] = useState({
		fullName: '',
		telephone: '',
		email: '',
	})
	useEffect(() => {
		axios.get('https://be-flywise-stagging-jcbxz3zpbq-as.a.run.app/v1/api/auth/whoami', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(res => {
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
		e.preventDefault() //untuk menghindari refresh laman
		try {
			const response = await axios.put("https://be-flywise-stagging-jcbxz3zpbq-as.a.run.app/v1/api/auth/profile",
				{
					fullName: form.fullName,
					telephone: form.telephone,
					email: form.email,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				},
			)
			if(response.status == 200) {
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
		} catch(error) {
			if(error.response.status == 400) {
				setErrors(error.response.data.errors)
			}
			if(error.response.status == 500) {
				toast.error(response.data.message, {
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
			<div className="py-5 font-bold text-xl w-1/2 flex justify-center">
				Akun
			</div>
			<div className={`${styles.mainRow} gap-3`}>
				<div>
					<button className="flex gap-5 md:justify-end items-center bg-third-purple p-3 md:ml-auto rounded-xl text-white hover:bg-main-purple md:pr-100 duration-75">
						{" "}
						<LuArrowLeft /> Beranda
					</button>
				</div>
			</div>
			<div className="flex justify-center pt-3">
				<div className="w-7/12 border-t-2 border-slate-200"></div>
			</div>

			<div className="flex flex-rows justify-center gap-20 pt-10">
				<ul className="flex flex-col">
					<li className="flex items-center gap-3 cursor-pointer hover:scale-105">
						<div className="text-main-purple text-lg">
							<HiOutlinePencil />
						</div>
						Ubah Profil
					</li>
					<div className="border-b w-60 pt-2 border-gray-300"></div>
					<li className="flex items-center pt-4 gap-3 cursor-pointer hover:scale-105">
						<div className="text-main-purple text-lg">
							<LuLogOut />
						</div>
						Keluar
					</li>
					<div className="border-b w-60 pt-2 border-gray-300 shadow-md"></div>
				</ul>
				<div className="flex flex-col border-2 rounded-lg py-10 px-7 mb-5">
					<div className="py-1 font-bold text-lg">
						Ubah Data Profil
					</div>
					<form onSubmit={handleSubmit}>
						<div className="pt-3 flex flex-col w-96">
							<div className="rounded-t-lg bg-third-purple py-2 pl-4 font-medium text-white mb-3">Data Diri</div>
							<div className="pl-4 pt-2 pb-1 text-second-purple text-sm font-bold">Nama Lengkap</div>
							<input
								onChange={handleChange}
								className="ml-4 pl-4 border border-gray-300 rounded-md py-2 focus:border-main-purple outline-none"
								type="text"
								id="fullname"
								value={form.fullName}
								name="fullName"
							/>
							{errors &&
								errors.map((err, index) =>
									err.field == "fullName" && <p key={index} className="text-red-500">{err.message}</p>
								)}
							<div className="pl-4 pt-2 pb-1 text-second-purple text-sm font-bold">Nomor Telepon</div>
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
								errors.map((err, index) =>
									err.field == "telephone" && <p key={index} className="text-red-500">{err.message}</p>
								)}
							<div className="pl-4 pt-2 pb-1 text-second-purple text-sm font-bold">Email</div>
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
								errors.map((err, index) =>
									err.field == "email" && <p key={index} className="text-red-500">{err.message}</p>
								)}
							<div className="flex self-center pt-7"><button className="bg-second-purple hover:bg-main-purple px-8 py-1.5 rounded-lg text-white">Simpan</button></div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Profile
