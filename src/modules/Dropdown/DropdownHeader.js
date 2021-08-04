import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
} from '../../lib'
import Icon from '../../elements/Icon'

/**
 * A dropdown menu can contain a header.
 */
const DropdownHeader = React.forwardRef(function (props, ref) {
  const { children, className, content, icon } = props

  const classes = cx('header', className)
  const rest = getUnhandledProps(DropdownHeader, props)
  const ElementType = getElementType(DropdownHeader, props)

  if (!childrenUtils.isNil(children)) {
    return (
      <ElementType {...rest} className={classes} ref={ref}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {Icon.create(icon, { autoGenerateKey: false })}
      {content}
    </ElementType>
  )
})

DropdownHeader.displayName = 'DropdownHeader'
DropdownHeader.propTypes = {
  /** An element type to render as (string or function) */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for Icon. */
  icon: customPropTypes.itemShorthand,
}

DropdownHeader.create = createShorthandFactory(DropdownHeader, (content) => ({ content }))

export default DropdownHeader
