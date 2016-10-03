import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { text: 'English', value: 'English' },
  { text: 'French', value: 'French' },
  { text: 'Spanish', value: 'Spanish' },
  { text: 'German', value: 'German' },
  { text: 'Chinese', value: 'Chinese' },
]

const DropdownHeaderExample = () => (
  <Dropdown placeholder='Language' options={options} header='Select a language' />
)

export default DropdownHeaderExample
