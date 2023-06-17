import React, {useEffect, useState} from "react"
import {styles} from "@/styles/styles"
import {BiLogIn, BiLogOut} from "react-icons/bi"
import {AiOutlineBars} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import Link from "next/link"
import {getCookie, deleteCookie} from "cookies-next"
import {useRouter} from "next/router";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Navbar = () => {
	const router = useRouter()
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isLogin, setIsLogin] = useState(false)

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	useEffect(() => {
		const token = getCookie('accessToken')
		if(token) setIsLogin(true)
	}, [])

	const handleClickLogout = () => {
		deleteCookie('accessToken')
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
			router.push('/login')
		}, 1500)
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
			<div className={`${styles.mainRow} shadow-lg`}>
				<div
					className={` ${styles.mainRow} bg-white z-50 !justify-between px-12`}
				>
					<div className="w-full flex-col justify-start p-3">
						<p className="text-2xl font-bold text-main-purple">FlyWise</p>
						<p className="text-lg text-main-purple">Your Traveling Partner</p>
					</div>

					<div className="w-full flex justify-end items-center">
						<div className="md:hidden">
							<button className="focus:outline-none" onClick={toggleSidebar}>
								<svg
									className="w-6 h-6 text-main-purple"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
						<div className="hidden md:flex gap-2 items-center">
							{
								isLogin ?
									<>
										<div>
											<Link
												href="orderHistory"
												className="flex items-center justify-center bg-main-orange py-3 px-4 rounded-xl text-white hover:scale-110 duration-300"
											>
												<AiOutlineBars />
											</Link>
										</div>
										<div>
											<Link
												href="/profile"
												className="flex items-center justify-center bg-main-orange py-3 px-4 rounded-xl text-white hover:scale-110 duration-300"
											>
												<CgProfile />
											</Link>
										</div>
										<div className="ms-10">
											<div
												className="cursor-pointer flex items-center justify-center bg-main-orange py-3 px-4 rounded-xl text-white hover:scale-110 duration-300"
												onClick={handleClickLogout}
											>
												<BiLogOut />
												<p>Keluar</p>
											</div>
										</div>
									</>
									:
									<div>
										<Link
											href="/login"
											className="flex items-center justify-center bg-main-orange py-3 px-4 rounded-xl text-white hover:scale-110 duration-300"
										>
											<BiLogIn />
											<p>Masuk</p>
										</Link>
									</div>
							}
						</div>
					</div>
				</div>
				<div
					className={`md:hidden bg-white z-50 fixed top-0 right-0 w-64 h-screen overflow-y-auto ease-in-out transition-all duration-300 transform ${isSidebarOpen ? "translate-x-0 shadow-lg border" : "translate-x-full"
						}`}
				>
					<div className="flex justify-end p-4 ">
						<button className="focus:outline-none" onClick={toggleSidebar}>
							<svg
								className="w-6 h-6 text-main-purple"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="px-4 pb-8">
						<ul className="space-y-4">
							{
								isLogin ?
									<>
										<li className="flex justify-center">
											<Link
												href="orderHistory"
												className="flex w-1/2 bg-main-orange py-3 px-4 rounded-xl text-white hover:scale-110 duration-300"
											>
												<AiOutlineBars className="mx-auto py-auto"/>
												<p>History</p>
											</Link>
										</li>
										<li className="flex justify-center">
											<Link
												href="/profile"
												className="flex w-1/2 bg-main-orange py-3 px-4 rounded-xl text-white hover:scale-110 duration-300"
											>
												<CgProfile />
												<p>Profile</p>
											</Link>
										</li>
										<br />
										<hr /><br /><br />
										<li>
											<div
												className="cursor-pointer flex items-center justify-center bg-main-orange py-3 px-4 rounded-xl text-white hover:scale-110 duration-300"
												onClick={handleClickLogout}
											>
												<BiLogOut />
												<p>Keluar</p>
											</div>
										</li>
									</>
									:
									<li>
										<div>
											<Link
												href="/login"
												className="flex items-center gap-2 text-main-purple"
											>
												<BiLogIn />
												<p>Masuk</p>
											</Link>
										</div>
									</li>
							}
						</ul>
					</div>
				</div>
			</div>
		</>

	)
}

export default Navbar
