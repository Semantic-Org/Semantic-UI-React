import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import Portal from '../../addons/Portal'

const _meta = {
  name: 'Dimmer',
  type: META.TYPES.MODULE,
}

/**
 * A dimmer hides distractions to focus attention on particular content.
 */
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

    page: PropTypes.bool,
  }

  static _meta = _meta

  renderChildren() {
    const { children } = this.props

    if (children) {
      return (
  <div className='content'>
    <div className='center'>
      {children}
    </div>
  </div>
)
    }

    return null
  }

  render() {
    const {
      active,
      blurring,
      className,
      inverted,
      page,
    } = this.props

    const classes = cx(
      'ui',
      useKeyOnly(active, 'active'),
      useKeyOnly(blurring, 'blurring'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(page, 'page'),
      'dimmer transition visible',
      className,
    )
    const ElementType = getElementType(Dimmer, this.props)
    const rest = getUnhandledProps(Dimmer, this.props)

    const dimmerJSX = <ElementType {...rest} className={classes}>{this.renderChildren()}</ElementType>

    if (page) {
      console.log(11, dimmerJSX)
      return <Portal open={active}>{dimmerJSX}</Portal>
    }

    return dimmerJSX
  }
}

export default Dimmer
