import React, { Component } from 'react'
import { TabPane, Segment, Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', render: () => <TabPane>Tab 1 Content</TabPane> },
  { menuItem: 'Tab 2', render: () => <TabPane>Tab 2 Content</TabPane> },
  { menuItem: 'Tab 3', render: () => <TabPane>Tab 3 Content</TabPane> },
]

class TabExampleOnTabChange extends Component {
  state = {}

  handleChange = (e, data) => this.setState(data)

  render() {
    return (
      <div>
        <Tab panes={panes} onTabChange={this.handleChange} />
        <Segment tertiary>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </Segment>
      </div>
    )
  }
}

export default TabExampleOnTabChange
