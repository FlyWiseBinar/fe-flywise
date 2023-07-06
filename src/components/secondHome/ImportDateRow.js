import React, { useEffect, useState } from "react"
import { styles } from "@/styles/styles"

const ImportDateRow = ({ startDate, endDate, setIsFilter }) => {


  const [dateRange, setDateRange] = useState([])

  const getDayFunc = (date) => {
    return new Date(date).toLocaleDateString("id-ID", { weekday: "long" })
  }

  const getRange = (startData, endData) => {
    const start = new Date(startData)
    const getDay = start.toLocaleDateString("id-ID", { weekday: "long" })
    const getDate = start.getDate()
    const getMonth = start.getMonth()
    const getYear = start.getFullYear()

    // console.log('get Day', getDay);

    if (endData) {
      // console.log('masuk end');
      const start = new Date(startData)
      const end = new Date(endData)
      const range = end.getTime() - start.getTime()
      const rangeDay = Math.floor(range / (1000 * 60 * 60 * 24))
      let temp = []
      for (let index = 0; index <= rangeDay; index++) {
        temp.push(
          {
            date: `${getDate + index}/${getMonth + 1}/${getYear}`,
            search: `${getYear}-0${getMonth + 1}-0${getDate + index}`,
            day: getDayFunc(`${getYear}-${getMonth + 1}-${getDate + index}`),
          }
        )
        // console.log('data add', temp)
      }
      setDateRange(temp)
    } else {
      setDateRange([{ date: `${getDate}-${getMonth + 1}-${getYear}`, day: getDay, search: `${getYear}-0${getMonth + 1}-0${getDate}` }])
    }
  }

  useEffect(() => {
    getRange(startDate, endDate)
  }, [])

  const hanClick = (e) => {
    setIsFilter(e)
    // console.log("e", e)
  }

  return (
    <>
      <div className={`${styles.mainRow} flex gap-3 text-xs lg:text-base md:text-base xstext-xs:text-sm`}>
        {
			dateRange &&
          dateRange?.map((item, i) => (
            <div className="flex flex-row items-center justify-center gap-4 h-[80px]" key={i}>
					{console.log("daterange",item)}
              <button onClick={() => hanClick(item?.search)} className={"flex flex-col items-center hover:bg-orange-300  active:bg-orange-500 focus:bg-orange-500 py-2 hover:rounded-xl focus:rounded-xl focus:text-white text-black hover:text-white duration-75 px-5"}>
                <div className="font-bold ">{item?.day !== "Invalid Date" ?? ""}</div>
                <div className="">{item.date!="NaN-NaN-NaN" ?? ""}</div>
              </button>
              {
                i === dateRange?.length - 1 ? (
                  <>
                  </>
                )
                  :
                  (
                    <>
                      <div className="h-[60px] w-[1px] bg-slate-500"></div>
                    </>
                  )
              }
            </div>
          ))
        }
      </div>
      <div className="flex justify-center pt-3">
        <div className="w-7/12 border-t-2 border-slate-200"></div>
      </div>
    </>
  )
}

export default ImportDateRow
