import React, { PropTypes } from 'react'
import cx from 'classnames'
import { getElementType, getUnhandledProps, META } from '../../lib'

function HeaderSubheader(props) {
  const { children, className } = props
  const classes = cx('sub header', className)
  const rest = getUnhandledProps(HeaderSubheader, props)
  const ElementType = getElementType(HeaderSubheader, props)

  return (
    <ElementType className={classes} {...rest}>
      {children}
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

  /** Primary content of the HeaderSubheader */
  children: PropTypes.node,

  /** Classes to add to the subheader className. */
  className: PropTypes.string,
}

export default HeaderSubheader
