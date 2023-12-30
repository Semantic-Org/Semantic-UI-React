import React from 'react'
import { TabPane, ListItem, List, Label, Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: 'Tab 1',
    pane: { key: 'tab1', content: 'This is a massive tab', size: 'massive' },
  },
  {
    menuItem: 'Tab 2',
    pane: {
      key: 'tab2',
      content: 'This tab has center-aligned text',
      textAlign: 'center',
    },
  },
  {
    menuItem: 'Tab 3',
    pane: {
      key: 'tab3',
      content: (
        <div>
          This tab contains a <Label>JSX</Label> element
        </div>
      ),
    },
  },
  {
    menuItem: 'Tab 4',
    pane: (
      <TabPane key='tab4'>
        <p>This tab has complex content</p>

        <List>
          <ListItem>Apples</ListItem>
          <ListItem>Pears</ListItem>
          <ListItem>Oranges</ListItem>
        </List>
      </TabPane>
    ),
  },
]

const TabExampleContentShorthand = () => (
  <Tab panes={panes} renderActiveOnly={false} />
)

export default TabExampleContentShorthand
