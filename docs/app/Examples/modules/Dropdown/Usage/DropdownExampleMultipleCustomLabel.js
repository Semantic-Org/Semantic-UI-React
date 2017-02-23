import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const items = [
  { key: 1, text: 'One', value: 1 },
  { key: 2, text: 'Two', value: 2 },
  { key: 3, text: 'Three', value: 3 },
]

const renderLabel = (label, index, props) => ({
  color: 'blue',
  content: `Customized label - ${label.text}`,
  icon: 'check',
})

const DropdownExampleMultipleCustomLabel = () => (
  <Dropdown
    multiple
    selection
    fluid
    items={items}
    placeholder='Choose an option'
    renderLabel={renderLabel}
  />
)

export default DropdownExampleMultipleCustomLabel
