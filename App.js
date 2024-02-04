import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    'h1', 
    { id: 'heading' },
    'Hello World'
)
const parent = React.createElement(
    'div',
    {id: 'parent'},
    React.createElement(
        'div',
        {id: 'child'},
        [
            React.createElement(
                'h1',
                {},
                'H1 tag says hi'
            ),
            React.createElement(
                'h2',
                {},
                'Another h2 says hi ok'
            ),
            React.createElement(
                'h2',
                {},
                'H2 tag'
            ),
        ]
    )
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)