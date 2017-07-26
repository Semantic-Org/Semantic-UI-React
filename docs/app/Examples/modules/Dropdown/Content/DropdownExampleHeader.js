import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { component: Dropdown.Header, icon: 'tags', content: 'Filter by tag' },
  { text: 'Important', value: 'Important' },
  { text: 'Hopper', value: 'Hopper' },
  { text: 'Discussion', value: 'Discussion' },
]

const DropdownExampleHeader = () => (
  <Dropdown text='Filter' icon='filter' floating labeled button className='icon' options={options} />
)

export default DropdownExampleHeader
