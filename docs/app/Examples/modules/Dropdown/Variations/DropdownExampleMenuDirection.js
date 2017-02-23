import React from 'react'
import { Icon, Dropdown } from 'semantic-ui-react'

const DropdownExampleMenuDirection = () => (
  <Dropdown text='Menu' floating labeled button className='icon'>
    <Dropdown.Menu>
      <Dropdown.Item>
        <Icon name='left dropdown' />
        <span className='text'>Left</span>
        <div className='left menu'>
          <Dropdown.Item>1</Dropdown.Item>
          <Dropdown.Item>2</Dropdown.Item>
          <Dropdown.Item>3</Dropdown.Item>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <Icon name='dropdown' />
        <span className='text'>Right</span>
        <div className='right menu'>
          <Dropdown.Item>1</Dropdown.Item>
          <Dropdown.Item>2</Dropdown.Item>
          <Dropdown.Item>3</Dropdown.Item>
        </div>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleMenuDirection
