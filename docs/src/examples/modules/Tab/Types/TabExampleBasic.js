import React from 'react'
import { TabPane, Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', render: () => <TabPane>Tab 1 Content</TabPane> },
  { menuItem: 'Tab 2', render: () => <TabPane>Tab 2 Content</TabPane> },
  { menuItem: 'Tab 3', render: () => <TabPane>Tab 3 Content</TabPane> },
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic
