import React, { useState } from 'react'
import { styles } from '@/styles/styles'
import { LuPlaneTakeoff, LuPlaneLanding, LuX } from 'react-icons/lu'
import { MdDateRange, MdOutlineAirlineSeatReclineNormal } from 'react-icons/md'
import { BsRepeat } from 'react-icons/bs'

const CardOrder = () => {
  const [isOpenFrom, setIsOpenFrom] = useState(false)
  const [isOpenTo, setIsOpenTo] = useState(false)

  const [from, setFrom] = useState()
  const [to, setTo] = useState()

  const onChangefrom = (e) => {
    setFrom(e.target.value)
    console.log('target', e.target.value)
  }

  const onChangeto = (e) => {
    setTo(e.target.value)
    console.log('target', e.target.value)
  }
  const openModalFrom = () => {
    setIsOpenFrom(true)
  }

  const openModalTo = () => {
    setIsOpenTo(true)
  }

  const closeModal = () => {
    setIsOpenTo(false)
    setIsOpenFrom(false)
  }

  return (
    <div className={`${styles.mainCol} `}>
      <div
        className={`${styles.mainMaxWidth}  w-full p-5 flex items-center justify-center`}
      >
        <div className='flex flex-col bg-white items-center justify-center lg:w-[750px] md:w-[700px] w-[350px] gap-5 rounded-xl shadow-xl p-5 border-solid border-[1px] border-slate-400'>
          <h3 className='self-start font-bold text-xl'>
            Pilih Jadwal Penerbangan spesial di{' '}
            <span className='text-main-purple'>FlyWise!</span>
          </h3>

          <div className='flex flex-row md:flex-col lg:flex-col  items-center justify-center gap-4'>
            <div className='flex flex-col  md:flex-row lg:flex-row justify-between gap-8 w-full items-start '>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-row gap-3'>
                  <div className='flex items-center text-slate-500 gap-2 justify-center'>
                    <LuPlaneTakeoff />
                    <p>From</p>
                  </div>
                  <div className='flex flex-col gap-2 w-full'>
                    <input
                      className=' hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent'
                      onClick={openModalFrom}
                      value={from}
                      placeholder='Jakarta (JKT)'
                    />
                    <hr className='w-full' />
                    {isOpenFrom && (
                      <div className='fixed z-20 inset-0 bg-opacity-70 bg-black flex items-center justify-center'>
                        <div className='absolute bg-white rounded-lg shadow-2xl w-96 h-72'>
                          <div className='flex gap-3 items-center p-4 '>
                            <input
                              type='text'
                              placeholder='  Masukkan Asal Penerbangan'
                              onChange={(e) => onChangefrom(e)}
                              className='py-1 px-3 border-2 w-full rounded-lg border-gray-300'
                            />{' '}
                            <div
                              className='text-2xl hover:text-gray-400'
                              onClick={closeModal}
                            >
                              <LuX />
                            </div>
                          </div>
                          <hr className='bg-black' />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className='flex flex-row gap-3'>
                  <div className='flex items-center text-slate-500 gap-2 justify-center'>
                    <MdDateRange />
                    <p>Date</p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p>Departure</p>
                    <input className=' hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent' />
                    <hr className='w-full' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p>Return</p>
                    <input className=' hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent' />
                    <hr className='w-full' />
                  </div>
                  <div>
                    <label className='relative inline-flex items-center cursor-pointer'>
                      <input
                        type='checkbox'
                        value=''
                        className='sr-only peer'
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className='flex w-full justify-center '>
                <button className='bg-black text-white rounded-xl flex items-center justify-center hover:scale-105 duration-100'>
                  <BsRepeat className='m-3 text-xl' />
                </button>
              </div>

              <div className='flex flex-col gap-8 p3'>
                <div className='flex flex-row gap-3'>
                  <div className='flex items-center text-slate-500 gap-2 justify-center'>
                    <LuPlaneLanding />
                    <p>To</p>
                  </div>
                  <div className='flex flex-col gap-2 w-full'>
                    <input
                      className=' hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent'
                      onClick={openModalTo}
                      value={to}
                      placeholder='Melbourne (MLB)'
                    />
                    <hr className='w-full' />
                    {isOpenTo && (
                      <div className='fixed z-20 inset-0 bg-opacity-70 bg-black flex items-center justify-center'>
                        <div className='absolute bg-white rounded-lg shadow-2xl w-96 h-72'>
                          <div className='flex gap-3 items-center p-4 '>
                            <input
                              type='text'
                              placeholder='Masukkan Tujuan Penerbangan'
                              onChange={(e) => onChangeto(e)}
                              className='py-1 px-3 border-2 w-full rounded-lg border-gray-300'
                            />{' '}
                            <div
                              className='text-2xl hover:text-gray-400'
                              onClick={closeModal}
                            >
                              <LuX />
                            </div>
                          </div>
                          <hr className='bg-black' />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className='flex flex-row gap-3'>
                  <div className='flex items-center text-slate-500 gap-2 justify-center'>
                    <MdOutlineAirlineSeatReclineNormal />
                    <p>To</p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p>Passenger</p>
                    <input
                      className=' hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent'
                      placeholder='1'
                    />
                    <hr className='w-full' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p>Seat Class</p>
                    <select name='takeoff' id=''>
                      <option value='JKT'>Economy</option>
                      <option value='JKT'>Premium Economy</option>
                      <option value='JKT'>Bussiness</option>
                      <option value='JKT'>First Class</option>
                    </select>
                    <hr className='w-full' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex w-full justify-center'>
            <button className='bg-purple-800 text-white flex rounded-xl items-center justify-center w-full py-3 hover:scale-105 duration-100'>
              <span className='text-lg'>Lihat Jadwal Penerbangan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardOrder
