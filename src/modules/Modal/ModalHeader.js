import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getComponentType,
  getUnhandledProps,
} from '../../lib'

/**
 * A modal can have a header.
 */
const ModalHeader = React.forwardRef(function (props, ref) {
  const { children, className, content } = props
  const classes = cx('header', className)
  const rest = getUnhandledProps(ModalHeader, props)
  const ElementType = getComponentType(props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

ModalHeader.displayName = 'ModalHeader'
ModalHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

ModalHeader.create = createShorthandFactory(ModalHeader, (content) => ({ content }))

export default ModalHeader
