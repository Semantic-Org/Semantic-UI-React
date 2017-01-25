import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { friendItems } from '../common'

const DropdownExampleImage = () => (
  <Dropdown icon='add user' text='Add user' floating labeled button className='icon'>
    <Dropdown.Menu>
      <Dropdown.Header content='People You Might Know' />
      {friendItems.map((item) => <Dropdown.Item key={item.value} {...item} />)}
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleImage
