import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenExist,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  createComponent,
} from '../../lib'

/**
 * Header content wraps the main content when there is an adjacent Icon or Image.
 */
const HeaderContent: any = props => {
  const { children, className, content } = props
  const classes = cx('ui-header__content', className)
  const rest = getUnhandledProps(HeaderContent, props)
  const ElementType = getElementType(HeaderContent, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenExist(children) ? children : content}
    </ElementType>
  )
}

HeaderContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

HeaderContent.handledProps = ['as', 'children', 'className', 'content']

export default createComponent(HeaderContent)
