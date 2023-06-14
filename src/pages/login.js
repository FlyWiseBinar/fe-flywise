import Image from "next/image";
import React, {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import {setCookie} from "cookies-next";

const Login = () => {
	const router = useRouter()
	const [errors, setErrors] = useState([])
	const initialForm = {
		email: '',
		password: '',
	}
	const [form, setForm] = useState(initialForm)

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.post('https://be-flywise-stagging-jcbxz3zpbq-as.a.run.app/v1/api/auth/login', {
				email: form.email,
				password: form.password,
			})
			if(response.status == 200) {
				console.log("berhasil login")
				console.log(response.data)
				setCookie(
					'accessToken',
					response.data.accessToken,
					{expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10)}
				)
			}
		} catch(error) {
			setErrors(error.response.data.errors)
			console.log(error)
			console.log("gagal login")
		}
	}
	return (
		<div className="flex flex-col md:flex-row h-screen">
			<div className="flex w-full md:w-1/2 bg-orange-400 justify-around items-center">
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

			<div className="flex flex-1 flex-col justify-center px-6 py-12 md:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Masuk
					</h2>
				</div>
				<div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Email/No Telepon
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="text"
									autoComplete="email"
									className="block w-full rounded-2xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={form.email}
									onChange={handleChange}
								/>
								{
									errors && errors.map(err => (
										err.field == 'email' ? <p className="text-red-500">{err.message}</p> : ''
									))
								}
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>
								<div className="text-sm">
									<a
										href="/forgotpassword"
										className="font-semibold text-indigo-600 hover:text-indigo-500"
									>
										Lupa Kata Sandi
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									className="block w-full rounded-2xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={form.password}
									onChange={handleChange}
								/>
								{
									errors && errors.map(err => (
										err.field == 'password' ? <p className="text-red-500">{err.message}</p> : ''
									))
								}
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-2xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Masuk
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Belum punya akun?{" "}
						<a
							href="/register"
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						>
							Daftar di sini
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
