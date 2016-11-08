import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { text: 'One', value: 1 },
  { text: 'Two', value: 2 },
  { text: 'Three', value: 3 },
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
    options={options}
    placeholder='Choose an option'
    renderLabel={renderLabel}
  />
)

export default DropdownExampleMultipleCustomLabel
