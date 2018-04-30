import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

const App = () => (
  <div style={styles}>
    <Checkbox
      onChange={() => console.log('change checkbox 1')}
      onClick={() => console.log('click checkbox 1')}
    />
    <br />
    <Checkbox
      label='Checkbox 2'
      onChange={() => console.log('change checkbox 2')}
      onClick={() => console.log('click checkbox 2')}
    />
    <br />
    <Checkbox
      id='42'
      label='Checkbox 3'
      onChange={() => console.log('change checkbox 3')}
      onClick={() => console.log('click checkbox 3')}
    />
  </div>
)

export default App
