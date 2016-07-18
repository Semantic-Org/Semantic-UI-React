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
        <Header dividing style={{ margin: '2em 0' }}>
          {this.props.title}
        </Header>
        {this.props.children}
      </div>
    )
  }
}
