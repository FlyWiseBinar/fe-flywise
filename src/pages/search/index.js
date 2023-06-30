import React, { useState } from "react"
import SecondHome from "@/views/secondHome/secondHome"
import Head from "next/head"
import { useRouter } from "next/router"
import axios from "axios"
import api from "@/configs/api"
import Button from "@/components/secondHome/Button"
import ImportDateRow from "@/components/secondHome/ImportDateRow"

const Index = ({ schedule }) => {
  const router = useRouter()
  const [isFilter, setIsFilter] = useState(router?.query?.departureDate)
  const [data] = useState(schedule)

  const {
    CountAdult,
    CountBaby,
    CountChild,
    departureDate,
    from,
    returnDate,
    to
  } = router.query

  const dataSearch = {
    CountAdult,
    CountBaby,
    CountChild,
    departureDate,
    from,
    to,
    returnDate,
  }

  const filterDate = (data) => {
    const filterResult = data?.filter(item => item?.arrivedDate == isFilter || item?.departureDate == isFilter)
    return filterResult
  }

  console.log(filterDate(data));
  console.log('data', data);
  console.log('filter', isFilter);

  return (
    <div>
      <Head>
        <title>Search | Flywise</title>
        <link rel="icon" href="../logo.svg" />
      </Head>
      <Button />
      <div className=" relative lg:static md:relative overflow-x-scroll lg:overflow-hidden md:overflow-x-scroll ">
        <ImportDateRow startDate={departureDate} endDate={returnDate} setIsFilter={setIsFilter} />
      </div>
      <SecondHome data={filterDate(data)} search={dataSearch} chooseDate={isFilter} />
    </div>
  )
}


export const getServerSideProps = async (context) => {
  const {
    departureDate,
    from,
    returnDate,
    to } = context.query

  const response = await axios.get(`${api.apiSearchTicket}?departureDate=${departureDate}${returnDate ? `&arrivedDate=${returnDate}` : ""}${from ? `&originAirport=${from}` : ""}${to ? `&destinationAirport=${to}` : ""}`)

  const data = response.data.data

  return {
    props: {
      schedule: data
    }
  }
}

export default Index
