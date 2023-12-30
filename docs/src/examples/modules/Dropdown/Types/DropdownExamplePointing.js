import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  MenuItem,
  Dropdown,
  Menu,
} from 'semantic-ui-react'

const DropdownExamplePointing = () => (
  <Menu>
    <MenuItem>Home</MenuItem>
    <Dropdown text='Shopping' pointing className='link item'>
      <DropdownMenu>
        <DropdownHeader>Categories</DropdownHeader>
        <DropdownItem>
          <Dropdown text='Clothing'>
            <DropdownMenu>
              <DropdownHeader>Mens</DropdownHeader>
              <DropdownItem>Shirts</DropdownItem>
              <DropdownItem>Pants</DropdownItem>
              <DropdownItem>Jeans</DropdownItem>
              <DropdownItem>Shoes</DropdownItem>
              <DropdownDivider />
              <DropdownHeader>Womens</DropdownHeader>
              <DropdownItem>Dresses</DropdownItem>
              <DropdownItem>Shoes</DropdownItem>
              <DropdownItem>Bags</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DropdownItem>
        <DropdownItem>Home Goods</DropdownItem>
        <DropdownItem>Bedroom</DropdownItem>
        <DropdownDivider />
        <DropdownHeader>Order</DropdownHeader>
        <DropdownItem>Status</DropdownItem>
        <DropdownItem>Cancellations</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <MenuItem>Forums</MenuItem>
    <MenuItem>Contact Us</MenuItem>
  </Menu>
)

export default DropdownExamplePointing
