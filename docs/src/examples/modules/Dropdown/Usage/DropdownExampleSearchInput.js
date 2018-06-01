import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 100, text: '100', value: 100 },
  { key: 200, text: '200', value: 200 },
  { key: 300, text: '300', value: 300 },
  { key: 400, text: '400', value: 400 },
]

const DropdownExampleSearchInput = () => (
  <Dropdown
    search
    searchInput={{ type: 'number' }}
    selection
    options={options}
    placeholder='Select amount...'
  />
)

export default DropdownExampleSearchInput
