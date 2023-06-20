import {styles} from "@/styles/styles"
import {LuArrowLeft, LuSearch, LuFilter, LuX} from "react-icons/lu"
import {AiOutlineSearch} from "react-icons/ai"
import {useState} from "react"
import Datepicker from "react-tailwindcss-datepicker"
import Head from "next/head"

import React from "react"
import Link from "next/link"


const Button = () => {
	const [isOpenModal, setIsOpenModal] = useState(false)

	const openDatePicker = () => {
		document.getElementById('datepicker').focus()
	}
	
	const handleClickModal = () => {
		setIsOpenModal(!isOpenModal)
	}

	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	})

	return (
		<>
			<div className={`${styles.mainRow} gap-3`}>
				<div>
					<Link href="/" className="flex gap-5 md:justify-end items-center bg-third-purple p-3 md:ml-auto rounded-xl text-white hover:bg-main-purple md:pr-100 duration-75">
						{" "}
						<LuArrowLeft /> Beranda
					</Link>
				</div>
				<div>
					<button className="flex gap-2 md:justify-end items-center border border-main-purple py-1 rounded-full duration-75 md:px-5 rela" onClick={openDatePicker}>
						{" "}
						<LuFilter />
						Filter
					</button>
					<Datepicker
						inputId="datepicker"
						inputClassName={'absolute bg-white focus:outline-none opacity-0 pointer-events-none'}
						primaryColor={"violet"}
						showFooter={true}
						useRange={false}
						value={value}
						placeholder={" "}
						toggleClassName={"absolute opacity-0 pointer-events-none "}					
						onChange={(e)=>setValue(e.target.value)}
						configs={{
							footer: {
								cancel: "Batal",
								apply: "Simpan"
							}
						}}
						popoverDirection="down"
					/>
				</div>
				<div
					className="text-main-purple hover:text-third-purple text-4xl cursor-pointer"
					onClick={handleClickModal}
				>
					<AiOutlineSearch />
				</div>
				{isOpenModal && (
					<div className="fixed inset-0 bg-opacity-70 bg-black flex items-center justify-center">
						<div className="absolute bg-white rounded-lg shadow-2xl w-96 h-72">
							<div className="flex gap-3 items-center p-4 ">
								<input
									type="text"
									placeholder="  Masukkan Nomor Penerbangan"
									className="py-1 px-3 border-2 w-full rounded-lg border-gray-300"
								/>{" "}
								<div
									className="text-2xl hover:text-gray-400 cursor-pointer"
									onClick={handleClickModal}
								>
									<LuX />
								</div>
							</div>
							<hr className="bg-black" />
						</div>
					</div>
				)}
			</div>
			<div className="flex justify-center pt-3">
				<div className="w-7/12 border-t-2 border-slate-200"></div>
			</div>
		</>
	)
}

export default Button
