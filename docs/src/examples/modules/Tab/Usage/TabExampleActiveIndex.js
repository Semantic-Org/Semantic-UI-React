import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

class TabExampleActiveIndex extends Component {
  state = { activeIndex: 1 }

  handleRangeChange = (e) => this.setState({ activeIndex: e.target.value })
  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })

  render() {
    const { activeIndex } = this.state

    return (
      <div>
        <div>activeIndex: {activeIndex}</div>
        <input
          type='range'
          max='2'
          value={activeIndex}
          onChange={this.handleRangeChange}
        />
        <Tab
          panes={panes}
          activeIndex={activeIndex}
          onTabChange={this.handleTabChange}
        />
      </div>
    )
  }
}

export default TabExampleActiveIndex
