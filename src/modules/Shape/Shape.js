import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

export default class Shape extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,
  }

  static _meta = {
    name: 'Shape',
    type: META.TYPES.MODULE,
  }

  render() {
    const {
      className,
      children,
    } = this.props

    const classes = cx(
      'ui',
      className,
      'shape'
    )

    const rest = getUnhandledProps(Shape, this.props)
    const ElementType = getElementType(Shape, this.props)

    return (
      <ElementType {...rest} className={classes}>{children}</ElementType>
    )
  }
}
