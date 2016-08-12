import React, { Component, PropTypes } from 'react'

import { Header } from 'stardust'

export default class ExampleSection extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
  }

  render() {
    return (
      <div>
        <Header.H3 dividing style={{ margin: '2em 0' }}>
          {this.props.title}
        </Header.H3>
        {this.props.children}
      </div>
    )
  }
}
