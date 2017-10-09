import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', pane: { loading: true, content: 'Tab 1 Content' } },
  { menuItem: 'Tab 2', pane: { content: 'Tab 2 Content' } },
  { menuItem: 'Tab 3', pane: { content: 'Tab 3 Content' } },
]

const TabExampleLoading = () => (
  <Tab panes={panes} />
)

export default TabExampleLoading
