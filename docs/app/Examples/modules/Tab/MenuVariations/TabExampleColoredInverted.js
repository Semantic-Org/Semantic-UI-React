import _ from 'lodash'
import React, { Component } from 'react'
import { Divider, Tab } from 'semantic-ui-react'

const colors = [
  'red', 'orange', 'yellow', 'olive', 'green', 'teal',
  'blue', 'violet', 'purple', 'pink', 'brown', 'grey',
]

const panes = [
  { menuItem: 'Tab 1', pane: { key: 'pane1', attached: false, content: 'Tab 1 Content' } },
  { menuItem: 'Tab 2', pane: { key: 'pane2', attached: false, content: 'Tab 2 Content' } },
  { menuItem: 'Tab 3', pane: { key: 'pane3', attached: false, content: 'Tab 3 Content' } },
]

class TabExampleColoredInverted extends Component {
  state = { color: colors[0] }

  handleColorChange = e => this.setState({ color: e.target.value })

  render() {
    const { color } = this.state

    return (
      <div>
        <select onChange={this.handleColorChange}>
          {_.map(colors, c => <option key={c} value={c}>{_.startCase(c)}</option>)}
        </select>

        <Divider hidden />

        <Tab
          menu={{ color, inverted: true, attached: false, tabular: false }}
          panes={panes}
        />
      </div>
    )
  }
}

export default TabExampleColoredInverted
