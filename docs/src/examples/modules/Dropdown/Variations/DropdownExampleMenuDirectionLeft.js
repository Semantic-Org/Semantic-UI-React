import React from 'react'
import { DropdownMenu, DropdownItem, Dropdown, Icon } from 'semantic-ui-react'

const DropdownExampleMenuDirectionLeft = () => (
  <Dropdown text='Menu' floating labeled button className='icon'>
    <DropdownMenu className='left'>
      <DropdownItem>
        <Icon name='dropdown' />
        <span className='text'>Left</span>
        <DropdownMenu>
          <DropdownItem>
            <Icon name='dropdown' />
            <span className='text'>Still Left</span>
            <DropdownMenu>
              <DropdownItem>1</DropdownItem>
              <DropdownItem>2</DropdownItem>
              <DropdownItem>3</DropdownItem>
            </DropdownMenu>
          </DropdownItem>
          <DropdownItem>2</DropdownItem>
          <DropdownItem>3</DropdownItem>
        </DropdownMenu>
      </DropdownItem>
      <DropdownItem>
        <Icon name='left dropdown' />
        <span className='text'>Left</span>
        <DropdownMenu>
          <DropdownItem>1</DropdownItem>
          <DropdownItem>2</DropdownItem>
          <DropdownItem>3</DropdownItem>
        </DropdownMenu>
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
)

export default DropdownExampleMenuDirectionLeft
