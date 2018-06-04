import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabExampleVerticalTabularRight = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} />
)

export default TabExampleVerticalTabularRight
