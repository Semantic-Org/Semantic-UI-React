import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function CalendarMonth(props) {
  const { children, className, scrolling } = props
  const classes = cx(
    className,
  )
  const rest = getUnhandledProps(CalendarMonth, props)
  const ElementType = getElementType(CalendarMonth, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

CalendarMonth._meta = {
  name: 'CalendarMonth',
  parent: 'Datetime',
  type: META.TYPES.MODULE,
}

CalendarMonth.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string
}

export default CalendarMonth
