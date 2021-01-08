import React from 'react'
import { Input } from 'semantic-ui-react'

const InputExampleDatalist = () => (
  <div>
    <Input list='languages' placeholder='Choose language...' />
    <datalist id='languages'>
      <option value='English' />
      <option value='Chinese' />
      <option value='Dutch' />
    </datalist>
  </div>
)

export default InputExampleDatalist
