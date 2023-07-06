import React from "react"
import { Fragment, useState } from "react"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react"
import axios from "axios"
import api from "@/configs/api"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import Swal from "sweetalert2"

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform mr-3 `}
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

const PaymentMethod = ({ code, token }) => {
  const [open, setOpen] = useState(0)
  const [type, setType] = useState()
  const [errorMsg, setErrorMsg] = useState()
  const [cardNumber, setCardNumber] = useState("")

  const router = useRouter()

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  const handleType = (e) => {
    setErrorMsg("")
    if (e === "ewallet") {
      setType(1)
    } else if (e === "va") {
      setType(2)
    } else {
      setType(3)
    }
  }

  // console.log(type);

  const handleCardNumberChange = (e) => {
    if (e.target && e.target.value) {
      let formattedNumber = e.target.value.replace(/\s/g, "") // Menghapus spasi dari input
      formattedNumber = formattedNumber.replace(/(\d{4})/g, "$1 ") // Menambahkan spasi setiap 4 angka
      handleType("cc")
      setCardNumber(formattedNumber)
    }
  }

  const handleCardNumberKeyDown = (e) => {
    if (e.key === "Backspace" && cardNumber.length > 0) {
      setCardNumber(cardNumber.slice(0, -1))
    }
  }

  const [expiryDate, setExpiryDate] = useState("")

  const handleExpiryDateChange = (e) => {
    let formattedDate = e.target.value.replace(/[^0-9]/g, "") // Menghapus karakter selain angka
    let month = formattedDate.slice(0, 2) // Mengambil 2 karakter pertama sebagai bulan
    let year = formattedDate.slice(2, 4) // Mengambil 2 karakter berikutnya sebagai tahun

    if (month.length > 0) {
      formattedDate = month

      if (month.length === 2 && year.length > 0) {
        formattedDate += "/" + year
      }
    }

    setExpiryDate(formattedDate)
  }

  const handlePay = () => {
    Swal.fire({
      title: "Konfirmasi Pembayaran",
      text: "Bayar pesananmu sekarang?",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#dc2626",
    }).then((result) => {
      if (result.isConfirmed) {
        if (type) {
          const data = {
            paymentCode: code,
            paymentTypeId: type,
          }

          axios
            .post(api.apiPaymentCreate, data, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then(() => {
              Swal.fire(
                {
                  title: "Pesanan Berhasil",
                  text: "Pesananmu berhasil dipesan, periksa emailmu dan lakukan pembayaran!",
                },
                "",
                "success"
              )
              setTimeout(() => {
                router.push("/payment/success")
              }, 2000)
            })
            .catch((err) => {
              console.log(err)
              toast.error("Tiket Gagal Di Bayar!", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              })
            })
        } else {
          setErrorMsg("Mohon Isi Metode Pembayaran!")
        }
      }
    })
  }

  return (
    <div className="w-full">
      <div className="flex flex-col bg-white justify-center gap-5 p-5">
        <p className="font-bold text-xl mb-5">Isi Data Pembayaran</p>

        <Fragment>
          {/* E wallet */}
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`transition-colors ${
                open === 1
                  ? "bg-purple-900 hover:!bg-purple-800 rounded-lg mb-2 "
                  : "bg-gray-900 hover:!bg-gray-800 rounded-lg mb-2 "
              }`}
            >
              <p className="text-white ml-5">E-Wallet</p>
            </AccordionHeader>

            <AccordionBody>
              <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <img
                  className="lg:w-[50px] md:w-[50px] w-[40px] mt-2"
                  src="https://fintech.id/storage/files/shares/logo/logofi2/gopay-1.jpg"
                  alt="Gopay Logo"
                />
                <label
                  htmlFor="bordered-radio-1"
                  className="w-full py-4 ml-2 text-xl font-medium text-black"
                >
                  Gopay
                </label>
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-6 h-6 mr-3 text-blue-600 bg-gray-100 border-gray-300 "
                  onChange={() => handleType("ewallet")}
                />
              </div>
            </AccordionBody>
          </Accordion>

          {/* VA */}
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`transition-colors ${
                open === 2
                  ? "bg-purple-900 hover:!bg-purple-800 rounded-lg mb-2 "
                  : "bg-gray-900 hover:!bg-gray-800 rounded-lg mb-2 "
              }`}
            >
              <p className="text-white ml-5">Virtual Account</p>
            </AccordionHeader>

            <AccordionBody>
              <div className="mb-5 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <img
                  className="lg:w-[70px] md:w-[70px] w-[60px] mt-2"
                  src="https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-BNI-1024x427.jpg"
                  alt="BNI Logo"
                />
                <label
                  htmlFor="bordered-radio-4"
                  className="w-full py-4 ml-2 text-xl font-medium text-black"
                >
                  BNI
                </label>
                <input
                  id="bordered-radio-4"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-6 h-6 mr-3 text-blue-600 bg-gray-100 border-gray-300 "
                  onChange={() => handleType("va")}
                />
              </div>

              <div className="my-5 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <img
                  className="lg:w-[50px] md:w-[50px] w-[40px] my-2"
                  src="https://i0.wp.com/febi.uinsaid.ac.id/wp-content/uploads/2020/11/Logo-BRI-Bank-Rakyat-Indonesia-PNG-Terbaru.png?ssl=1"
                  alt="BRI Logo"
                />
                <label
                  htmlFor="bordered-radio-2"
                  className="w-full py-4 ml-7 text-xl font-medium text-black"
                >
                  BRI
                </label>
                <input
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-6 h-6 mr-3 text-blue-600 bg-gray-100 border-gray-300 "
                  onChange={() => handleType("va")}
                />
              </div>

              <div className="my-5 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <img
                  className="lg:w-[70px] md:w-[70px] w-[60px] mt-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/1200px-Bank_Mandiri_logo_2016.svg.png"
                  alt="MANDIRI Logo"
                />
                <label
                  htmlFor="bordered-radio-3"
                  className="w-full py-4 ml-2 text-xl font-medium text-black"
                >
                  MANDIRI
                </label>
                <input
                  id="bordered-radio-3"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-6 h-6 mr-3 text-blue-600 bg-gray-100 border-gray-300 "
                  onChange={() => handleType("va")}
                />
              </div>
            </AccordionBody>
          </Accordion>

          {/* Credit card */}
          <Accordion
            className="justify-center"
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`transition-colors ${
                open === 3
                  ? "bg-purple-900 hover:!bg-purple-800 rounded-lg mb-2 "
                  : "bg-gray-900 hover:!bg-gray-800 rounded-lg mb-2 "
              }`}
            >
              <p className="text-white ml-5">Credit Card</p>
            </AccordionHeader>

            <AccordionBody>
              <div className="flex justify-center items-center">
                <form className="flex flex-wrap gap-3 w-3/4 p-5">
                  <div className="w-full flex justify-center">
                    <img
                      className="lg:w-[200px] md:w-[150px] w-[100px] mt-2"
                      src="https://freepngimg.com/save/26016-major-credit-card-logo-clipart/8552x1190"
                      alt="Credit Card Logo"
                    />
                  </div>

                  <label className="relative w-full flex flex-col">
                    <span className="font-bold mb-3">Card number</span>
                    <input
                      className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                      type="text"
                      name="card_number"
                      placeholder="0000 0000 0000"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      onKeyDown={handleCardNumberKeyDown}
                      maxLength={14}
                    />
                  </label>

                  <label className="relative w-full flex flex-col">
                    <span className="font-bold mb-3">Card holder name</span>
                    <input
                      className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                      type="text"
                      name="card_number"
                      placeholder="John Doe"
                    />
                  </label>

                  <label className="relative flex-1 flex flex-col">
                    <span className="font-bold mb-3">Expire date</span>
                    <input
                      className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                      type="text"
                      name="expire_date"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                    />
                  </label>

                  <label className="relative flex-1 flex flex-col">
                    <span className="font-bold flex items-center gap-3 mb-3">
                      CVC/CVV
                      <span className="relative group">
                        <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                          {" "}
                        </span>
                      </span>
                    </span>
                    <input
                      className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                      type="text"
                      name="card_cvc"
                      maxLength={3}
                      placeholder="&bull;&bull;&bull;"
                    />
                  </label>
                </form>
              </div>
            </AccordionBody>
          </Accordion>
        </Fragment>
        <div className="w-full flex flex-col gap-4 items-center justify-center">
          {errorMsg?.length > 0 && (
            <p className="text-red-500 text-xs">{errorMsg}</p>
          )}
          <button
            onClick={() => handlePay()}
            className="flex w-full bg-purple-900 text-white text-sm lg:text-xl md:text-base justify-center p-3 rounded-lg hover:bg-purple-700 "
          >
            Bayar
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod
