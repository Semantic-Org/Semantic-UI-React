import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getComponentType,
  getUnhandledProps,
  getKeyOnly,
} from '../dropdown/lib'

/**
 * A modal can contain content.
 */
const ModalContent = React.forwardRef((props, ref) => {
  const { children, className, content, image, scrolling } = props

  const classes = cx(
    className,
    getKeyOnly(image, 'image'),
    getKeyOnly(scrolling, 'scrolling'),
    'content'
  )
  const rest = getUnhandledProps(ModalContent, props)
  const ElementType = getComponentType(props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

ModalContent.displayName = 'ModalContent'

ModalContent.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A modal can contain image content. */
  image: PropTypes.bool,

  /** A modal can use the entire size of the screen. */
  scrolling: PropTypes.bool,
}

// 린트 에러 해결을 위해 defaultProps 추가
ModalContent.defaultProps = {
  as: 'div',
  children: null,
  className: '',
  content: null,
  image: false,
  scrolling: false,
}

ModalContent.create = createShorthandFactory(ModalContent, (content) => {
  return { content }
})

export default ModalContent
