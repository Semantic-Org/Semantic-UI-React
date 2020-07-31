import { Modal } from 'semantic-ui-react'
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return <Modal trigger={<button>An example</button>}>Some content</Modal>
}

ReactDOM.render(<App />, document.querySelector('#root'))
