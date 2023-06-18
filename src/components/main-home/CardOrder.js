import React, { useState } from 'react'
import { styles } from '@/styles/styles'
import Datepicker from 'react-tailwindcss-datepicker'
import { LuPlaneTakeoff, LuPlaneLanding, LuX } from 'react-icons/lu'
import { MdDateRange, MdOutlineAirlineSeatReclineNormal } from 'react-icons/md'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'
import { BsRepeat } from 'react-icons/bs'
import { IoMdMan, IoMdWoman } from 'react-icons/io'
import { BiChild } from 'react-icons/bi'

const CardOrder = () => {
  const [departureDate, setDepartureDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)
  const [isReturnActive, setIsReturnActive] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const handleReturnToggle = () => {
    setIsReturnActive(!isReturnActive)
  }
  const [isOpenFrom, setIsOpenFrom] = useState(false)
  const [isOpenTo, setIsOpenTo] = useState(false)
  const [isOpenPass, setIsOpenPass] = useState(false)
  const [isOpenClass, setIsOpenClass] = useState(false)
  const [count, setCount] = useState(0)

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const increaseCount = () => {
    setCount(count + 1)
  }

  const [from, setFrom] = useState()
  const [to, setTo] = useState()

  const handleRepeatClick = () => {
    const temp = from
    setFrom(to)
    setTo(temp)
  }

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

  const openModalPass = () => {
    setIsOpenPass(true)
  }

  const openModalClass = () => {
    setIsOpenClass(true)
  }

  const closeModal = () => {
    setIsOpenTo(false)
    setIsOpenFrom(false)
    setIsOpenPass(false)
    setIsOpenClass(false)
  }

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }
  return (
    <div className={`${styles.mainCol} `}>
      <div
        className={`${styles.mainMaxWidth}  w-full p-5 flex items-center justify-center`}
      >
        <div className='flex flex-col bg-white items-center justify-center lg:w-[1000px] md:w-[700px] w-[350px] gap-5 rounded-xl shadow-xl p-5 border-solid border-[1px] border-slate-400'>
          <h3 className='self-start font-bold text-xl'>
            Pilih Jadwal Penerbangan spesial di{' '}
            <span className='text-main-purple'>FlyWise!</span>
          </h3>

          <div className='flex flex-row md:flex-col lg:flex-col items-center justify-between gap-4'>
            <div className='flex flex-col md:flex-row lg:flex-row justify-between gap-8 w-full items-start'>
              <div className='flex flex-col w-full gap-5'>
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
                        <div className='absolute bg-white rounded-lg shadow-2xl w-96 h-auto'>
                          <div className='flex gap-3 items-center p-4 '>
                            <div className='flex flex-col gap-2 w-full'>
                              <div className='relative'>
                                <input
                                  type='text'
                                  placeholder='Masukkan Asal Penerbangan'
                                  onChange={(e) => onChangefrom(e)}
                                  className='py-1 pl-10 pr-3 border-2 w-full rounded-lg border-gray-300'
                                />
                                <div className='absolute top-2 left-2'>
                                  <AiOutlineSearch className=' flex flex-auto text-xl' />
                                </div>
                              </div>
                            </div>
                            <div
                              className='text-2xl hover:text-gray-400'
                              onClick={closeModal}
                            >
                              <LuX />
                            </div>
                          </div>
                          <hr className='bg-black' />
                          <div className='flex justify-between p-4'>
                            <p>Pencarian terkini</p>
                            <button className='text-red-700'>Hapus</button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className='flex flex-row gap-3 py-3'>
                  <div className='flex items-center text-slate-500 gap-2 justify-center'>
                    <MdDateRange />
                    <p>Date</p>
                  </div>

                  <div className='flex-col md:flex-row lg:flex-row flex gap-3 justify-center items-center'>
                    <div className='flex flex-col gap-2'>
                      <p>Departure</p>
                      <Datepicker
                        asSingle={true}
                        value={departureDate}
                        primaryColor={'orange'}
                        selected={departureDate}
                        inputClassName={'bg-white text-black w-[130px]'}
                        onChange={(date) => setDepartureDate(date)}
                        placeholder='Departure'
                        className='hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent'
                      />

                      <hr className='w-full' />
                    </div>
                    <div className='flex flex-col gap-2 '>
                      <p>Return</p>
                      {isReturnActive ? (
                        <Datepicker
                          primaryColor={'orange'}
                          asSingle={true}
                          value={returnDate}
                          selected={returnDate}
                          onChange={(date) => setReturnDate(date)}
                          placeholder='Return'
                          inputClassName={'bg-white text-black w-[130px]'}
                          className='hover:bg-slate-50 focus:outline-none w-full bg-transparent bg-white text-black hover:bg-transparent'
                        />
                      ) : (
                        <input
                          className='hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent'
                          disabled
                          placeholder='Return'
                        />
                      )}
                      <hr className='w-full' />
                    </div>
                  </div>

                  <div>
                    <label className='relative inline-flex items-center cursor-pointer'>
                      <input
                        type='checkbox'
                        value=''
                        className='sr-only peer'
                        checked={isReturnActive}
                        onChange={handleReturnToggle}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className='flex w-full lg:w-0 md:w-0 justify-center items-center px-3'>
                <button
                  className='bg-black text-white rounded-xl flex items-center hover:scale-105 duration-100'
                  onClick={handleRepeatClick}
                >
                  <BsRepeat className='m-3 text-xl' />
                </button>
              </div>

              <div className='flex w-full flex-col gap-8 p3'>
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
                        <div className='absolute bg-white rounded-lg shadow-2xl w-96 h-auto'>
                          <div className='flex gap-3 items-center p-4 '>
                            <div className='flex flex-col gap-2 w-full'>
                              <div className='relative'>
                                <input
                                  type='text'
                                  placeholder='Masukkan Tujuan Penerbangan'
                                  onChange={(e) => onChangeto(e)}
                                  className='py-1 pl-10 pr-3 border-2 w-full rounded-lg border-gray-300'
                                />
                                <div className='absolute top-2 left-2'>
                                  <AiOutlineSearch className=' flex flex-auto text-xl' />
                                </div>
                              </div>
                            </div>
                            <div
                              className='text-2xl hover:text-gray-400'
                              onClick={closeModal}
                            >
                              <LuX />
                            </div>
                          </div>
                          <hr className='bg-black' />
                          <div className='flex justify-between p-4'>
                            <p>Pencarian terkini</p>
                            <button className='text-red-700'>Hapus</button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className='flex w-full flex-row gap-3'>
                  <div className='flex items-center text-slate-500 gap-2 justify-center'>
                    <MdOutlineAirlineSeatReclineNormal />
                    <p>To</p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p>Passengers</p>
                    <input
                      onClick={openModalPass}
                      className=' hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent'
                    />
                    <hr className='w-full' />
                    {isOpenPass && (
                      <div className='fixed z-20 inset-0 bg-opacity-70 bg-black flex items-center justify-center'>
                        <div className='absolute bg-white rounded-lg shadow-2xl w-auto h-auto'>
                          <div className='flex gap-3 items-center p-4 '>
                            <div className='flex flex-col gap-2 w-full'></div>
                            <div
                              className='text-2xl hover:text-gray-400'
                              onClick={closeModal}
                            >
                              <LuX />
                            </div>
                          </div>
                          <hr className='bg-black' />
                          <div className='flex flex-col p-4 gap-10'>
                            <div className='flex flex-row justify-between'>
                              <div className='flex'>
                                <IoMdMan className='text-3xl' />
                                <div className='flex flex-row justify-between items-center'>
                                  <div>
                                    <h2 className='font-bold'>Dewasa</h2>
                                    <p>(12 Tahun ke atas)</p>
                                  </div>
                                </div>
                              </div>
                              <div className='flex px-2 gap-3 items-center'>
                                <button
                                  className='text-purple-700 rounded-md flex items-center justify-center hover:scale-105 duration-100 border-2 border-purple-700 p-2'
                                  onClick={decreaseCount}
                                >
                                  <AiOutlineMinus className='text-xl' />
                                </button>
                                <div className='text-2xl font-semibold p-2'>
                                  {count}
                                </div>
                                <button
                                  className='text-purple-700 rounded-md flex items-center justify-center hover:scale-105 duration-100 border-2 border-purple-700 p-2'
                                  onClick={increaseCount}
                                >
                                  <AiOutlinePlus className='text-xl' />
                                </button>
                              </div>
                            </div>
                            <hr className='bg-black' />
                            <div className='flex flex-row justify-between '>
                              <div className='flex'>
                                <IoMdWoman className='text-3xl' />
                                <div className='flex flex-row justify-between items-center'>
                                  <div>
                                    <h2 className='font-bold'>Anak</h2>
                                    <p>(2 - 11 tahun)</p>
                                  </div>
                                </div>
                              </div>
                              <div className='flex px-2 gap-3 items-center'>
                                <button
                                  className='text-purple-700 rounded-md flex items-center justify-center hover:scale-105 duration-100 border-2 border-purple-700 p-2'
                                  onClick={decreaseCount}
                                >
                                  <AiOutlineMinus className='text-xl' />
                                </button>
                                <div className='text-2xl font-semibold p-2'>
                                  {count}
                                </div>
                                <button
                                  className='text-purple-700 rounded-md flex items-center justify-center hover:scale-105 duration-100 border-2 border-purple-700 p-2'
                                  onClick={increaseCount}
                                >
                                  <AiOutlinePlus className='text-xl' />
                                </button>
                              </div>
                            </div>
                            <hr className='bg-black' />
                            <div className='flex flex-row justify-between'>
                              <div className='flex'>
                                <BiChild className='text-3xl' />
                                <div className='flex flex-row justify-between items-center'>
                                  <div>
                                    <h2 className='font-bold'>Bayi</h2>
                                    <p>(Dibawah 2 tahun)</p>
                                  </div>
                                </div>
                              </div>
                              <div className='flex px-2 gap-3 items-center'>
                                <button
                                  className='text-purple-700 rounded-md flex items-center justify-center hover:scale-105 duration-100 border-2 border-purple-700 p-2'
                                  onClick={decreaseCount}
                                >
                                  <AiOutlineMinus className='text-xl' />
                                </button>
                                <div className='text-2xl font-semibold p-2'>
                                  {count}
                                </div>
                                <button
                                  className='text-purple-700 rounded-md flex items-center justify-center hover:scale-105 duration-100 border-2 border-purple-700 p-2'
                                  onClick={increaseCount}
                                >
                                  <AiOutlinePlus className='text-xl' />
                                </button>
                              </div>
                            </div>
                            <hr className='bg-black' />
                            <div className='flex flex-row justify-end'>
                              <div className='flex flex-row justify-between items-center'>
                                <button className='bg-purple-800 text-white flex rounded-xl items-center justify- w-full py-3 p-5 hover:scale-105 duration-100'>
                                  <span className='text-lg'>Simpan</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='flex w-full flex-col gap-2'>
                    <p>Seat Class</p>
                    <input
                      className=' hover:bg-slate-50 focus:outline-none w-full bg-transparent hover:bg-transparent'
                      onClick={openModalClass}
                    />
                    <hr className='w-full' />
                    {isOpenClass && (
                      <div className='fixed z-20 inset-0 bg-opacity-70 bg-black flex items-center justify-center'>
                        <div className='absolute bg-white rounded-lg shadow-2xl w-96 h-auto'>
                          <div className='flex gap-3 items-center p-4 '>
                            <div className='flex flex-col gap-2 w-full'></div>
                            <div
                              className='text-2xl hover:text-gray-400'
                              onClick={closeModal}
                            >
                              <LuX />
                            </div>
                          </div>
                          <hr className='bg-black' />
                          <div className='flex flex-col p-3 gap-5'>
                            <div className=' flex flex-row justify-between'>
                              <div className='flex flex-row justify-between items-center'>
                                <input
                                  type='radio'
                                  name='option'
                                  id='ekonomi'
                                  value='Ekonomi'
                                  checked={selectedOption === 'Ekonomi'}
                                  onChange={() => handleOptionChange('Ekonomi')}
                                />
                                <div className='p-1'>
                                  <h2 className='font-bold'>Ekonomi</h2>
                                  <p>IDR.4.950.000</p>
                                </div>
                              </div>
                            </div>
                            <hr className='bg-black' />
                            <div className='flex flex-row justify-between'>
                              <div className='flex'>
                                <div className='flex flex-row justify-between items-center'>
                                  <input
                                    type='radio'
                                    name='option'
                                    id='premiumEkonomi'
                                    value='Premium Ekonomi'
                                    checked={
                                      selectedOption === 'Premium Ekonomi'
                                    }
                                    onChange={() =>
                                      handleOptionChange('Premium Ekonomi')
                                    }
                                  />
                                  <div className='p-1'>
                                    <h2 className='font-bold'>
                                      Premium Ekonomi
                                    </h2>
                                    <p>IDR.7.550.000</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr className='bg-black' />
                            <div className=' flex flex-row justify-between'>
                              <div className='flex'>
                                <div className='flex flex-row justify-between items-center'>
                                  <input
                                    type='radio'
                                    name='option'
                                    id='business'
                                    value='Business'
                                    checked={selectedOption === 'Business'}
                                    onChange={() =>
                                      handleOptionChange('Business')
                                    }
                                  />

                                  <div className='p-1'>
                                    <h2 className='font-bold'>Business</h2>
                                    <p>IDR.29.220.000</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr className='bg-black' />
                            <div className=' flex flex-row justify-between'>
                              <div className='flex'>
                                <div className='flex flex-row justify-between items-center'>
                                  <input
                                    type='radio'
                                    name='option'
                                    id='firstClass'
                                    value='First Class'
                                    checked={selectedOption === 'First Class'}
                                    onChange={() =>
                                      handleOptionChange('First Class')
                                    }
                                  />
                                  <div className='p-1'>
                                    <h2 className='font-bold'>First Class</h2>
                                    <p>IDR.87.620.000</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr className='bg-black' />
                            <div className='flex flex-row justify-end'>
                              <div className='flex flex-row justify-between items-center'>
                                <button className='bg-purple-800 text-white flex rounded-xl items-center justify- w-full py-3 p-5 hover:scale-105 duration-100'>
                                  <span className='text-lg'>Simpan</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
