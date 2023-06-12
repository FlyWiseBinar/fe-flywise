import Image from "next/image";
import React from "react";

const Register = () => {
  return (
    <div className="h-screen flex">
      <div className="flex w-1/2 bg-orange-400 i justify-around items-center">
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

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-1 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Daftar
          </h2>
        </div>
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-900"
              >
                Nama
              </label>
              <div className="mt-1">
                <input
                  id="nama"
                  name="nama"
                  type="nama"
                  autoComplete="nama"
                  required
                  className="block w-full rounded-2xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-2xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="notelp"
                  className="block text-sm font-medium  text-gray-900"
                >
                  Nomor Telepon
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="notelp"
                  name="notelp"
                  type="notelp"
                  autoComplete="notelp"
                  required
                  className="block w-full rounded-2xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="buatpass"
                  className="block text-sm font-medium  text-gray-900"
                >
                  Buat Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="buatpass"
                  name="buatpass"
                  type="buatpass"
                  autoComplete="buatpass"
                  required
                  className="block w-full rounded-2xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-2xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Daftar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Sudah punya akun?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Masuk di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;