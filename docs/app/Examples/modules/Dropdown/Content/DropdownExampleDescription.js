import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { component: Dropdown.Header, icon: 'tags', content: 'Filter by tag' },
  { component: Dropdown.Divider },
  { description: '2 new', text: 'Important' },
  { description: '10 new', text: 'Hopper' },
  { description: '5 new', text: 'Discussion' },
]

const DropdownExampleDescription = () => (
  <Dropdown text='Filter Tags' floating labeled button icon='filter' className='icon' options={options} />
)

export default DropdownExampleDescription
