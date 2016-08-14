import React from 'react'
import { Header, Menu } from 'stardust'

const Text = () => {
  return (
    <Menu vertical>
      <Menu.Item>
        <Header.H4>Promotions</Header.H4>
        <p>Check out our new promotions</p>
      </Menu.Item>

      <Menu.Item>
        <Header.H4>Coupons</Header.H4>
        <p>Check out our collection of coupons</p>
      </Menu.Item>

      <Menu.Item>
        <Header.H4>Rebates</Header.H4>
        <p>Visit our rebate forum for information on claiming rebates</p>
      </Menu.Item>
    </Menu>
  )
}

export default Text
