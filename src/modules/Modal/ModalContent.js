import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function ModalContent(props) {
  const {
    children,
    className,
    content,
    image,
  } = props

  const classes = cx(
    className,
    useKeyOnly(image, 'image'),
    'content'
  )
  const rest = getUnhandledProps(ModalContent, props)
  const ElementType = getElementType(ModalContent, props)

  return (
    <ElementType {...rest} className={classes}>
      {_.isNil(children) ? content : children}
    </ElementType>
  )
}

ModalContent._meta = {
  name: 'ModalContent',
  type: META.TYPES.MODULE,
  parent: 'Modal',
}

ModalContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A modal can contain image content */
  image: PropTypes.bool,
}

ModalContent.create = createShorthandFactory(ModalContent, content => ({ content }))

export default ModalContent
