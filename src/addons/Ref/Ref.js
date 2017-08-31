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
    innerRef: PropTypes.func,
  }

  static _meta = {
    name: 'Ref',
    type: TYPES.ADDON,
  }

  componentDidMount() {
    const { innerRef } = this.props

    // Heads up! Don't move this condition, it's a short circle that avoids run of `findDOMNode`
    // if `innerRef` isn't passed
    if (innerRef) innerRef(findDOMNode(this)) // eslint-disable-line react/no-find-dom-node
  }

  render() {
    const { children } = this.props

    return Children.only(children)
  }
}
