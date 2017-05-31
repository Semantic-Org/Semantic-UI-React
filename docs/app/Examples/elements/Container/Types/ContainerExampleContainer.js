import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
   { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
   { key: 'ae', value: 'ae', flag: 'ae', text: 'United Arab Emirates' },
   { key: 'us', value: 'us', flag: 'us', text: 'United States' },
]

const DropdownExampleSearchSelection = () => (
  <div>
    <Dropdown placeholder='Min 1' fluid search selection options={countryOptions} />
    <br />
    <Dropdown placeholder='Min 3' fluid search selection minCharacters={3} options={countryOptions} />
  </div>
)

export default DropdownExampleSearchSelection
