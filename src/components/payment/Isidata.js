import React, { useState } from "react"
import { styles } from "@/styles/styles"
import CardPemesan from "./CardPemesan"
import CardPenumpang from "./CardPenumpang.js"
import Detail from "./Detail"
import PaymentCountdown from "./PaymentCountdown"
import { FormProvider, useFieldArray, useForm } from "react-hook-form"
import { toast } from "react-toastify"
// import Simpan from "./Simpan"

const Isidata = ({ countseat, dataSchedule, dataSeat, token }) => {
  // console.log('data schedule', dataSeat);
  // console.log("data seat", dataSeat)


  const [datapassenger, setDatapassenger] = useState()

  const passenger = []
  {
    if (dataSeat?.adult) {
      for (let index = 0; index < dataSeat?.adult; index++) {
        passenger.push({
          name: "",
          birthdate: "",
          nationality: "",
          ktp: "",
          passport: "",
          issuingCountry: "",
          expiredAt: "",
          ageType: "adult"
        })
      }
    }
    if (dataSeat?.child) {
      for (let index = 0; index < dataSeat?.child; index++) {
        passenger.push({
          name: "",
          birthdate: "",
          nationality: "",
          ktp: "",
          passport: "",
          issuingCountry: "",
          expiredAt: "",
          ageType: "child"
        })
      }
    }
    if (dataSeat?.baby) {
      for (let index = 0; index < dataSeat?.baby; index++) {
        passenger.push({
          name: "",
          birthdate: "",
          nationality: "",
          ktp: "",
          passport: "",
          issuingCountry: "",
          expiredAt: "",
          ageType: "baby"
        })
      }
    }
  }

  const defaultValues = {
    schedule: [
      { id: dataSchedule.id }
    ],
    passenger: passenger
  }

  // console.log('pass', passenger)

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({ defaultValues, mode: "onChange" })

  const {
    fields,
  } = useFieldArray({
    control,
    rules: { required: true },
    name: "passenger"
  })

  const onSubmit = (data) => {
    if (data) {
      toast.success("Data Berhasil di Simpan!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
      setDatapassenger(data)
    }
  }

  // console.log('fields', fields);




  return (
    <>
      <FormProvider
        register={register}
        control={control}
        setValue={setValue}
        formState={errors}
        handleSubmit={handleSubmit}
      >
        <div className={`${styles.mainCol}`}>
          <PaymentCountdown />
          <div
            className={`${styles.deadline} justify-center lg:items-start w-full md:items-center p-5 flex flex-col lg:flex-row md:flex-col`}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-10 px-5">

              <CardPemesan />

              {fields && fields.map((item, index) => (
                <CardPenumpang key={item.id} person={item.ageType} index={index} />
              ))}

              {/* <Simpan /> */}
              <button type="submit" className="bg-purple-900 text-white text-sm w-full p-3 rounded-lg hover:bg-purple-700 mb-5">
                Simpan
              </button>
            </form>
            <Detail countseat={countseat} dataSchedule={dataSchedule} dataSeat={dataSeat} datapassenger={datapassenger} token={token} />
          </div>
        </div>
      </FormProvider>
    </>
  )
}

export default Isidata
