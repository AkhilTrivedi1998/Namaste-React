import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

  const [listOfRestaurents, setListOfRestaurents] = useState(resList)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json()
    console.log(json)
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          filteredList = listOfRestaurents.filter((res) => {
            return res.stars > 4.0;
          })
          setListOfRestaurents(filteredList)
        }}>Top rated restaur</button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((res) => {
          return <RestaurentCard key={res.id} data={res} />
        })}
      </div>
    </div>
  )
}

export default Body;