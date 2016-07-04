import React, { PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'

/**
 * I'm not sure a seperate file is necessary or if there's a better way.
 * Also not sure this is where this file would go.
 */

function ItemHeader(props) {
  const {
    children, className, ...rest,
    } = props

  const classes = cx(
    'header',
    className
  )

  return (
    <div className={classes} {...rest}>{children}</div>
  )
}

ItemHeader._meta = {
  name: 'ItemHeader',
  type: META.type.element,
}

ItemHeader.propTypes = {
  /** Primary content of the List */
  children: PropTypes.node,

  /** Classes to add to the list className. */
  className: PropTypes.string,
}

export default ItemHeader
