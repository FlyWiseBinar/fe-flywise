import { styles } from "@/styles/styles";

import React from "react";

const DateRow = ({ day, date }) => {
  return (
    <>
      <div className={`flex flex-row justify-center items-center gap-1 mt-9 `}>
        <button className="grid grid-rows-2 items-center justify-end hover:bg-third-purple py-2 hover:rounded-xl text-black hover:text-white duration-75 px-5 border-r-2 ">
          <div className="font-bold ">{day}</div>
          <div className="">{date}</div>
        </button>
      </div>
    </>
  );
};

export default DateRow;
