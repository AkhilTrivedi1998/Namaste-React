const RestaurentCard = (props) => {
    const { imageSrc, resName, stars } = props.data
    const cuisine = props.data.cuisine.join()
    return (
      <div className="res-card" style={{background: '#f0f0f0'}}>
        <img 
          className="res-logo"
          alt="res-logo"
          src={imageSrc}
        />
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{stars + ' stars'}</h4>
      </div>
    )
}

export default RestaurentCard;