import { Image } from 'semantic-ui-react'
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return <Image src='image.jpg' />
}

ReactDOM.render(<App />, document.querySelector('#root'))
