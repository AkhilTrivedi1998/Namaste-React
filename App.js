import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    'h1',
    {id: 'heading'}, 
    'Namaste React'
)
const jsxheading = (
    <h1 id="heading">
        This is jsx heading
    </h1>
)

// React Functional Component
const FunctionalComponent = () => {
    return (
        <div>
            <h1>FC 1</h1>
            <h1>FC 2</h1>
        </div>
    )
}

console.log(heading)
console.log(jsxheading)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<FunctionalComponent />)