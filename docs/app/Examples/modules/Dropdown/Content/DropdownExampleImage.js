import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { friendOptions } from '../common'

const DropdownExampleImage = () => (
  <Dropdown text='Add user' floating labeled button className='icon'>
    {/* <i class="add user icon"></i> */}
    <Dropdown.Menu>
      <Dropdown.Header content='People You Might Know' />
      {friendOptions.map((option) => <Dropdown.Item key={option.value} {...option} />)}
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleImage
