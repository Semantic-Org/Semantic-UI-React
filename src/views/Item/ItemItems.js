import React, { PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'

function ItemItems(props) {
  const { className, children, ...rest } = props
  const classes = cx('ui', className, 'items')

  return <div {...rest} className={classes}>{children}</div>
}

ItemItems.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

ItemItems._meta = {
  library: META.library.semanticUI,
  name: 'ItemItems',
  type: META.type.view,
  parent: 'Item',
}

export default ItemItems
