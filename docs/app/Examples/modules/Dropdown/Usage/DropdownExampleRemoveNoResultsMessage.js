import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleRemoveNoResultsMessage = () => (
  <Dropdown
    items={[]}
    search
    selection
    placeholder='No message...'
    noResultsMessage={null}
  />
)

export default DropdownExampleRemoveNoResultsMessage
