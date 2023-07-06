import React, { useState } from "react"
import SecondHome from "@/views/second-home/SecondHome"
import Head from "next/head"
import { useRouter } from "next/router"
import axios from "axios"
import api from "@/configs/api"
import Button from "@/components/secondHome/Button"
import ImportDateRow from "@/components/secondHome/ImportDateRow"
import Navbar from "@/components/Navbar"

const Index = ({ schedule }) => {
  const router = useRouter()
  const [isFilter, setIsFilter] = useState(router?.query?.departureDate || null)
  const [data] = useState(schedule)

  const {
    CountAdult,
    CountBaby,
    CountChild,
    departureDate,
    from,
    returnDate,
    to,
    CountTotal,
    seatClassId,
  } = router.query

  const dataSearch = {
    CountAdult,
    CountBaby,
    CountChild,
    departureDate,
    from,
    to,
    returnDate,
    CountTotal,
    seatClassId,
  }

  const filterDate = (data) => {
    if (isFilter) {
      const filterResult = data?.filter(
        (item) => item?.departureDate == isFilter
      )
      return filterResult
    }
    return data
  }

  console.log("router query", router.query)

  return (
    <div>
      <Head>
        <title>Search | Flywise</title>
        <link rel="icon" href="../logo.svg" />
      </Head>
      <Navbar />
      <Button />
      <div className=" relative lg:static md:relative overflow-x-scroll lg:overflow-hidden md:overflow-x-scroll ">
        <ImportDateRow
          startDate={departureDate}
          endDate={returnDate}
          setIsFilter={setIsFilter}
        />
      </div>
      <SecondHome
        data={filterDate(data)}
        search={dataSearch}
        chooseDate={isFilter}
      />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  console.log("seatclass", context.query.seatClassId)
  const { departureDate, from, returnDate, to, seatClassId } = context.query

  try {
    const response = await axios.get(
      `${api.apiSearchTicket}?${returnDate ? `arrivedDate=${returnDate}` : ""}${
        from ? `originAirport=${from}` : ""
      }${to ? `&destinationAirport=${to}` : ""}${
        seatClassId ? `&seatClassId=${seatClassId}` : ""
      }${departureDate ? `&departureDate=${departureDate}` : ""}`
    )
    console.log("response", response.data.data)
    const data = response.data.data
    return {
      props: {
        schedule: data,
      },
    }
  } catch (error) {
    console.log(error)
  }
}

export default Index
