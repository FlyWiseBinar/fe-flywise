import React, {useState} from "react"
import axios from "axios"
import {useRouter} from "next/router"
import {useSearchParams} from "next/navigation"

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
	const [errors, setErrors] = useState("")

	const handleChange = (e) => {
		setOtp({
			...otp,
			[e.target.id]: e.target.value
		})
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.post("https://be-flywise-stagging-jcbxz3zpbq-as.a.run.app/v1/api/auth/verify-otp", {
				email: email,
				otp: otp.first + otp.second + otp.third + otp.fourth + otp.fifth + otp.sixth
			})
			if (response.status == 200) {
				router.push("/login")
			}
		} catch (error) {
			console.log(error)
			setErrors(error.response.data.message)
		}
	}
	
	console.log(errors)

	return (
		<div className="fixed z-50 top-4 bg-white w-full">
			<div className="container flex z-50 mx-28">
				<img src="/logo.png" alt="logo" />
			</div>
			<form onSubmit={handleSubmit}>
				<div className="h-screen bg-slate-50 py-20 px-3">
					<div className="container mx-auto">
						<div className="max-w-sm mx-auto md:max-w-lg">
							<div className="w-full">
								<div className="bg-white h-64 py-3 rounded text-center">
									<h1 className="text-2xl mx-14 text-left font-medium">
										Register
									</h1>
									<div className="flex flex-col mt-4">
										<span>Ketik 6 digit kode yang dikirimkan ke</span>
										<span className="font-bold">{email??'******@yourdomain'}</span>
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
										<a className="flex items-center text-black hover:text-violet-600 cursor-pointer">
											<span className="font-medium">
												Kirim ulang OTP dalam 60 detik
											</span>
											<i className="bx bx-caret-right ml-1"></i>
										</a>
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
