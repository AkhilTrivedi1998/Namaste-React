import React from "react"
import ReactDOM from "react-dom/client"


const Title = (props) => {
    const name = props.name
    const child = props.children
    console.log(name)
    console.log(child)
	return (
      <div>
        <h2>{name}</h2>
        <h2>{child}</h2>
      </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Title name='hello'>Hi</Title>)