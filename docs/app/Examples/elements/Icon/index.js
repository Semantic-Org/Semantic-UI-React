import React, { Component } from 'react'
import States from './States'
import Variations from './Variations'
import Groups from './Groups'
import IconSearch from '../../../Components/IconSearch/IconSearch'
import { Menu } from 'src'

const tabs = [
  'Icon Set',
  'Examples',
]

class IconExamples extends Component {
  state = { activeIndex: 0 }

  handleMenuItemClick = (e, { index }) => this.setState({ activeIndex: index })
  renderActiveTab = () => ({
    0: (
      <div>
        <IconSearch />
      </div>
    ),
    1: (
      <div>
        <States />
        <Variations />
        <Groups />
      </div>
    ),
  })[this.state.activeIndex]

  render() {
    return (
      <div>
        <Menu
          widths={2}
          tabular
          defaultActiveIndex={0}
          items={tabs}
          onItemClick={this.handleMenuItemClick}
          style={{ marginBottom: 0 }}
        />
        {this.renderActiveTab()}
      </div>
    )
  }
}

export default IconExamples
