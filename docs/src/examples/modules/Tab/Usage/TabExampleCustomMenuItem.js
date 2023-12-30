import React from 'react'
import { TabPane, MenuItem, Label, Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: { key: 'users', icon: 'users', content: 'Users' },
    render: () => <TabPane>Tab 1 Content</TabPane>,
  },
  {
    menuItem: (
      <MenuItem key='messages'>
        Messages<Label>15</Label>
      </MenuItem>
    ),
    render: () => <TabPane>Tab 2 Content</TabPane>,
  },
]

const TabExampleCustomMenuItem = () => <Tab panes={panes} />

export default TabExampleCustomMenuItem
