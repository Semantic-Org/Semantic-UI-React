import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Item(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'item'
  )
  const rest = getUnhandledProps(Item, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Item._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Item'
}

Item.propTypes = {
  /** Primary content of the Item. */
  children: PropTypes.node,

  /** Classes to add to the Item className. */
  className: PropTypes.string,
}

export default Item
