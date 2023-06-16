import React, {useState} from "react"
import axios from "axios"
import {useRouter} from "next/router"
import {useSearchParams} from "next/navigation"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Head from "next/head"

const Otp = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const email = searchParams?.get("email")
	const initialOtp = {
		first: "",
		second: "",
		third: "",
		fourth: "",
		fifth: "",
		sixth: "",
	}
	const [otp, setOtp] = useState(initialOtp)

	const handleChange = (e) => {
		setOtp({
			...otp,
			[e.target.id]: e.target.value
		})
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.post("https://be-flywise-stagging-jcbxz3zpbq-as.a.run.app/v1/api/auth/reset-password/verify-otp", {
				email: email,
				otp: otp.first + otp.second + otp.third + otp.fourth + otp.fifth + otp.sixth
			})
			if (response.status == 200) {
				setTimeout(() => {
					router.push(`/forgotpassword?email=${email}`)
				}, 3000)
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
	const handleResendOtp = async () => {
		try {
			const response = await axios.post("https://be-flywise-stagging-jcbxz3zpbq-as.a.run.app/v1/api/auth/reset-password/resend-otp", {
				email
			})
			if (response.status == 201) {
				toast.success(`${response.data.message}, check your email`, {
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
			console.log(error)
		}
	}

	return (
		<div className="fixed z-50 top-4 bg-white w-full">
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
			<div className="container flex z-50 mx-28">
			<Head>
			<title>Forgot Password | FlyWise</title>
			<link rel="icon" href="./logo.svg" />
		  </Head>
				<img src="/logo.png" alt="logo" />
			</div>
			<form onSubmit={handleSubmit}>
				<div className="h-screen bg-slate-50 py-20 px-3">
					<div className="container mx-auto">
						<div className="max-w-sm mx-auto md:max-w-lg">
							<div className="w-full">
								<div className="bg-white h-64 py-3 rounded text-center">
									<h1 className="text-2xl mx-14 text-left font-medium">
										Reset Password
									</h1>
									<div className="flex flex-col mt-4">
										<span>Ketik 6 digit kode yang dikirimkan ke</span>
										<span className="font-bold">{email ?? "******@yourdomain"}</span>
									</div>
									<div
										id="otp"
										className="flex flex-row justify-center text-center px-2 mt-5"
									>
										<input
											className="m-2 border h-10 w-10 text-center form-control rounded"
											type="text"
											id="first"
											maxLength="1"
											value={otp.first}
											onChange={handleChange}
										/>
										<input
											className="m-2 border h-10 w-10 text-center form-control rounded"
											type="text"
											id="second"
											maxLength="1"
											value={otp.second}
											onChange={handleChange}
										/>
										<input
											className="m-2 border h-10 w-10 text-center form-control rounded"
											type="text"
											id="third"
											maxLength="1"
											value={otp.third}
											onChange={handleChange}
										/>
										<input
											className="m-2 border h-10 w-10 text-center form-control rounded"
											type="text"
											id="fourth"
											maxLength="1"
											value={otp.fourth}
											onChange={handleChange}
										/>
										<input
											className="m-2 border h-10 w-10 text-center form-control rounded"
											type="text"
											id="fifth"
											maxLength="1"
											value={otp.fifth}
											onChange={handleChange}
										/>
										<input
											className="m-2 border h-10 w-10 text-center form-control rounded"
											type="text"
											id="sixth"
											maxLength="1"
											value={otp.sixth}
											onChange={handleChange}
										/>
									</div>

									<div className="flex justify-center text-center mt-5">
										<div onClick={handleResendOtp} className="flex items-center text-black hover:text-violet-600 cursor-pointer">
											<span className="font-medium">
												Kirim ulang OTP
											</span>
											<i className="bx bx-caret-right ml-1"></i>
										</div>
									</div>
								</div>

								<div className="items-center mx-4 sm:px-32 sm:pt-9">
									<button
										type="submit"
										className="flex w-full sm:w-64 justify-center rounded-2xl bg-black px-6 sm:px-24 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Simpan
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Otp
