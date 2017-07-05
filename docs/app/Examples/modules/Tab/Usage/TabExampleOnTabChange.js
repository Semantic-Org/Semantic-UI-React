import React, { Component } from 'react'
import { Segment, Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
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
