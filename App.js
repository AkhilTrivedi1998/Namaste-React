import React from "react"
import ReactDOM from "react-dom/client"

const resList = [
  {
    id: 1,
    imageSrc: 'https://www.logodesign.net/logo/smoking-burger-with-luttuce-3624ld.png',
    resName: 'Meghna Foods',
    cuisine: ['Biryani', 'North Indian', 'Asian'],
    stars: 4.4
  },
  {
    id: 2,
    imageSrc: 'https://www.logodesign.net/logo/smoking-burger-with-luttuce-3624ld.png',
    resName: 'KFC',
    cuisine: ['Burger', 'Chicken'],
    stars: 4.2
  },
  {
    id: 3,
    imageSrc: 'https://www.logodesign.net/logo/smoking-burger-with-luttuce-3624ld.png',
    resName: 'Dominos',
    cuisine: ['Pizza'],
    stars: 4.5
  }
]

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-luttuce-3624ld.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

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

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res) => {
          return <RestaurentCard key={res.id} data={res} />
        })}
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <AppLayout />
)