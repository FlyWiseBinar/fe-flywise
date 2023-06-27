import React, { useEffect, useState } from "react"
import SecondHome from "@/views/secondHome/secondHome"
import Head from "next/head"
import { useRouter } from "next/router"
import axios from "axios"
import api from "@/configs/api"

const index = ({ }) => {
  const router = useRouter()
  // console.log('api', api.apiSearchTicket);
  const {
    CountAdult,
    CountBaby,
    CountChild,
    departureDate,
    from,
    returnDate,
    to } = router.query

  const [data, setData] = useState()


  useEffect(() => {
    axios.get(`${api.apiSearchTicket}?departureDate=${departureDate}${returnDate ? `&arrivedDate=${returnDate}` : ``}${from ? `&originAirport=${from}` : ``}${to ? `&destinationAirport=${to}` : ``}`)
      .then((result) => {
        console.log(result.data.data);
        setData(result.data.data)
      }).catch((err) => {
        console.log(err);
      });
  }, [departureDate])


  return (
    <div>
      <Head>
        <title>Search | Flywise</title>
        <link rel="icon" href="../logo.svg" />
      </Head>
      <SecondHome data={data} />
    </div>
  )
}

export default index
