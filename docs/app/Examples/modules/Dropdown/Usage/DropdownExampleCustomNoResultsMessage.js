import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleCustomNoResultsMessage = () => (
  <Dropdown
    options={[]}
    search
    selection
    placeholder='A custom message...'
    noResultsMessage='Try another search.'
  />
)

export default DropdownExampleCustomNoResultsMessage
