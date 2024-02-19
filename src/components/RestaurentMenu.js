import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import { MENU_API } from "../utils/constants"

function RestaurentMenu() {
  const { resId } = useParams()
  const [resInfo, setResInfo] = useState(null)
  
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId)
    const json = await data.json()
    //console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    setResInfo(json?.data)
  }

  if(resInfo === null){
    return <Shimmer />
  }

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info 
  const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories?.[0]?.itemCards || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

  return (
    <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(', ')} : {costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => {
            return <li key={item.card.info.id} >{item.card.info.name} : Rs {item.card.info?.price / 100 || item.card.info?.defaultPrice / 100}</li>
          })}
        </ul>
    </div>
  )
}

export default RestaurentMenu