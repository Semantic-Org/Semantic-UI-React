import { Portal } from 'semantic-ui-react'
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return <Portal trigger={<button />}>Some content</Portal>
}

ReactDOM.render(<App />, document.querySelector('#root'))
