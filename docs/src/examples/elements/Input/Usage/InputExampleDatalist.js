import React from 'react'
import { Input } from 'semantic-ui-react'

const InputExampleDatalist = () => (
  <div>
    <Input list='languages' placeholder='Choose language...' />
    <datalist id='languages'>
      <option value='English'>English</option>
      <option value='Chinese'>Chinese</option>
      <option value='Dutch'>Dutch</option>
    </datalist>
  </div>
)

export default InputExampleDatalist
