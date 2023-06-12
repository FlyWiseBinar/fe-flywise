import React from "react";

const Otp = () => {
  return (
    <div className="fixed z-50 top-4 bg-white w-full">
      <div className="container flex z-50 mx-28">
        <img src="/logo.png" alt="logo" />
      </div>

      <div className="h-screen bg-slate-50 py-20 px-3">
        <div className="container mx-auto">
          <div className="max-w-sm mx-auto md:max-w-lg">
            <div className="w-full">
              <div className="bg-white h-64 py-3 rounded text-center">
                <h1 className="text-2xl mx-14 text-left font-medium">
                  Masukkan OTP
                </h1>
                <div className="flex flex-col mt-4">
                  <span>Ketik 6 digit kode yang dikirimkan ke</span>
                  <span className="font-bold">j*****@gmail.com</span>
                </div>

                <div
                  id="otp"
                  className="flex flex-row justify-center text-center px-2 mt-5"
                >
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="first"
                    maxlength="1"
                  />
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="second"
                    maxlength="1"
                  />
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="third"
                    maxlength="1"
                  />
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="fourth"
                    maxlength="1"
                  />
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="fifth"
                    maxlength="1"
                  />
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="sixth"
                    maxlength="1"
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
    </div>
  );
};

export default Otp;
