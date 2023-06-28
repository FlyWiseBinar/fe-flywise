import Image from "next/image"
import {styles} from "@/styles/styles"
import Link from "next/link"
import React, {useState, useEffect, Fragment} from "react"
import getToken from "@/utils/getToken"
import api from "@/configs/api"
import {LuArrowLeft, LuFilter, LuX, LuRotateCw} from "react-icons/lu"
import {AiOutlineSearch} from "react-icons/ai"
import Datepicker from "react-tailwindcss-datepicker"
import {Dialog, Transition} from "@headlessui/react"
import AccordionHistory from "@/components/orderHistory/AccordionHistory"
import axios from "axios"
import Loading from "@/components/Loading"
import EmptyHistory from "@/components/orderHistory/EmptyHistory"

const MainOrderHistory = () => {
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [searchQuery, setSearchQuery] = useState("")
	const [valueDatePicker, setValueDatePicker] = useState("")
	const token = getToken()
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState(false)
	const [showAlertEmptySearch, setShowAlertEmptySearch] = useState(false)

	const handleInputChange = (e) => {
		setSearchQuery(e.target.value)
	}
	useEffect(() => {
		if(!searchQuery) {
			fetchData()
			setShowAlertEmptySearch(false)
		}
	}, [searchQuery])
	useEffect(() => {
		if(!valueDatePicker) {
			fetchData()
			setShowAlertEmptySearch(false)
		}
	}, [valueDatePicker])
	const handleFormSubmit = async (e) => {
		e.preventDefault()
		try {
			setLoading(true)
			const response = await axios.get(`${api.apiHistoryByOrderCode}?orderCode=${searchQuery}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			if(response.status == 200) {
				setData(response.data.orders)
				setLoading(false)
			}
		} catch(error) {
			setLoading(false)
			if(error.response.status == 400) {
				setShowAlertEmptySearch(true)
				setData(false)
			}
		}
	}
	const openDatePicker = () => {
		document.getElementById("datepicker").focus()
	}
	const handleClickModal = () => {
		setIsOpenModal(!isOpenModal)
	}
	const handleDateChange = (date) => {
		setValueDatePicker(date)
	}
	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		fetchDataByFilterDate(valueDatePicker)
	}, [valueDatePicker])

	const fetchData = async () => {
		setLoading(true)
		try {
			const response = await axios(
				api.apiHistory,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					}
				}
			)
			if(response.status == 200) {
				setData(response.data.orders)
				setLoading(false)
			}
		} catch(error) {
			setLoading(false)
		}
	}

	const fetchDataByFilterDate = async (value) => {
		if(value) {
			setLoading(true)
			try {
				const response = await axios(`${api.apiHistoryByFilterHistory}?startDate=${value.startDate}&endDate=${value.endDate}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				if(response.status == 200) {
					setLoading(false)
					setData(response.data.orders)
				}
			} catch(error) {
				setLoading(false)
				if(error.response.status == 400) {
					setShowAlertEmptySearch(true)
					setData(false)
				}
			}
		}
	}

	const handleClickRefresh = () => {
		setSearchQuery("")
		setValueDatePicker(false)
	}

	return (
		<div className="md:mb-16">
			<div className="md:w-1/2 md:ml-0 ml-3 flex md:justify-center">
				<div className={"py-10 font-bold text-xl"}>Riwayat Pemesanan</div>
			</div>
			<div className="flex flex-row justify-center items-center md:w-full w-full md:gap-3 gap-2">
				<Link
					href="/"
					className="flex gap-5 md:justify-end items-center bg-third-purple p-3 rounded-xl text-white hover:bg-main-purple lg:pr-100 md:pr-96 pr-24 duration-75"
				>
					{" "}
					<LuArrowLeft /> Beranda
				</Link>
				<div className="">
					<button
						className="flex gap-2 md:justify-end items-center border border-main-purple py-1 rounded-full duration-75 md:px-5 px-3"
						onClick={openDatePicker}
					>
						{" "}
						<LuFilter />
						Filter
					</button>
					<Datepicker
						inputId="datepicker"
						inputClassName={
							"absolute flex text-[0px] bg-white focus:outline-none opacity-0 pointer-events-none"
						}
						primaryColor={"violet"}
						showFooter={true}
						useRange={false}
						value={valueDatePicker}
						placeholder={" "}
						toggleClassName={"absolute opacity-0 pointer-events-none "}
						onChange={handleDateChange}
						configs={{
							footer: {
								cancel: "Batal",
								apply: "Simpan",
							},
						}}
						popoverDirection="down"
					/>
				</div>
				<div
					className="text-main-purple hover:text-third-purple md:text-4xl text-2xl cursor-pointer"
					onClick={handleClickModal}
				>
					<AiOutlineSearch />
				</div>
				<button onClick={handleClickRefresh} className="text-xl text-main-purple"><LuRotateCw /></button>
				<Transition appear show={isOpenModal} as={Fragment}>
					<Dialog as="div" className="relative z-10" onClose={handleClickModal}>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-black bg-opacity-25" />
						</Transition.Child>
						<div className="fixed inset-0 overflow-y-auto">
							<div className="flex min-h-full items-center justify-center p-4 text-center">
								<Transition.Child
									as={Fragment}
									enter="ease-out duration-300"
									enterFrom="opacity-0 scale-95"
									enterTo="opacity-100 scale-100"
									leave="ease-in duration-200"
									leaveFrom="opacity-100 scale-100"
									leaveTo="opacity-0 scale-95"
								>
									<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
										<Dialog.Title
											as="h3"
											className="items-center md:gap-28 mb-2  flex md:text-lg font-medium leading-6 text-gray-900"
										>
											Pencarian Riwayat Pesanan
											<div
												className="text-2xl md:ml-2 ml-14 hover:text-third-purple text-main-purple cursor-pointer flex justify-end"
												onClick={handleClickModal}
											>
												<LuX />
											</div>
										</Dialog.Title>
										<form onSubmit={handleFormSubmit} className="w-full flex gap-2">
											<input
												type="text"
												placeholder="  Masukkan Nomor Penerbangan"
												className="py-1 px-3 border-2 hover:border-main-purple outline-none w-full rounded-lg md:text-base text-sm border-gray-300"
												value={searchQuery}
												onChange={handleInputChange}
												required={true}
											/>{" "}
											<button type="submit" className="bg-main-purple hover:bg-second-purple text-white rounded-lg p-2 text-xl"><AiOutlineSearch /></button>
										</form>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</Dialog>
				</Transition>
			</div>
			<div className="flex justify-center mt-3">
				<div className="lg:w-7/12 w-11/12 border-t-2 border-slate-300"></div>
			</div>
			{
				showAlertEmptySearch ?
					showAlertEmptySearch &&
					<div>
						<div className={`${styles.mainCol} pt-10`}>
							<Image src="../empty.svg" width={250} height={250} alt="empty" />
							<p className="text-main-purple pt-3 text-sm">
								Oops Riwayat Pesanan Tidak Ditemukan!
							</p>
							<p className="text-sm">Silakan Cek Kembali Tiket Anda</p>
						</div>
					</div>
					:
					loading ?
						<Loading />
						:
						data ?
							data.map((item, index) => (
								<div key={index}>
									<AccordionHistory item={item} />
								</div>
							))
							:
							<EmptyHistory />
			}
		</div>
	)
}

export default MainOrderHistory
