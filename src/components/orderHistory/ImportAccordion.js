import React from "react"
import AccordionHistory from "./AccordionHistory"

const ImportAccordion = () => {
  return (
    <div className=" mx-auto w-3/5 mt-5">
    <AccordionHistory
      hourAttendate="07:00"
      hourTo="09:00"
      Departure="JKT"
      ToLocation="SBY"
      airflight="Jet Air"
      classAirflight="Business"
      price= "4.000.000"
      duration="4h 0m"
      date="12 Desember 2023"
      airPortDeparture="Soekarno Hatta"
      codeAirFlight="JT-2023"
      airPortTo="Juanda"
      cityDeparture="Jakarta"
      cityDestination="Surabaya"
      codeBooking="Asw1998km"
      totalPrice="5.000.000"
      idPassenger="2222222"
      namePassenger="mama madolay"
    />
    <AccordionHistory
      hourAttendate="07:00"
      hourTo="09:00"
      Departure="JKT"
      ToLocation="SBY"
      airflight="Jet Air"
      classAirflight="Business"
      price= "4.000.000"
      duration="4h 0m"
      date="12 Desember 2023"
      airPortDeparture="Soekarno Hatta"
      codeAirFlight="JT-2023"
      airPortTo="Juanda"
      cityDeparture="Jakarta"
      cityDestination="Surabaya"
      totalPrice="5.000.0000"
      idPassenger="3333333"
      namePassenger="branjet"
    />
  </div>
  )
}

export default ImportAccordion
