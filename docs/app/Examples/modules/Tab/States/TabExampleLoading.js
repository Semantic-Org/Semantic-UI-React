import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', pane: { key: 'pane1', loading: true, content: 'Tab 1 Content' } },
  { menuItem: 'Tab 2', pane: { key: 'pane2', content: 'Tab 2 Content' } },
  { menuItem: 'Tab 3', pane: { key: 'pane3', content: 'Tab 3 Content' } },
]

const TabExampleLoading = () => (
  <Tab panes={panes} />
)

export default TabExampleLoading
