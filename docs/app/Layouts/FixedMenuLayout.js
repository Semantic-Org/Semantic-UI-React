import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

const FixedMenuLayout = () =>
    <Menu fixed inverted>
      <Menu.Item>
        <img src='http://semantic-ui.com/images/logo.png' />
        {' '} Project Name
      </Menu.Item>
      <Menu.Item name='Home' />

      <Dropdown text='Dropdown' pointing className='link item'>
        <Dropdown.Menu>
          <Dropdown.Item>Link Item</Dropdown.Item>
          <Dropdown.Item>Link Item</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Header Item</Dropdown.Header>
          <Dropdown.Item>
            <i className='dropdown icon'></i>
            <span className='text'>Clothing</span>
            <Dropdown.Menu>
              <Dropdown.Item>Link Item</Dropdown.Item>
              <Dropdown.Item>Link Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>Link Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>

export default FixedMenuLayout
