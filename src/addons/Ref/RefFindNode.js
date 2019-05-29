import PropTypes from 'prop-types'
import { Component } from 'react'
import { findDOMNode } from 'react-dom'

import { handleRef } from '../../lib/refUtils'

export default class RefFindNode extends Component {
  static propTypes = {
    /** Primary content. */
    children: PropTypes.element.isRequired,

    /**
     * Called when a child component will be mounted or updated.
     *
     * @param {HTMLElement} node - Referred node.
     */
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }

  prevNode = null

  componentDidMount() {
    // eslint-disable-next-line react/no-find-dom-node
    this.prevNode = findDOMNode(this)

    handleRef(this.props.innerRef, this.prevNode)
  }

  componentDidUpdate() {
    // eslint-disable-next-line react/no-find-dom-node
    const currentNode = findDOMNode(this)

    if (this.prevNode !== currentNode) {
      this.prevNode = currentNode
      handleRef(this.props.innerRef, currentNode)
    }
  }

  componentWillUnmount() {
    handleRef(this.props.innerRef, null)
  }

  render() {
    const { children } = this.props

    return children
  }
}
