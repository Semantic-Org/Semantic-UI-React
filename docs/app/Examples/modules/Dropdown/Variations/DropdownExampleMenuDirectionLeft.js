import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'

const DropdownExampleMenuDirectionLeft = () => (
  <Dropdown text='Menu' floating labeled button className='icon'>
    <Dropdown.Menu className='left'>
      <Dropdown.Item>
        <Icon name='dropdown' />
        <span className='text'>Left</span>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Icon name='dropdown' />
            <span className='text'>Still Left</span>
            <Dropdown.Menu>
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>2</Dropdown.Item>
              <Dropdown.Item>3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>2</Dropdown.Item>
          <Dropdown.Item>3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Item>
      <Dropdown.Item>
        <Icon name='left dropdown' />
        <span className='text'>Left</span>
        <Dropdown.Menu>
          <Dropdown.Item>1</Dropdown.Item>
          <Dropdown.Item>2</Dropdown.Item>
          <Dropdown.Item>3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleMenuDirectionLeft
