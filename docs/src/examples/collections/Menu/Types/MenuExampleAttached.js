import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  MenuMenu,
  Dropdown,
  Icon,
  Menu,
  Segment,
} from 'semantic-ui-react'

// TODO: Update <Search> usage after its will be implemented

const MenuExampleAttached = () => (
  <div>
    <Menu attached='top'>
      <Dropdown item icon='wrench' simple>
        <DropdownMenu>
          <DropdownItem>
            <Icon name='dropdown' />
            <span className='text'>New</span>

            <DropdownMenu>
              <DropdownItem>Document</DropdownItem>
              <DropdownItem>Image</DropdownItem>
            </DropdownMenu>
          </DropdownItem>
          <DropdownItem>Open</DropdownItem>
          <DropdownItem>Save...</DropdownItem>
          <DropdownItem>Edit Permissions</DropdownItem>
          <DropdownDivider />
          <DropdownHeader>Export</DropdownHeader>
          <DropdownItem>Share</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <MenuMenu position='right'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>
            <input
              className='prompt'
              type='text'
              placeholder='Search animals...'
            />
            <i className='search link icon' />
          </div>
          <div className='results' />
        </div>
      </MenuMenu>
    </Menu>

    <Segment attached='bottom'>
      <img src='/images/wireframe/paragraph.png' />
    </Segment>
  </div>
)

export default MenuExampleAttached
