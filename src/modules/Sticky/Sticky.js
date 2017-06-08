import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { META } from '../../lib'

class Sticky extends Component {
  static _meta = {
    name: 'Sticky',
    type: META.TYPES.MODULE,
  }

  static propTypes = {
    as: PropTypes.function,
    children: PropTypes.node,
    className: PropTypes.string,
  }

  componentDidMount() {
    this.update()
    window.addEventListener('scroll', this.update)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.update)
  }

  update = () => {
    this.triggerBoundingRect = this.refs.trigger.getBoundingClientRect()
    this.setState({
      passed: this.triggerBoundingRect.top < 0,
    })
  }

  getStyle = () => {
    if (this.state && this.state.passed) {
      return {
        position: 'fixed',
        top: 0,
        width: this.triggerBoundingRect.width,
      }
    }
  }

  render() {
    return (
      <div {...this.props}>
        <div ref='trigger' />
        <div style={this.getStyle()}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Sticky
