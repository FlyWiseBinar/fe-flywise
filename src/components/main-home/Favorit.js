import { styles } from '@/styles/styles'
import { BiLogIn, BiSearchAlt2 } from 'react-icons/bi'
import CardFavorite from './CardFavorite'

const Favorit = ({ favorite }) => {
  // console.log('favorite', favorite);

  const arrayContinent = [
    'Semua',
    'Asia',
    'Amerika',
    'Australia',
    'Eropa',
    'Afrika',
  ]

  return (
    <div className={`${styles.mainCol} pb-20 `}>
      <div
        className={`${styles.mainMaxWidth}  w-full p-5  flex items-center justify-center`}
      >
        <div className=" flex flex-col bg-white items-center justify-center lg:w-[750px] md:w-[700px] w-[350px] gap-5 p-5 ">
          <h3 className="self-start font-bold text-xl">
            Destinasi Favorit <span className="text-main-purple">FlyWise!</span>
          </h3>
          <div className="self-start flex flex-wrap gap-3 md:flex-row md:gap-3">

            {
              arrayContinent.map((item) => (
                <>
                  <div className="flex items-center">
                    <button className="flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300">
                      <BiSearchAlt2 />
                      <p> {item} </p>
                    </button>
                  </div>
                </>
              ))
            }

          </div>
        </div>
      </div>

      <div className="flex gap-5 flex-wrap items-center justify-center">
        {
          favorite?.map((item) => (
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