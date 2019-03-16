import React, { Component } from 'react'
import { Divider, Menu } from 'semantic-ui-react'

import IconSearch from 'docs/src/components/IconSearch/IconSearch'
import States from './States'
import Variations from './Variations'
import Groups from './Groups'

const tabs = ['Icon Set', 'Examples']

class IconExamples extends Component {
  state = { activeIndex: 0 }

  handleMenuItemClick = (e, { index }) => this.setState({ activeIndex: index })
  renderActiveTab = () =>
    ({
      0: <IconSearch />,
      1: (
        <div>
          <States />
          <Variations />
          <Groups />
        </div>
      ),
    }[this.state.activeIndex])

  render() {
    return (
      <div>
        <Menu
          widths={2}
          pointing
          color='teal'
          defaultActiveIndex={0}
          items={tabs}
          onItemClick={this.handleMenuItemClick}
          style={{ marginBottom: 0 }}
        />
        <Divider hidden />
        {this.renderActiveTab()}
      </div>
    )
  }
}

export default IconExamples
