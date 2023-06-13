import { styles } from "@/styles/styles"
import { LuPlaneTakeoff, LuPlaneLanding } from "react-icons/lu"
import { MdDateRange } from "react-icons/md"
import { BsRepeat } from "react-icons/bs"
import { CiUser } from "react-icons/ci"


const CardOrder = () => {
    return (
        <div className={`${styles.mainCol} `}>
            <div className={`${styles.mainMaxWidth}  w-full p-5 flex items-center justify-center`}>

                <div className="flex flex-col bg-white items-center justify-center lg:w-[750px] md:w-[700px] w-[350px] gap-5 rounded-xl shadow-xl p-5 border-solid border-[1px] border-slate-400">
                    <h3 className='self-start font-bold text-xl'>Pilih Jadwal Penerbangan spesial di <span className='text-main-purple'>FlyWise!</span></h3>

                    <div className="flex flex-row md:flex-col lg:flex-col  items-center justify-center gap-4">
                        <div className="flex flex-col  md:flex-row lg:flex-row justify-between gap-8 w-full items-start ">

                            <div className="flex flex-col gap-8">

                                <div className="flex flex-row gap-3">
                                    <div className='flex items-center text-slate-500 gap-2 justify-center'>
                                        <LuPlaneTakeoff />
                                        <p>From</p>
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <select name="takeoff" id="">
                                            <option value="JKT">Jakarta</option>
                                            <option value="JKT">Bali</option>
                                            <option value="JKT">Semarang</option>
                                        </select>
                                        <hr className='w-full' />
                                    </div>
                                </div>

                                <div className="flex flex-row gap-3">
                                    <div className='flex items-center text-slate-500 gap-2 justify-center'>
                                        <MdDateRange />
                                        <p>Date</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p>Departure</p>
                                        <select name="takeoff" id="">
                                            <option value="JKT">Jakarta</option>
                                            <option value="JKT">Bali</option>
                                            <option value="JKT">Semarang</option>
                                        </select>
                                        <hr className='w-full' />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p>Return</p>
                                        <select name="takeoff" id="">
                                            <option value="JKT">Jakarta</option>
                                            <option value="JKT">Bali</option>
                                            <option value="JKT">Semarang</option>
                                        </select>
                                        <hr className='w-full' />
                                    </div>
                                </div>

                            </div>

                            <div className="bg-black text-white rounded-xl">
                                <BsRepeat className='m-3 text-xl' />
                            </div>

                            <div className="flex flex-col gap-8 p3">

                                <div className="flex flex-row gap-3">
                                    <div className='flex items-center text-slate-500 gap-2 justify-center'>
                                        <LuPlaneLanding />
                                        <p>To</p>
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <select name="takeoff" id="">
                                            <option value="JKT">Jakarta</option>
                                            <option value="JKT">Bali</option>
                                            <option value="JKT">Semarang</option>
                                        </select>
                                        <hr className='w-full' />
                                    </div>
                                </div>

                                <div className="flex flex-row gap-3">
                                    <div className='flex items-center text-slate-500 gap-2 justify-center'>
                                        <CiUser />
                                        <p>To</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p>Passenger</p>
                                        <select name="takeoff" id="">
                                            <option value="JKT">1</option>
                                            <option value="JKT">2</option>
                                            <option value="JKT">3</option>
                                        </select>
                                        <hr className='w-full' />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p>Seat Class</p>
                                        <select name="takeoff" id="">
                                            <option value="JKT">Economy</option>
                                            <option value="JKT">Bussiness</option>
                                            <option value="JKT">First Class</option>
                                        </select>
                                        <hr className='w-full' />
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default CardOrder