import _ from 'lodash'
import React, { Component } from 'react'
import { TabPane, Divider, Tab } from 'semantic-ui-react'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
]

const panes = [
  {
    menuItem: 'Tab 1',
    render: () => <TabPane attached={false}>Tab 1 Content</TabPane>,
  },
  {
    menuItem: 'Tab 2',
    render: () => <TabPane attached={false}>Tab 2 Content</TabPane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <TabPane attached={false}>Tab 3 Content</TabPane>,
  },
]

class TabExampleColoredInverted extends Component {
  state = { color: colors[0] }

  handleColorChange = (e) => this.setState({ color: e.target.value })

  render() {
    const { color } = this.state

    return (
      <div>
        <select onChange={this.handleColorChange}>
          {_.map(colors, (c) => (
            <option key={c} value={c}>
              {_.startCase(c)}
            </option>
          ))}
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
