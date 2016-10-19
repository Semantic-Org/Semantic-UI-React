import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleMenuDirection = () => (
  <Dropdown text='Menu' floating labeled button className='icon'>
    {/* <i class="dropdown icon"></i> */}
    <Dropdown.Menu>
      <Dropdown.Item>
        <i className='left dropdown icon'></i>
        <span className='text'>Left</span>
        <div className='left menu'>
          <Dropdown.Item>1</Dropdown.Item>
          <Dropdown.Item>2</Dropdown.Item>
          <Dropdown.Item>3</Dropdown.Item>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <i className='dropdown icon'></i>
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
