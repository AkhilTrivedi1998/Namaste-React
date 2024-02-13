import { IMAGE_CDN_URL } from "../config"

const RestaurentCard = (props) => {
    const { cloudinaryImageId, name, avgRating } = props.data
    const cuisines = props.data.cuisines.join()
    return (
      <div className="res-card" style={{background: '#f0f0f0'}}>
        <img 
          className="res-logo"
          alt="res-logo"
          src={IMAGE_CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating + ' stars'}</h4>
      </div>
    )
}

export default RestaurentCard;