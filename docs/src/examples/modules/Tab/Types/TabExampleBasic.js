import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'

const TabExampleBasic = () => (
  <Tab>
    <Tab.Pane menuItem='Dashboard'>Dashboard Content</Tab.Pane>
    <Tab.Pane
      menuItem={
        <Menu.Item key='users'>
          <Icon name='users' />
          Manage Users
        </Menu.Item>
      }
    >
      Manage User Profiles
    </Tab.Pane>
    <Tab.Pane menuItem={{ key: 'settings', icon: 'setting', content: 'Settings' }}>
      Settings
    </Tab.Pane>
  </Tab>
)

export default TabExampleBasic
