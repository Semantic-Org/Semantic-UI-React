import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Ref from '../addons/Ref'
import * as customPropTypes from './customPropTypes'

export default class ElementType extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /**
     * Called when component did mount, returns an inner DOM node.
     *
     * @param {HTMLElement} node - Referred node.
     */
    innerRef: PropTypes.func,
  }

  render() {
    const { as: Element, innerRef, ...rest } = this.props

    // Heads up! We should handle common situations to gain performance.
    // We don't need to <Ref> when Element is string or we deal with our component.
    if (typeof Element === 'string') return <Element {...rest} ref={innerRef} />
    if (Element._meta) return <Element {...rest} innerRef={innerRef} />

    return (
      <Ref innerRef={innerRef}>
        <Element {...rest} />
      </Ref>
    )
  }
}
