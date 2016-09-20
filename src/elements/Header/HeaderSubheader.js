import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function HeaderSubheader(props) {
  const { children, className, content } = props
  const classes = cx('sub header', className)
  const rest = getUnhandledProps(HeaderSubheader, props)
  const ElementType = getElementType(HeaderSubheader, props)

  return (
    <ElementType className={classes} {...rest}>
      {children || content}
    </ElementType>
  )
}

HeaderSubheader._meta = {
  name: 'HeaderSubheader',
  parent: 'Header',
  type: META.TYPES.ELEMENT,
}

HeaderSubheader.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the HeaderSubheader. Mutually exclusive with content */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes to add to the subheader className. */
  className: PropTypes.string,

  /** Shorthand for primary content. Mutually exclusive with children */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),
}

export default HeaderSubheader
