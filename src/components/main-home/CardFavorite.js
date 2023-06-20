import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const CardFavorite = ({ item }) => {
    return (

        <div className="w-[250px] h-[300px] flex flex-col box-border border-[2px] border-opacity-60 border-solid border-slate-300 shadow-2xl justify-start items-center gap-2 p-3 rounded-lg ">
            <div className="relative w-full">
                <img
                    className="w-full z-0 rounded-lg"
                    src="https://www.tripsavvy.com/thmb/8ZvQjzLoXGk6jt1Fr3oKNYjKvkg=/6016x4016/filters:no_upscale():max_bytes(150000):strip_icc()/bangkok-grand-palace-5aadb03e8e1b6e0037023644.jpg"
                    alt="Bangkok Grand Palace"
                />
                <p className="bg-orange-500 rounded-l-xl text-white z-10 right-0 top-0 p-2 text-sm font-semibold text-end absolute">Limited</p>
            </div>

            <div className="flex flex-col gap-1 justify-start items-start">
                <div className="flex flex-row gap-2 items-center justify-start">
                    <p>{item?.destination}</p>
                    <FaArrowRight />
                    <p>{item?.arrive}</p>
                </div>
                <p className="font-bold text-purple-400">{item?.airline}</p>
                <p className="text-base">{item?.date}</p>

                <div className="flex gap-3 items-center justify-center">
                    <p className='truncate'>Mulai Dari</p>
                    <p className="font-bold text-orange-500">{item?.price}</p>
                </div>
            </div>


        </div>

    )
}

export default CardFavorite