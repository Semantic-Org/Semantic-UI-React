import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

const _meta = {
  name: 'Dimmer',
  type: META.TYPES.MODULE,
}

class Dimmer extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** An active dimmer will dim its parent container. */
    active: PropTypes.bool,

    /** A dimmable element can blur its contents. */
    blurring: PropTypes.bool,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** A disabled dimmer cannot be activated. */
    disabled: PropTypes.bool,

    /** A dimmer can be formatted to have its colors inverted. */
    inverted: PropTypes.bool,
  }

  static _meta = _meta

  render() {
    const {
      active,
      blurring,
      children,
      className,
      inverted
    } = this.props

    const classes = cx(
      'ui',
      useKeyOnly(active, 'active'),
      useKeyOnly(blurring, 'blurring'),
      useKeyOnly(inverted, 'inverted'),
      'dimmer',
      className,
    )
    const ElementType = getElementType(Dimmer, this.props)
    const rest = getUnhandledProps(Dimmer, this.props)

    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }
}

export default Dimmer
