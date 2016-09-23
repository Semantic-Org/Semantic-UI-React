import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
} from '../../lib'

/**
 * Several icons can be used together as a group
 */
function IconGroup(props) {
  const {
    className, children, size,
  } = props

  const classes = cx(
    size,
    'icons',
    className
  )

  const rest = getUnhandledProps(IconGroup, props)
  const ElementType = getElementType(IconGroup, props)

  return (
    <ElementType className={classes} {...rest}>
      {children}
    </ElementType>
  )
}

IconGroup._meta = {
  name: 'IconGroup',
  parent: 'Icon',
  type: META.TYPES.ELEMENT,
  props: {
    size: SUI.SIZES,
  },
}

IconGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Class names for custom styling. */
  className: PropTypes.string,

  /** Icon children for the Icon group */
  children: PropTypes.any,

  /** Size of the icon group. */
  size: PropTypes.oneOf(IconGroup._meta.props.size),
}

IconGroup.defaultProps = {
  as: 'i',
}

export default IconGroup
