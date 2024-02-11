import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { IMG_URL } from "../utils/constants";
import { useState } from "react"; }

const Body = () => {

  let listOfRestaurents = [
    {
      id: 1,
      imageSrc: IMG_URL,
      resName: 'Meghna Foods',
      cuisine: ['Biryani', 'North Indian', 'Asian'],
      stars: 3.2
    },
    {
      id: 2,
      imageSrc: IMG_URL,
      resName: 'KFC',
      cuisine: ['Burger', 'Chicken'],
      stars: 4.2
    },
    {
      id: 3,
      imageSrc: IMG_URL,
      resName: 'Dominos',
      cuisine: ['Pizza'],
      stars: 4.5
    }
  ]

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          listOfRestaurents = listOfRestaurents.filter((res) => {
            return res.stars > 4.0;
          })
          console.log(listOfRestaurents);
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