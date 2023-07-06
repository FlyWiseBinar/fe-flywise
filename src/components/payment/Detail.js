/* eslint-disable */
import api from "@/configs/api"
import { handlerIDR } from "@/utils/handlerIDR"
import axios from "axios"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import Swal from "sweetalert2"

const Detail = ({
  countseat,
  dataSchedule,
  dataSeat,
  datapassenger,
  token,
  isPayment,
}) => {
  const router = useRouter()
  const handlerDate = (date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handlePay = () => {
    Swal.fire({
      title: "Pemesanan Tiket",
      text: "Apakah anda yakin melanjutkan ke pembayaran tiket?",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: `Tidak`,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#dc2626",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(api.apiCheckout, datapassenger, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            toast.success("Tiket Berhasil Di Pesan!", {
              position: "bottom-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })
            // console.log(res.data.data.payment?.paymentCode);
            router.push({
              pathname: "/payment/method",
              query: {
                paymentCode: res.data.data.payment?.paymentCode,
                idschedule: dataSchedule?.id,
                adult: dataSeat?.adult,
                child: dataSeat?.child,
                baby: dataSeat?.baby,
                countseat: countseat,
              },
            })
          })
          .catch((err) => {
            console.log(err)
            toast.error("Tiket Gagal Di Pesan!", {
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
      }
    })

    console.log("data order", datapassenger)
  }

  return (
    <div className=" flex flex-col bg-white rounded-xl justify-center items-center content-start p-5 lg:mt-0 md:mt-0 mt-10">
      <div className="w-[200px] lg:w-[400px] md:w-[400px] sm:w-[400px]">
        <div className="flex flex-row ">
          <h2 className="font-bold text-xl">Detail Penerbangan</h2>
        </div>
        <div className="flex flex-row justify-between mt-2 items-center">
          <p className="font-bold ">{dataSchedule?.departureTime}</p>
          <p className="font-medium text-purple-500 text-xs">Keberangkatan</p>
        </div>
        <p className="font-light text-sm">
          {handlerDate(dataSchedule?.departureDate)}
        </p>
        <p className="font-medium text-sm">
          {dataSchedule?.originAirport?.name} - Terminal 1A Domestik
        </p>

        <div className="flex flex-row items-center gap-3 border-t-2 border-b-2 my-3">
          <div className="h-full items-center flex">
            <img
              src={`${dataSchedule?.plane?.airline?.logo}`}
              alt="Brand"
              width={20}
              height={20}
              className="items-center"
            />
          </div>
          <div className=" my-3 flex flex-col gap-3">
            <div>
              <p className="font-bold text-sm">
                {dataSchedule?.plane?.airline?.airlineName} -{" "}
                {dataSchedule?.class?.name}
              </p>
              <p className="font-bold text-sm">
                {dataSchedule?.plane?.airline?.airlineCode}-
                {dataSchedule?.plane?.id}
              </p>
            </div>
            <div>
              <p className="font-bold text-sm">Informasi :</p>
              <p className="text-sm">
                Baggage {dataSchedule?.plane?.baggageMaxCapacity} kg
              </p>
              <p className="text-sm">
                Cabin Baggage {dataSchedule?.plane?.cabinMaxCapacity} kg
              </p>
              <p className="text-sm">In Flight Entertainment</p>
            </div>
          </div>
        </div>

        <div className="border-b-2">
          <div className="flex flex-row justify-between items-center">
            <p className="font-bold text-sm">{dataSchedule?.arrivedTime}</p>
            <p className="font-medium text-purple-500 text-xs">Kedatangan</p>
          </div>
          <p className="text-sm">{handlerDate(dataSchedule?.arrivedDate)}</p>
          <p className="text-sm font-medium mb-3">
            {dataSchedule?.destinationAirport?.name}
          </p>
        </div>

        <p className="font-bold text-sm mt-3">Rincian Harga</p>
        <div className="flex flex-col gap-1">
          {dataSeat?.adult > 0 && (
            <>
              <div className="flex flex-row justify-between">
                <p className="text-sm">{dataSeat?.adult} Adults</p>
                <p className="text-sm">
                  {handlerIDR(dataSchedule?.adultPrice)}
                </p>
              </div>
            </>
          )}

          {dataSeat?.child > 0 && (
            <>
              <div className="flex flex-row justify-between">
                <p className="text-sm">{dataSeat?.child} Childs</p>
                <p className="text-sm">{handlerIDR(dataSchedule?.kidsPrice)}</p>
              </div>
            </>
          )}

          {dataSeat?.baby > 0 && (
            <>
              <div className="flex flex-row justify-between">
                <p className="text-sm">{dataSeat?.baby} Babies</p>
                <p className="text-sm">{handlerIDR(dataSchedule?.babyPrice)}</p>
              </div>
            </>
          )}

          <div className="flex flex-row justify-between border-b-2">
            <p className="text-sm">Tax</p>
            <p className="text-sm mb-3">{handlerIDR(dataSchedule?.taxPrice)}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold my-3">Total</p>
          <p className="font-bold text-lg text-purple-900 my-3">
            {handlerIDR(
              dataSeat?.adult * dataSchedule?.adultPrice +
                dataSeat?.child * dataSchedule?.kidsPrice +
                dataSeat?.baby * dataSchedule?.babyPrice +
                dataSchedule?.taxPrice
            )}
          </p>
        </div>

        {!isPayment && (
          <>
            <div className="justify-center bg-red mt-5 w-full">
              <button
                onClick={() => handlePay()}
                className="bg-red-900 text-white text-sm w-full  p-3 rounded-lg hover:bg-red-700"
              >
                Lanjut Bayar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Detail
