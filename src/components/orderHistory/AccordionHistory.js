import React from "react"
import {useState} from "react"
import {styles} from "@/styles/styles"
import {
	LuSend,
	LuChevronDown,
	LuChevronUp,
	LuChevronRight,
} from "react-icons/lu"
import {MdLocationOn} from "react-icons/md"
import axios from "axios"
import {baseUrl} from "@/configs/baseUrl.js"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {PropagateLoader} from "react-spinners"
import getToken from "@/utils/getToken"
import Router from 'next/router'


export default function AccordionHistory({item}) {
	const token = getToken()
	const [isOpen, setIsOpen] = useState(false)
	const [isLoadingClickButtonBatal, setIsLoadingClickButtonBatal] = useState(false)

	function formatDate(dateString) {
		const options = {year: "numeric", month: "long", day: "numeric"}
		const date = new Date(dateString)
		return date.toLocaleDateString("id-ID", options)
	}

	function formatTime(timeString) {
		const timeParts = timeString.split(":")
		const hours = timeParts[0]
		const minutes = timeParts[1]
		return `${hours}:${minutes}`
	}

	function formatNumber(number) {
		const formatter = new Intl.NumberFormat("id-ID")
		return formatter.format(number)
	}

	function duration(second) {
		const hour = Math.floor(second / 3600)
		const remainingSecond = second % 3600
		const minute = Math.floor(remainingSecond / 60)
		second = remainingSecond % 60

		return hour + "h " + minute + "m "
	}

	const toggleAccordion = () => {
		setIsOpen(!isOpen)
	}

	const handleClickButtonBatal = async () => {
		setIsLoadingClickButtonBatal(true)
		const paymentCode = item.order.payment[0].paymentCode
		try {
			const response = await axios.put(`${baseUrl}/v1/api/order/cancel-payment`, {
				paymentCode: paymentCode
			}, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			if(response.status == 201) {
				toast.success("order has been cancelled successfuly", {
					position: "bottom-center",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				})
				setIsLoadingClickButtonBatal(false)
				setTimeout(() => {
					Router.reload(window.location.pathname)
				}, 1000)
			}
		} catch(error) {
			console.log(error)
			setIsLoadingClickButtonBatal(false)
			if(error.response.status == 400) {
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
			<div className=" mx-auto lg:w-3/5 w-full px-2 md:px-0 mt-5">
				<div
					className={`flex flex-col justify-center items-center w-full md:${styles.mainMaxWidth} border-2 rounded-xl border-gray-400 hover:border-main-purple mb-2`}
				>
					<button
						className="flex items-center justify-between w-full p-4 text-lg font-medium text-left bg-white cursor-pointer rounded-xl b"
						onClick={toggleAccordion}
					>
						{
							item?.order.payment[0].status == 'Unpaid' &&
							<span className="flex items-center text-white bg-red-500 lg:text-base text-sm lg:px-6 px-3 lg:py-2 py-1 rounded-full">
								Unpaid
							</span>
						}
						{
							item?.order.payment[0].status == 'Cancelled' &&
							<span className="flex items-center text-white bg-gray-400 lg:text-base text-sm lg:px-6 px-3 lg:py-2 py-1 rounded-full">
								Cancelled
							</span>
						}
						{
							item?.order.payment[0].status == 'Issued' &&
							<span className="flex items-center text-white bg-main-green lg:text-base text-sm lg:px-6 px-3 lg:py-2 py-1 rounded-full">
								Issued
							</span>
						}
						<span className="text-gray-500">
							{isOpen ? (
								<span className="flex border border-main-purple rounded-full text-main-purple">
									<LuChevronUp />
								</span>
							) : (
								<span className="flex border border-main-purple rounded-full text-main-purple">
									<LuChevronDown />
								</span>
							)}
						</span>
					</button>
					<div className="flex items-center mx-auto justify-center gap-4 md:p-4 text-lg bg-white cursor-pointer rounded-xl ">
						<div className="flex self-start items-center text-gray-400 md:text-4xl">
							<MdLocationOn />
						</div>
						<div>
							<p className="font-bold md:text-base text-sm">
								{item.schedule.originAirport.city}
							</p>
							<p className="md:text-base text-sm">
								{formatDate(item.schedule.departureDate)}
							</p>
							<p className="md:text-base text-sm">
								{formatTime(item.schedule.departureTime)}
							</p>
						</div>
						<span className="flex -space-x-2 text-center md:font-normal font-bold md:text-sm text-[12px] text-gray-400">
							<div className="md:w-80 w-14 border-b-2 border-gray-200 md:mb-1.5 mb-[5px] ">
								{duration(item.schedule.durationInSecond)}
							</div>
							<div className="self-end text-gray-200">
								<LuChevronRight className="" />
							</div>
						</span>
						<div className="flex self-start items-center text-gray-400 md:text-4xl">
							<MdLocationOn />
						</div>
						<div className="">
							<p className="font-bold md:text-base text-sm">
								{item.schedule.destinationAirport.city}
							</p>
							<p className="md:text-base text-sm">
								{formatDate(item.schedule.arrivedDate)}
							</p>
							<p className="md:text-base text-sm">
								{formatTime(item.schedule.arrivedTime)}
							</p>
						</div>
					</div>
					<div className="lg:mt-0 mt-3 w-11/12 border-t border-gray-400"></div>
					<div className=" flex flex-row mx-auto items-center lg:gap-4 p-4 bg-white cursor-pointer rounded-xl">
						<div>
							<p className="font-bold md:text-base text-sm">Booking Code:</p>
							<p className="md:text-base text-sm">{item.order.orderCode}</p>
						</div>
						<div className="md:px-44 md:mx-0 mx-7">
							<p className="font-bold md:text-base text-sm">Class:</p>
							<p className="md:text-base text-sm">{item.schedule.class.name}</p>
						</div>
						<div>
							<p className="font-bold text-main-purple md:text-base text-sm">
								IDR {formatNumber(item.order.totalPrice)}
							</p>
						</div>
					</div>
					{isOpen && (
						<div className=" p-4 border-t-2 w-11/12 border-slate-300">
							<div className="font-bold md:text-xl text-lg">
								<p>Detail Pesanan</p>
							</div>
							<span className="flex gap-1 md:text-xl text-base">
								<p>Booking Code:</p>{" "}
								<p className="font-bold text-main-purple mb-3">
									{item.order.orderCode}
								</p>
							</span>
							<div className="flex justify-between font-bold">
								<p className="text-lg">
									{formatTime(item.schedule.departureTime)}
								</p>
								<p className="text-third-purple">Keberangkatan</p>
							</div>
							<p>{formatDate(item.schedule.arrivedDate)}</p>
							<p className="flex font-semibold">
								{item.schedule.originAirport.name}
							</p>
							<div className="flex justify-center pt-3">
								<div className="w-11/12 border-t-2 border-slate-200"></div>
							</div>
							<div className="px-9">
								<p className="flex font-bold">
									{item.schedule.plane.airline.airlineName} -{" "}
									{item.schedule.class.name}
								</p>
								<p className="font-bold">
									{item.schedule.plane.airline.airlineCode}
								</p>
								<div className="flex pt-4 gap-2">
									<div className="self-start pt-1">
										<LuSend />
									</div>
									<div className="flex flex-col">
										{item.order.passengers.map((passenger, index) => (
											<>
												<p className="font-bold" key={index}>
													Informasi
												</p>
												<p className="text-second-purple">
													Penumpang {index + 1}: {passenger.name}{" "}
												</p>
												<p>ID: {passenger.id} </p>
											</>
										))}
									</div>
								</div>
							</div>
							<div className="flex justify-center pt-3">
								<div className="w-11/12 border-t-2 border-slate-200"></div>
							</div>
							<div className="flex justify-between font-bold">
								<p className="text-lg">
									{formatTime(item.schedule.arrivedTime)}
								</p>
								<p className="text-third-purple">Kedatangan</p>
							</div>
							<p>{formatDate(item.schedule.arrivedDate)}</p>
							<p className="flex font-semibold mb-5">
								{item.schedule.destinationAirport.name}
							</p>
							<div className="flex justify-center pt-3">
								<div className="w-11/12 border-t-2 border-slate-200"></div>
							</div>
							<div className="flex font-bold">
								<p className="text-lg">Rincian Harga</p>
							</div>
							<div className="flex justify-between">
								<p>2 Adults</p>
								<p>IDR {formatNumber(item.schedule.adultPrice)}</p>
							</div>
							<div className="flex justify-between">
								<p>1 Baby</p>
								<p>IDR {formatNumber(item.schedule.babyPrice)}</p>
							</div>
							<div className="flex justify-between">
								<p>Tax</p>
								<p>IDR {formatNumber(item.schedule.taxPrice)}</p>
							</div>
							<div className="flex justify-center pt-3">
								<div className="w-11/12 border-t border-slate-200"></div>
							</div>
							<div className="flex justify-between text-lg font-bold">
								<p>Total</p>
								<p className="text-main-purple">
									IDR {formatNumber(item.order.totalPrice)}
								</p>
							</div>
							<div className="flex md:justify-end justify-center mt-5 md:gap-6 gap-3">
								{
									item?.order.payment[0].status == 'Issued' &&
									<button className=" px-16 py-3 rounded-2xl bg-main-purple hover:bg-second-purple text-white">
										Cetak Tiket
									</button>
								}
								{
									item?.order.payment[0].status == 'Unpaid' &&
									<>
										<button className=" md:px-16 px-7 py-3 rounded-2xl bg-main-green hover:bg-lime-600 text-white">
											Lanjut Bayar
										</button>
										{
											isLoadingClickButtonBatal ?
												<div className="flex justify-center">
													<PropagateLoader color="#d6b136" speedMultiplier={4} />
												</div>
												:
												<button onClick={handleClickButtonBatal} className=" md:px-16 px-7 py-3 rounded-2xl bg-orange-500 hover:bg-orange-400 text-white">
													Batal
												</button>
										}
									</>
								}
								{
									item?.order.payment[0].status == 'Cancelled' &&
									<button className="disabled:cursor-not-allowed px-11 cursor-no-drop py-3 rounded-2xl bg-gray-400 text-white">
										Pembayaran Batal
									</button>
								}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
