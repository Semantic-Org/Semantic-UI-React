import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { META } from '../../lib'

const _meta = {
  name: 'Visibility',
  type: META.TYPES.BEHAVIOUR,
}

class Visibility extends Component {
  static _meta = _meta

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll(event) {
    const node = ReactDOM.findDOMNode(this)
    const nodeRect = node.getBoundingClientRect()
    console.log(nodeRect)
  }

  render() {
    return this.props.children
  }
}

export default Visibility
