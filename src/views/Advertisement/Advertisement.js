import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'
import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * An ad displays third-party promotional content.
 */
function Advertisement(props) {
  const {
    className,
    children,
  } = props

  const classes = cx(
    'ui',
    'ad',
    className
  )
  const rest = getUnhandledProps(Advertisement, props)
  const ElementType = getElementType(Advertisement, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

Advertisement._meta = {
  name: 'Advertisement',
  type: META.TYPES.VIEW,
}

Advertisement.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,
}

export default Advertisement
