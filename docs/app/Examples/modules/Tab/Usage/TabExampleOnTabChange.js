import React, { Component } from 'react'
import { Segment, Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', pane: 'Tab 1 Content' },
  { menuItem: 'Tab 2', pane: 'Tab 2 Content' },
  { menuItem: 'Tab 3', pane: 'Tab 3 Content' },
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
