import React, {useEffect, useState} from "react"
import {styles} from "@/styles/styles"
import {LuArrowLeft} from "react-icons/lu"
import Navbar from "@/components/Navbar"
import {HiOutlinePencil} from "react-icons/hi"
import {LuLogOut} from "react-icons/lu"
import {getCookie} from "cookies-next"
import axios from "axios"

const Profile = () => {
	const [user, setUser] = useState({})
	const token = getCookie('accessToken');
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
			setUser(res.data.data)
			setForm({
				...form,
				email: res.data.data.email,
				fullName: res.data.data.fullName,
				telephone: res.data.data.email,
			})
		})
	}, [])

	const handleSubmit = () => {

	}

	return (
		<>
			<Navbar />
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
				<div className="flex flex-col">
					<div className="flex items-center gap-3">
						<div className="text-main-purple text-lg">
							<HiOutlinePencil />
						</div>
						Ubah Profil
					</div>
					<div className="border-b w-60 pt-2 border-gray-300"></div>
					<div className="flex items-center pt-4 gap-3">
						<div className="text-main-purple text-lg">
							<LuLogOut />
						</div>
						Keluar
					</div>
					<div className="border-b w-60 pt-2 border-gray-300 shadow-md"></div>
				</div>
				<div className="flex flex-col border-2 rounded-lg py-10 px-7">
					<div className="py-1 font-bold text-lg">
						Ubah Data Profil
					</div>
					<form onSubmit={handleSubmit}>
						<div className="pt-3 flex flex-col w-96">
							<div className="rounded-t-lg bg-third-purple py-2 pl-4 font-medium text-white mb-3">Data Diri</div>
							<div className="pl-4 pt-2 pb-1 text-second-purple text-sm font-bold">Nama Lengkap</div>
							<input
								className="ml-4 pl-4 border border-gray-300 rounded-md py-2 hover:border-main-purple outline-none"
								type="text"
								placeholder="John Doe"
								id="fullname"
								value={form.fullName}
							/>
							<div className="pl-4 pt-2 pb-1 text-second-purple text-sm font-bold">Nomor Telepon</div>
							<input
								className="ml-4 pl-4 border border-gray-300 rounded-md py-2 hover:border-main-purple outline-none"
								type="text"
								placeholder="+6213486777"
								id="telephone"
								value={form.telephone}
							/>
							<div className="pl-4 pt-2 pb-1 text-second-purple text-sm font-bold">Email</div>
							<input
								className="ml-4 pl-4 border border-gray-300 rounded-md py-2 hover:border-main-purple outline-none"
								type="text"
								placeholder="JohnDoe@gmail.com"
								id="email"
								value={form.email}
							/>
							<div className="flex self-center pt-7"><button className="bg-second-purple hover:bg-main-purple px-8 py-1.5 rounded-lg text-white">Simpan</button></div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Profile
