import React from 'react'
import { styles } from '@/styles/styles'

const Banner = () => {
  return (
    <div className={`${styles.mainCol} py-5`}>
      <div className='w-full bg-main-orange opacity-60 h-[150px] absolute z-0 top-52'></div>
      <div
        className={`${styles.mainMaxWidth} flex justify-between items-center absolute h-[232px] z-10 top-44 w-[75%] rounded-3xl bg-main-purple`}
      >
        <div className='text-4xl font-bold px-[5%] py-5 w-full flex flex-col text-white gap-5 '>
          <i>Diskon Hari Ini</i>
          <p className='text-main-orange'>{'85%'}</p>
        </div>

        <div
          className='w-full h-[232px] flex justify-end '
          style={{
            // eslint-disable-next-line quotes
            backgroundImage: "url('/assets/banner.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
          }}
        >
          <div className='w-full h-auto bg-gradient-to-r  from-main-purple to-transparent'></div>
        </div>
      </div>
      <div className={`${styles.mainMaxWidth}`}></div>
    </div>
  )
}

export default Banner
