import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'

const TabExampleBasic = () => (
  <Tab
    menuItems={[
      // three different ways of describing the menu items
      'Dashboard',
      <Menu.Item key='users'>
        <Icon name='users' />
        Manage Users
      </Menu.Item>,
      { key: 'settings', icon: 'setting', content: 'Settings' },
    ]}
  >
    <Tab.Pane>Dashboard Content</Tab.Pane>
    <Tab.Pane>Manage User Profiles</Tab.Pane>
    <Tab.Pane>Settings</Tab.Pane>
  </Tab>
)

export default TabExampleBasic
