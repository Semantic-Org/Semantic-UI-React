import React from 'react'
import { Icon, Input, Menu } from 'stardust'

const { Item } = Menu

const SubMenu = () => {
  return (
    <Menu vertical>
      <Item>
        <Input placeholder='Search...' />
      </Item>

      <Item>
        Home

        <Menu>
          <Item active>Search</Item>
          <Item>Add</Item>
          <Item>Remove</Item>
        </Menu>
      </Item>

      <Item>
        <Icon name='grid layout' /> Browse
      </Item>
      <Item icon='grid layout'>Browse</Item>
      <Item>Messages</Item>

      <div className='ui dropdown item'>
        More

        <i className='dropdown icon'></i>
        <div className='menu'>
          <a className='item'><i className='edit icon'></i> Edit Profile</a>
          <a className='item'><i className='globe icon'></i> Choose Language</a>
          <a className='item'><i className='settings icon'></i> Account Settings</a>
        </div>
      </div>
    </Menu>
  )
}

export default SubMenu
