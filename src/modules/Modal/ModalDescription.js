import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

const ElementType = getElementType()

/**
 * A modal can have a header.
 */
function ModalDescription(props) {
  const { children, className, content } = props
  const classes = cx('description', className)
  const rest = getUnhandledProps(ModalDescription, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

ModalDescription._meta = {
  name: 'ModalDescription',
  type: META.TYPES.MODULE,
  parent: 'Modal',
}

ModalDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default ModalDescription
