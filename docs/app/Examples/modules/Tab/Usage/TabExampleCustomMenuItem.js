import React from 'react'
import { Label, Menu, Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: { key: 'users', icon: 'users', content: 'Users' },
    pane: 'Tab 1 Content',
  },
  {
    menuItem: <Menu.Item key='messages'>Messages<Label>15</Label></Menu.Item>,
    pane: 'Tab 2 Content',
  },
]

const TabExampleCustomMenuItem = () => (
  <Tab panes={panes} />
)

export default TabExampleCustomMenuItem
