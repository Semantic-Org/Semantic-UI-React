import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { childrenUtils, customPropTypes, getElementType, getUnhandledProps, SUI } from '../../lib'

/**
 * Several icons can be used together as a group.
 */
const IconGroup = React.forwardRef(function (props, ref) {
  const { children, className, content, size } = props

  const classes = cx(size, 'icons', className)
  const rest = getUnhandledProps(IconGroup, props)
  const ElementType = getElementType(IconGroup, props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

IconGroup.displayName = 'IconGroup'
IconGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Size of the icon group. */
  size: PropTypes.oneOf(_.without(SUI.SIZES, 'medium')),
}

IconGroup.defaultProps = {
  as: 'i',
}

export default IconGroup
