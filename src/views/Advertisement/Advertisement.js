import React, { PropTypes } from 'react'
import cx from 'classnames'
import {
  customPropTypes,
  getElementType,
  META,
} from '../../lib'

/**
*An ad displays third-party promotional content
*/
function Advertisement(props) {
  const {
    className,
  } = props

  const classes = cx(
    'ui',
    'ad',
    className
  )
  const ElementType = getElementType(Advertisement, props)

  return <ElementType className={classes} />
}

Advertisement._meta = {
  name: 'Advertisement',
  type: META.TYPES.VIEWS,
}

Advertisement.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,
}

export default Advertisement
