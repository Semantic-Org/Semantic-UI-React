import React, { Component } from 'react'
import { TabPane, Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', render: () => <TabPane>Tab 1 Content</TabPane> },
  { menuItem: 'Tab 2', render: () => <TabPane>Tab 2 Content</TabPane> },
  { menuItem: 'Tab 3', render: () => <TabPane>Tab 3 Content</TabPane> },
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
