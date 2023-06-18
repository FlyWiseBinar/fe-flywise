import React from 'react'
import { styles } from '@/styles/styles'
import { BiSearchAlt2 } from 'react-icons/bi'

const Favorit = () => {
  return (
    <div className={`${styles.mainCol} `}>
      <div
        className={`${styles.mainMaxWidth}  w-full p-5 flex items-center justify-center`}
      >
        <div className='flex flex-col bg-white items-center justify-center lg:w-[1000px] md:w-[700px] w-[350px] gap-5 p-5 '>
          <h3 className='self-start font-bold text-xl'>
            Destinasi Favorit <span className='text-main-purple'>FlyWise!</span>
          </h3>
          <div className='self-start flex flex-wrap gap-3 md:flex-row md:gap-3'>
            <div className='flex items-center'>
              <button className='flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300'>
                <BiSearchAlt2 />
                <p>Semua</p>
              </button>
            </div>
            <div className='flex items-center'>
              <button className='flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300'>
                <BiSearchAlt2 />
                <p>Asia</p>
              </button>
            </div>
            <div className='flex items-center'>
              <button className='flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300'>
                <BiSearchAlt2 />
                <p>Amerika</p>
              </button>
            </div>
            <div className='flex items-center'>
              <button className='flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300'>
                <BiSearchAlt2 />
                <p>Australia</p>
              </button>
            </div>
            <div className='flex items-center'>
              <button className='flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300'>
                <BiSearchAlt2 />
                <p>Eropa</p>
              </button>
            </div>
            <div className=' flex items-center'>
              <button className='flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300'>
                <BiSearchAlt2 />
                <p>Afrika</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:w-[1000px] md:w-[700px] w-[350px] gap-5 p-5'>
        <div className='max-w-sm w-full rounded-lg overflow-hidden shadow-lg'>
          <img
            className='w-full'
            src='https://www.tripsavvy.com/thmb/8ZvQjzLoXGk6jt1Fr3oKNYjKvkg=/6016x4016/filters:no_upscale():max_bytes(150000):strip_icc()/bangkok-grand-palace-5aadb03e8e1b6e0037023644.jpg'
            alt='Bangkok Grand Palace'
          />
          <div className='px-6 py-4'>
            <div className='font-semibold text-xl mb-2'>
              Jakarta -{'>'} Bangkok
            </div>
            <p className='font-bold text-purple-800 text-base'>Airasia</p>
            <p className='text-black'>10-10-2023</p>
            <p className='text-black'>
              Mulai Dari <span style={{ color: 'red' }}>Rp. 950.000</span>
            </p>
          </div>
        </div>
        <div className='max-w-sm w-full rounded-lg overflow-hidden shadow-lg'>
          <img
            className='w-full'
            src='https://www.tripsavvy.com/thmb/8ZvQjzLoXGk6jt1Fr3oKNYjKvkg=/6016x4016/filters:no_upscale():max_bytes(150000):strip_icc()/bangkok-grand-palace-5aadb03e8e1b6e0037023644.jpg'
            alt='Bangkok Grand Palace'
          />
          <div className='px-6 py-4'>
            <div className='font-semibold text-xl mb-2'>
              Jakarta -{'>'} Bangkok
            </div>
            <p className='font-bold text-purple-800 text-base'>Airasia</p>
            <p className='text-black'>10-10-2023</p>
            <p className='text-black'>
              Mulai Dari <span style={{ color: 'red' }}>Rp. 950.000</span>
            </p>
          </div>
        </div>
        <div className='max-w-sm w-full rounded-lg overflow-hidden shadow-lg'>
          <img
            className='w-full'
            src='https://www.tripsavvy.com/thmb/8ZvQjzLoXGk6jt1Fr3oKNYjKvkg=/6016x4016/filters:no_upscale():max_bytes(150000):strip_icc()/bangkok-grand-palace-5aadb03e8e1b6e0037023644.jpg'
            alt='Bangkok Grand Palace'
          />
          <div className='px-6 py-4'>
            <div className='font-semibold text-xl mb-2'>
              Jakarta -{'>'} Bangkok
            </div>
            <p className='font-bold text-purple-800 text-base'>Airasia</p>
            <p className='text-black'>10-10-2023</p>
            <p className='text-black'>
              Mulai Dari <span style={{ color: 'red' }}>Rp. 950.000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favorit
