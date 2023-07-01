import React, { useEffect, useState } from "react"
import { styles } from "@/styles/styles"
import CardPemesan from "./CardPemesan"
import CardPenumpang from "./CardPenumpang.js"
import Detail from "./Detail"
import PaymentCountdown from "./PaymentCountdown"
import { FormProvider, useFieldArray, useForm } from "react-hook-form"
// import Simpan from "./Simpan"

const Isidata = ({ countseat, dataSchedule, dataSeat }) => {
  console.log('data schedule', dataSeat);
  console.log("data seat", dataSeat)

  const passanger = []
  {
    if (dataSeat?.adult) {
      for (let index = 0; index < dataSeat?.adult; index++) {
        passanger.push({
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
        passanger.push({
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
        passanger.push({
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
    passanger: passanger
  }

  // console.log('pass', passanger)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const {
    fields
  } = useFieldArray({
    control,
    name: 'passanger'
  })

  const onSubmit = (data) => {
    console.log('submit', data)
  }

  console.log('fields', fields);




  return (
    <>
      <FormProvider
        register={register}
        control={control}
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
            <Detail dataSchedule={dataSchedule} dataSeat={dataSeat} />
          </div>
        </div>
      </FormProvider>
    </>
  )
}

export default Isidata
