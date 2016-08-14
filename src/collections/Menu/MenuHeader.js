import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getUnhandledProps,
  META,
} from '../../lib'

function MenuHeader(props) {
  const { children, className } = props
  const classes = cx(className, 'header')
  const rest = getUnhandledProps(MenuHeader, props)

  return <a {...rest} className={classes}>{children}</a>
}

MenuHeader._meta = {
  name: 'MenuItem',
  type: META.TYPES.COLLECTION,
  parent: 'Menu',
}

MenuHeader.propTypes = {
  /** Primary content of the MenuItem. */
  children: PropTypes.node,

  /** Classes that will be added to the MenuItem className. */
  className: PropTypes.string,
}

export default MenuHeader
