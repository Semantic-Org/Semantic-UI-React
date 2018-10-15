import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Dashboard', render: () => <Tab.Pane>Dashboard Content</Tab.Pane> },
  {
    menuItem: (
      <Menu.Item key='users'>
        <Icon name='users' /> Manage Users
      </Menu.Item>
    ),
    render: () => <Tab.Pane>Manage User Profiles</Tab.Pane>,
  },
  {
    menuItem: { key: 'settings', icon: 'setting', content: 'Settings' },
    render: () => <Tab.Pane>Settings</Tab.Pane>,
  },
]

const TabExampleBasicShorthand = () => <Tab panes={panes} />

export default TabExampleBasicShorthand
