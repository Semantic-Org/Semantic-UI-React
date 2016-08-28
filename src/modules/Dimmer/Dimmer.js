import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

const _meta = {
  name: 'Dimmer',
  type: META.TYPES.MODULE,
}

class Rating extends Component {
  static propTypes = {
    /** An active dimmer will dim its parent container. */
    active: PropTypes.bool,

    /** A dimmable element can blur its contents. */
    blurring: PropTypes.bool,

    /** An element type to render as (string or function). */
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),

    /** Primary content of the Dimmer. */
    children: PropTypes.node,

    /** Additional className. */
    className: PropTypes.string,

    /** A disabled dimmer cannot be activated. */
    disabled: PropTypes.bool,

    /** A dimmer can be formatted to have its colors inverted. */
    inverted: PropTypes.bool,
  }

  static defaultProps = {
    active: false,
  }

  static _meta = _meta

  static autoControlledProps = [
    'active',
  ]

  render() {
    const { blurring, className, children, inverted } = this.props
    const { active } = this.state

    const classes = cx(
      'ui',
      className,
      useKeyOnly(active, 'active'),
      useKeyOnly(blurring, 'blurring'),
      useKeyOnly(inverted, 'inverted'),
      'dimmer'
    )

    const rest = getUnhandledProps(Rating, this.props)
    const ElementType = getElementType(Rating, this.props)

    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }
}

export default Rating
