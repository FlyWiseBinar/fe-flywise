import { styles } from '@/styles/styles'
import { BiLogIn, BiSearchAlt2 } from 'react-icons/bi'
import CardFavorite from './CardFavorite'

const Favorit = () => {
  const arrayDummy = [
    {
      destination: 'Jakarta',
      arrive: "Bangkok",
      airline: "Air Asia",
      date: "20 - 30 Maret 2023",
      price: "Rp.950.000",
    },
    {
      destination: 'Bali',
      arrive: "Yogyakarta",
      airline: "Lion Air",
      date: "20 - 30 Maret 2023",
      price: "Rp.1.000.000",
    },
    {
      destination: 'Malang',
      arrive: "Palembang",
      airline: "Sukhoi",
      date: "20 - 30 Maret 2023",
      price: "Rp.2.000.000",
    },
  ]
  return (
    <div className={`${styles.mainCol} `}>
      <div
        className={`${styles.mainMaxWidth}  w-full p-5 flex items-center justify-center`}
      >
        <div className=" flex flex-col bg-white items-center justify-center lg:w-[750px] md:w-[700px] w-[350px] gap-5 p-5 ">
          <h3 className="self-start font-bold text-xl">
            Destinasi Favorit <span className="text-main-purple">FlyWise!</span>
          </h3>
          <div className="self-start flex flex-wrap gap-3 md:flex-row md:gap-3">
            <div className="flex items-center">
              <button className="flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300">
                <BiSearchAlt2 />
                <p>Semua</p>
              </button>
            </div>
            <div className="flex items-center">
              <button className="flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300">
                <BiSearchAlt2 />
                <p>Asia</p>
              </button>
            </div>
            <div className="flex items-center">
              <button className="flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300">
                <BiSearchAlt2 />
                <p>Amerika</p>
              </button>
            </div>
            <div className="flex items-center">
              <button className="flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300">
                <BiSearchAlt2 />
                <p>Australia</p>
              </button>
            </div>
            <div className="flex items-center">
              <button className="flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300">
                <BiSearchAlt2 />
                <p>Eropa</p>
              </button>
            </div>
            <div className=" flex items-center">
              <button className="flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300">
                <BiSearchAlt2 />
                <p>Afrika</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 flex-wrap items-center justify-center">
        {
          arrayDummy?.map((item) => (
            <>
              <CardFavorite item={item} />
            </>
          ))
        }
      </div>

    </div>
  )
}

export default Favorit