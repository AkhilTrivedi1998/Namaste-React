import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurents, setListOfRestaurents] = useState(resList)

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