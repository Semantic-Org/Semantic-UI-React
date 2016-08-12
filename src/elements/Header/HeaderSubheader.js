import React, { PropTypes } from 'react'
import cx from 'classnames'
import { getUnhandledProps, META } from '../../lib'

function HeaderSubheader(props) {
  const {
    children, className,
  } = props

  const classes = cx(
    'sub',
    className,
    'header'
  )

  const rest = getUnhandledProps(HeaderSubheader, props)

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

HeaderSubheader._meta = {
  name: 'HeaderSubheader',
  parent: 'Header',
  type: META.TYPES.ELEMENT,
}

HeaderSubheader.propTypes = {
  /** Primary content of the HeaderSubheader */
  children: PropTypes.node,

  /** Classes to add to the subheader className. */
  className: PropTypes.string,
}

export default HeaderSubheader
