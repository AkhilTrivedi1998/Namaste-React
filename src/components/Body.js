import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json()    
    setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return listOfRestaurents.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
           type="text"
           className="search-box"
           value={searchText} 
           onChange={(e) => setSearchText(e.target.value)} 
          />
          <button onClick={() => {
            console.log(searchText)
            const filteredList = listOfRestaurents.filter((res) => {
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setFilteredRestaurents(filteredList)
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurents.filter((res) => {
            return res.info.avgRating > 4.0;
          })
          setFilteredRestaurents(filteredList)
        }}>Top rated restaur</button>
      </div>
      <div className="res-container">
        {filteredRestaurents.map((res) => {
          return <Link key={res.info.id} to={'/restaurent/' + res.info.id}><RestaurentCard data={res.info} /></Link>
        })} 
      </div>
    </div>
  )
}

export default Body;