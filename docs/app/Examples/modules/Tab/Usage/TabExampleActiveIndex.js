import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', pane: 'Tab 1 Content' },
  { menuItem: 'Tab 2', pane: 'Tab 2 Content' },
  { menuItem: 'Tab 3', pane: 'Tab 3 Content' },
]

class TabExampleActiveIndex extends Component {
  state = { activeIndex: 1 }

  handleRangeChange = e => this.setState({ activeIndex: e.target.value })
  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })

  render() {
    const { activeIndex } = this.state

    return (
      <div>
        <div>activeIndex: {activeIndex}</div>
        <input type='range' max='2' value={activeIndex} onChange={this.handleRangeChange} />
        <Tab panes={panes} activeIndex={activeIndex} onTabChange={this.handleTabChange} />
      </div>
    )
  }
}

export default TabExampleActiveIndex
