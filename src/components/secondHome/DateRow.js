import React from "react"

const DateRow = ({ day, date }) => {
  return (
    <>
      <div className="">
        <div>
          <button className="flex flex-col items-center hover:bg-orange-300 active:bg-orange-500 focus:bg-orange-500 py-2 hover:rounded-xl focus:rounded-xl focus:text-white text-black hover:text-white duration-75 px-5 border-r-2 ">
            <div className="font-bold ">{day}</div>
            <div className="">{date}</div>
          </button>
        </div>
      </div>
    </>
  )
}

export default DateRow
