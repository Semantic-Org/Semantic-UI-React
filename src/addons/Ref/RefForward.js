import * as PropTypes from 'prop-types'
import { cloneElement, Component } from 'react'

import handleRef from '../../lib/handleRef'

export default class RefForward extends Component {
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

  handleRefOverride = (node) => {
    const { children, innerRef } = this.props

    handleRef(children.ref, node)
    handleRef(innerRef, node)
  }

  render() {
    const { children } = this.props

    return cloneElement(children, {
      ref: this.handleRefOverride,
    })
  }
}
