import React from 'react'
import { List, Label, Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', pane: { key: 'tab1', content: 'This is massive tab', size: 'massive' } },
  { menuItem: 'Tab 2', pane: { key: 'tab2', content: 'This tab has a center aligned text', textAlign: 'center' } },
  { menuItem: 'Tab 3', pane: { key: 'tab3', content: <div>This tab contains an <Label>JSX</Label> element</div> } },
  { menuItem: 'Tab 4',
    pane: (
      <Tab.Pane key='tab4'>
        <p>This tab has a complex content</p>

        <List>
          <List.Item>Apples</List.Item>
          <List.Item>Pears</List.Item>
          <List.Item>Oranges</List.Item>
        </List>
      </Tab.Pane>
    ) },
]

const TabExampleContentShorthand = () => (
  <Tab panes={panes} renderActiveOnly={false} />
)

export default TabExampleContentShorthand
