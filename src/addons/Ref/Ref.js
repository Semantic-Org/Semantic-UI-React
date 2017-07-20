import PropTypes from 'prop-types'
import { Children, Component } from 'react'
import { findDOMNode } from 'react-dom'

import { TYPES } from '../../lib/META'

/**
 * This component exposes a callback prop that always returns the DOM node of both functional and class component
 * children.
 */
export default class Ref extends Component {
  static propTypes = {
    /** Primary content. */
    children: PropTypes.element.isRequired,

    /**
     * Called when componentDidMount.
     *
     * @param {HTMLElement} node - Referred node.
     */
    innerRef: PropTypes.func.isRequired,
  }

  static _meta = {
    name: 'Ref',
    type: TYPES.ADDON,
  }

  componentDidMount() {
    const { innerRef } = this.props
    const node = findDOMNode(this)

    innerRef(node)
  }

  render() {
    const { children } = this.props

    return Children.only(children)
  }
}
