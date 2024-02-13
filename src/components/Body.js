import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [listOfRestaurents, setListOfRestaurents] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json()    
    setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return listOfRestaurents.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          filteredList = listOfRestaurents.filter((res) => {
            return res.info.avgRating > 4.0;
          })
          setListOfRestaurents(filteredList)
        }}>Top rated restaur</button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((res) => {
          return <RestaurentCard key={res.info.id} data={res.info} />
        })} 
      </div>
    </div>
  )
}

export default Body;