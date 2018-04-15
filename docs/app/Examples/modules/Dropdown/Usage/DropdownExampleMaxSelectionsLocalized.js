import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'volvo', text: 'Volvo', value: 'volvo' },
  { key: 'audi', text: 'Audi', value: 'audi' },
  { key: 'bmw', text: 'BMW', value: 'bmw' },
]


const DropdownExampleMaxSelectionsLocalized = () => {
  const maxSelections = 2

  const LocalizedMessage = <span>Du får inte välja fler än {maxSelections} bilar</span>

  return (
    <Dropdown
      fluid
      maxSelections={maxSelections}
      maxSelectionsMessage={LocalizedMessage}
      multiple
      search
      selection
      options={options}
    />
  )
}

export default DropdownExampleMaxSelectionsLocalized
