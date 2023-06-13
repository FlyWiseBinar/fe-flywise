import React from "react"
import AccordionDetail from "./AccordionDetail"

const ImportAccordion = () => {
  return (
    <div className="container w-1/2 mx-auto mt-5">
    <AccordionDetail
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
    />
    <AccordionDetail
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
    />
  </div>
  )
}

export default ImportAccordion
