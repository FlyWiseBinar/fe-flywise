import React from 'react'
import { styles } from '@/styles/styles'
import { RxPerson } from 'react-icons/rx'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BsListUl } from 'react-icons/bs'

const Navbar_login = () => {
  return (
    <div>
      <div className={`${styles.mainRow} shadow-lg`}>
        <div
          className={`${styles.mainMaxWidth} ${styles.mainRow} !justify-between px-8`}
        >
          <div className='w-full flex-col justify-start p-5'>
            <p className='text-2xl font-bold text-main-purple'>FlyWise</p>
            <p className='text-lg text-main-purple'>Your Traveling Parner</p>
          </div>

          <div className='w-full flex justify-end items-center text-2xl'>
            <button className='flex gap-5 items-center justify-center p-4  text-black hover:scale-110 duration-300'>
              <BsListUl />
            </button>
            <button className='flex gap-5 items-center justify-center p-4  text-black hover:scale-110 duration-300'>
              <IoMdNotificationsOutline />
            </button>
            <button className='flex gap-5 items-center justify-center p-4  text-black hover:scale-110 duration-300'>
              <RxPerson />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar_login
