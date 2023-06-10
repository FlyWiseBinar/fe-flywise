import { styles } from "@/styles/styles"
import { LuArrowLeft } from "react-icons/lu"

import React from "react"

const Button = () => {
  return (
    <>
    <div className={`${styles.mainRow} gap-3`}>
      <div>
        <button className="flex gap-5 items-center justify-end bg-third-purple p-3 rounded-xl text-white hover:bg-main-purple pr-80 duration-75"> <LuArrowLeft/> JKT &gt; MLB - 2 Penumpang - Economy</button>
      </div>
      <div><button className="flex gap-5 items-center justify-end bg-main-green py-3 rounded-xl text-white hover:bg-lime-500 duration-75 px-12 font-bold"> Ubah Pencarian</button></div>
    </div>
    </>
  );
};

export default Button;
