import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import { childrenUtils, customPropTypes, getElementType, getUnhandledProps } from '../../lib'

/**
 * A modal can contain a description with one or more paragraphs.
 */
const ModalDescription = React.forwardRef(function (props, ref) {
  const { children, className, content } = props
  const classes = cx('description', className)
  const rest = getUnhandledProps(ModalDescription, props)
  const ElementType = getElementType(ModalDescription, props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

ModalDescription.displayName = 'ModalDescription'
ModalDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default ModalDescription
