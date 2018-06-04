import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'a', value: 'a', text: 'Café with accent' },
  { key: 'b', value: 'b', text: 'Cafe without accent' },
  { key: 'c', value: 'c', text: 'Déjà vu' },
  { key: 'd', value: 'd', text: 'Deja vu' },
  { key: 'e', value: 'e', text: 'Scandinavian å ä æ ø ö' },
  { key: 'f', value: 'f', text: 'Scandinavian a a ae o o' },
]

const DropdownExampleSearchSelection = () => (
  <Dropdown
    deburr
    fluid
    options={options}
    placeholder='Try to search for "Deja vu"'
    search
    selection
  />
)

export default DropdownExampleSearchSelection
