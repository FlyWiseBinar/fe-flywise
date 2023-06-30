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

  // console.log('data ', data);

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
                          <ImportAccordion data={item} />
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
                      {/* <p className="p-4 bg-slate-700 text-white rounded-xl">Total Pages : {Math.ceil(data?.length / dataPerPage)}</p> */}
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
        <div className="w-full h-[50vh] flex items-center justify-center gap-4">
          <Image src="../empty_history.svg" width={150} height={150} alt="empty" />
          <p className="text-main-purple pt-3 text-sm">Oops Jadwal Penerbangan pada {handlerDate(chooseDate)} Tidak Ditemukan!</p>
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
