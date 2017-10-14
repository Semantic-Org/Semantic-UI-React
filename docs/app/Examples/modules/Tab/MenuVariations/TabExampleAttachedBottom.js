import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', pane: { key: 'pane1', attached: 'top', content: 'Tab 1 Content' } },
  { menuItem: 'Tab 2', pane: { key: 'pane2', attached: 'top', content: 'Tab 2 Content' } },
  { menuItem: 'Tab 3', pane: { key: 'pane3', attached: 'top', content: 'Tab 3 Content' } },
]

const TabExampleAttachedBottom = () => (
  <Tab menu={{ attached: 'bottom' }} panes={panes} />
)

export default TabExampleAttachedBottom
