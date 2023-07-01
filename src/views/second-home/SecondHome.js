import React, { useEffect, useState } from "react"
import FilterSort from "@/components/secondHome/FilterSort"
import ImportAccordion from "@/components/secondHome/ImportAccordion"
import { Pagination } from "flowbite-react"
import { ColorRing } from "react-loader-spinner"
import { handlerDate } from "@/utils/handlerDate"
import Image from "next/image"

const SecondHome = ({ data, search, chooseDate }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const onPageChange = (page) => setCurrentPage(page)
  const [dataPaginated, setDataPaginated] = useState([])
  const dataPerPage = 10
  const [loading, setLoading] = useState(false)


  const paginateData = (data) => {
    let temp = []
    let final = []
    for (let index = 1; index <= data?.length; index++) {
      temp.push(data[index - 1])
      if (index % dataPerPage === 0 || index === data?.length) {
        final.push(temp)
        temp = []
      }
      // console.log('temp', temp);
    }

    setDataPaginated(final)
  }


  useEffect(() => {
    setLoading(false)
    paginateData(data)
  }, [data])

  console.log("data ", search)

  // console.log('check paginate', Math.ceil(data?.length / dataPerPage));

  if (!loading) {
    if (data?.length > 0) {
      return (
        <>
          <div className="flex flex-col items-center">
            <div className=" flex-col w-full flex items-start max-w-[1000px] px-5 pt-5 ">
              <div>
                <p className="pt-5 font-bold text-xl items-start justify-start">Pilih Penerbangan</p>
              </div>
            </div>
          </div>
          <div className="mb-16 flex flex-col">



            <FilterSort setLoading={setLoading} search={search} paginateFunc={paginateData} />

            <div className="w-full">
              {
                data?.length > 0 && (
                  <>
                    {
                      Array.isArray(dataPaginated) && dataPaginated[0]?.map((item, index) => (
                        <div key={index}>
                          <ImportAccordion countSeat={search?.CountTotal} search={search} data={item} />
                        </div>
                      ))
                    }
                  </>
                )
              }
              {
                Math.ceil(data?.length / dataPerPage) > 1 && (
                  <>
                    <div className="w-full justify-center flex-col gap-4 items-center flex">
                      <Pagination
                        className=" text-black w-full items-center justify-center flex"
                        currentPage={currentPage}
                        onPageChange={page => { onPageChange(page) }}
                        totalPages={Math.ceil(data?.length / dataPerPage)}
                      />
                    </div>
                  </>
                )
              }
            </div>
          </div>
        </>
      )
    } else {
      return (
        <div className="w-full h-[50vh] flex-col flex items-center justify-center gap-4">
          <Image src="/assets/schedule-not-found.png" width={200} height={200} alt="not-found" />
          <div className="text-main-purple pt-3 flex flex-col w-full gap-3 items-center justify-center text-sm">
            <p className="font-semibold text-black">Maaf, pencarian Anda pada  {handlerDate(chooseDate)}  tidak ditemukan</p>
            <p className="font-semibold ">Coba cari perjalanan lainnya!</p>
          </div>
        </div>
      )
    }



  } else {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <ColorRing
          visible={true}
          height="200"
          width="200"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    )
  }
}

export default SecondHome
