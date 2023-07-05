import { styles } from "@/styles/styles"
import { BiSearchAlt2 } from "react-icons/bi"
import CardFavorite from "./CardFavorite"
import { useState } from "react"
import api from "@/configs/api"
import axios from "axios"

const Favorit = ({ favorite }) => {
  const [filter, setFilter] = useState(favorite)
  const [value, setValue] = useState("")

  const handleClick = async (event) => {
    const value = event.currentTarget.value
    setValue(value)
    try {
      console.log(value)
      const response = await axios.get(
        `${api.apiScheduleFavorite}?continent=${value}`
      )
      const result = await response.data.data
      setFilter(result)
    } catch (error) {
      console.error(error)
    }
  }

  const handleFilterFavorite = async () => {
    try {
      console.log(value)
      const response = await axios.get(
        `${api.apiScheduleFavorite}?continent=${value}`
      )
      const result = await response.data.data
      setFilter(result)
    } catch (error) {
      console.error(error)
    }
  }

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
            <>
              <div className="flex items-center">
                <button
                  className="flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300"
                  value=""
                  onClick={handleClick}
                >
                  <BiSearchAlt2 />
                  <p> Semua </p>
                </button>
              </div>
              <div className="flex items-center">
                <button
                  className="flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300"
                  value="asia"
                  onClick={handleClick}
                  onChange={handleFilterFavorite}
                >
                  <BiSearchAlt2 />
                  <p> Asia </p>
                </button>
              </div>
              <div className="flex items-center">
                <button
                  className="flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300"
                  value="america"
                  onClick={handleClick}
                  onChange={handleFilterFavorite}
                >
                  <BiSearchAlt2 />
                  <p> Amerika </p>
                </button>
              </div>
              <div className="flex items-center">
                <button
                  className="flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300"
                  value="oceania"
                  onClick={handleClick}
                  onChange={handleFilterFavorite}
                >
                  <BiSearchAlt2 />
                  <p> Oceania </p>
                </button>
              </div>
              <div className="flex items-center">
                <button
                  className="flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300"
                  value="europe"
                  onClick={handleClick}
                  onChange={handleFilterFavorite}
                >
                  <BiSearchAlt2 />
                  <p> Eropa </p>
                </button>
              </div>
              <div className="flex items-center">
                <button
                  className="flex items-center justify-start bg-main-orange p-4 rounded-xl text-white hover:scale-110 duration-300"
                  value="africa"
                  onClick={handleClick}
                  onChange={handleFilterFavorite}
                >
                  <BiSearchAlt2 />
                  <p> Afrika </p>
                </button>
              </div>
            </>
          </div>
        </div>
      </div>

      <div className="flex gap-5 flex-wrap items-center justify-center">
        {filter?.map((item, index) => (
          <div key={index}>
            <CardFavorite item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorit
