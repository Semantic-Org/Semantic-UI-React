import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
} from '../../lib'

/**
 * A dropdown contains a selected value.
 */
function DropdownText(props) {
  const { children, className, content } = props
  const classes = cx('divider', className)
  const rest = getUnhandledProps(DropdownText, props)
  const ElementType = getElementType(DropdownText, props)

  return (
    <ElementType aria-atomic aria-live='polite' role='alert' {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

DropdownText.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

DropdownText.create = createShorthandFactory(DropdownText, (val) => ({ content: val }))

export default DropdownText
