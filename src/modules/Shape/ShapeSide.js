import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

class ShapeSide extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** The item currently selected by keyboard shortcut. */
    active: PropTypes.bool,

    /** The item currently is animating. */
    animating: PropTypes.bool,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /** A side can be a header. */
    header: PropTypes.bool,

    /** The item currently is hidden. */
    hidden: PropTypes.bool,
  }

  static _meta = {
    name: 'ShapeSide',
    parent: 'Shape',
    type: META.TYPES.MODULE,
  }

  getBoundingClientRect = () => this.ref.getBoundingClientRect()

  handleRef = c => (this.ref = c)

  render() {
    const {
      active,
      animating,
      children,
      className,
      content,
      duration,
      header,
      hidden,
    } = this.props
    const classes = cx(
      useKeyOnly(active, 'active'),
      useKeyOnly(animating, 'animating'),
      useKeyOnly(header, 'header'),
      useKeyOnly(hidden, 'hidden'),
      'side',
      className
    )
    const rest = getUnhandledProps(ShapeSide, this.props)
    const ElementType = getElementType(ShapeSide, this.props)

    let style

    if (animating) style = {
      left: '0',
      transform: 'rotateY(-90deg) translateZ(145px)',
      transitionDuration: `${duration}ms`,
    }

    if (active && hidden) style = {
      transform: 'rotateY(0deg) translateZ(145px)',
      transitionDuration: `${duration}ms`,
    }

    return (
      <ElementType {...rest} className={classes} ref={this.handleRef} style={style}>
        {_.isNil(children) ? content : children}
      </ElementType>
    )
  }
}

ShapeSide.create = createShorthandFactory(ShapeSide, content => ({ content }))

export default ShapeSide
