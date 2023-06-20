import React from "react"
import { styles } from "@/styles/styles"
import { Fragment, useState } from "react"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react"
import Link from "next/link"
import PaymentSuccess from "./PaymentSucces"

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

const PaymentMethod = () => {
  const [open, setOpen] = useState(0)

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  const [cardNumber, setCardNumber] = useState("")

  const handleCardNumberChange = (e) => {
    if (e.target && e.target.value) {
      let formattedNumber = e.target.value.replace(/\s/g, "") // Menghapus spasi dari input
      formattedNumber = formattedNumber.replace(/(\d{4})/g, "$1 ") // Menambahkan spasi setiap 4 angka

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

  return (
    <div>
      <div className="flex flex-col bg-white justify-center gap-5 p-5">
        <p className="font-bold text-xl mb-5">Isi Data Pembayaran</p>

        <Fragment>
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
              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <img
                  className="lg:w-[50px] md:w-[50px] w-[40px] mt-2"
                  src="https://fintech.id/storage/files/shares/logo/logofi2/gopay-1.jpg"
                  alt="Gopay Logo"
                />
                <label
                  for="bordered-radio-1"
                  class="w-full py-4 ml-2 text-xl font-medium text-black"
                >
                  Gopay
                </label>
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  class="w-6 h-6 mr-3 text-blue-600 bg-gray-100 border-gray-300 "
                />
              </div>
            </AccordionBody>
          </Accordion>

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
              <div class="mb-5 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <img
                  className="lg:w-[70px] md:w-[70px] w-[60px] mt-2"
                  src="https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-BNI-1024x427.jpg"
                  alt="BNI Logo"
                />
                <label
                  for="bordered-radio-4"
                  class="w-full py-4 ml-2 text-xl font-medium text-black"
                >
                  BNI
                </label>
                <input
                  id="bordered-radio-4"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  class="w-6 h-6 mr-3 text-blue-600 bg-gray-100 border-gray-300 "
                />
              </div>

              <div class="my-5 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <img
                  className="lg:w-[50px] md:w-[50px] w-[40px] my-2"
                  src="https://i0.wp.com/febi.uinsaid.ac.id/wp-content/uploads/2020/11/Logo-BRI-Bank-Rakyat-Indonesia-PNG-Terbaru.png?ssl=1"
                  alt="BRI Logo"
                />
                <label
                  for="bordered-radio-2"
                  class="w-full py-4 ml-7 text-xl font-medium text-black"
                >
                  BRI
                </label>
                <input
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  class="w-6 h-6 mr-3 text-blue-600 bg-gray-100 border-gray-300 "
                />
              </div>

              <div class="my-5 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <img
                  className="lg:w-[70px] md:w-[70px] w-[60px] mt-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/1200px-Bank_Mandiri_logo_2016.svg.png"
                  alt="MANDIRI Logo"
                />
                <label
                  for="bordered-radio-3"
                  class="w-full py-4 ml-2 text-xl font-medium text-black"
                >
                  MANDIRI
                </label>
                <input
                  id="bordered-radio-3"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  class="w-6 h-6 mr-3 text-blue-600 bg-gray-100 border-gray-300 "
                />
              </div>
            </AccordionBody>
          </Accordion>

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
              <div class="flex justify-center items-center">
                <form class="flex flex-wrap gap-3 w-3/4 p-5">
                  <div class="w-full flex justify-center">
                    <img
                      class="lg:w-[200px] md:w-[150px] w-[100px] mt-2"
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

                  <label class="relative w-full flex flex-col">
                    <span class="font-bold mb-3">Card holder name</span>
                    <input
                      class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
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

                  <label class="relative flex-1 flex flex-col">
                    <span class="font-bold flex items-center gap-3 mb-3">
                      CVC/CVV
                      <span class="relative group">
                        <span class="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                          {" "}
                        </span>
                      </span>
                    </span>
                    <input
                      class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
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
        <div>
          <Link href={"/payment/success"}>
            <button className="flex w-full bg-purple-900 text-white text-sm lg:text-xl md:text-base justify-center p-3 rounded-lg hover:bg-purple-700 p-3">
              Bayar
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod
