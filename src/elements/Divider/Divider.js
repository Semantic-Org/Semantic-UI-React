import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

/**
 * A divider visually segments content into groups
 */
function Divider(props) {
  const {
    horizontal, vertical, inverted, fitted, hidden, section, clearing,
    children, className,
  } = props

  const classes = cx(
    'ui',
    useKeyOnly(horizontal, 'horizontal'),
    useKeyOnly(vertical, 'vertical'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(fitted, 'fitted'),
    useKeyOnly(hidden, 'hidden'),
    useKeyOnly(section, 'section'),
    useKeyOnly(clearing, 'clearing'),
    'divider',
    className
  )
  const rest = getUnhandledProps(Divider, props)
  const ElementType = getElementType(Divider, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

Divider._meta = {
  name: 'Divider',
  type: META.TYPES.ELEMENT,
}

Divider.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Divider can segment content horizontally */
  horizontal: PropTypes.bool,

  /** Divider can segment content vertically */
  vertical: PropTypes.bool,

  /** Divider can have it's colours inverted */
  inverted: PropTypes.bool,

  /** Divider can be fitted without any space above or below it */
  fitted: PropTypes.bool,

  /** Divider can divide content without creating a dividing line */
  hidden: PropTypes.bool,

  /** Divider can provide greater margins to divide sections of content */
  section: PropTypes.bool,

  /** Divider can clear the content above it */
  clearing: PropTypes.bool,
}

export default Divider
