import React from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'

const DropdownExamplePointing = () => (
  <Menu>
    <Menu.Item>
      Home
    </Menu.Item>
    <Dropdown text='Shopping' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Header>Categories</Dropdown.Header>
        <Dropdown.Item>
          <Icon name='dropdown' />
          <span className='text'>Clothing</span>
          <Dropdown.Menu>
            <Dropdown.Header>Mens</Dropdown.Header>
            <Dropdown.Item>Shirts</Dropdown.Item>
            <Dropdown.Item>Pants</Dropdown.Item>
            <Dropdown.Item>Jeans</Dropdown.Item>
            <Dropdown.Item>Shoes</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Womens</Dropdown.Header>
            <Dropdown.Item>Dresses</Dropdown.Item>
            <Dropdown.Item>Shoes</Dropdown.Item>
            <Dropdown.Item>Bags</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Item>
        <Dropdown.Item>Home Goods</Dropdown.Item>
        <Dropdown.Item>Bedroom</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Order</Dropdown.Header>
        <Dropdown.Item>Status</Dropdown.Item>
        <Dropdown.Item>Cancellations</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>
      Forums
    </Menu.Item>
    <Menu.Item>
      Contact Us
    </Menu.Item>
  </Menu>
)

export default DropdownExamplePointing
