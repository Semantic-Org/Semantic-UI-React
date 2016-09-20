import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function TableFoot(props) {
  const { children, className } = props
  const classes = cx(className)
  const ElementType = getElementType(TableFoot, props)
  const rest = getUnhandledProps(TableFoot, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

TableFoot._meta = {
  name: 'TableFoot',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

TableFoot.defaultProps = {
  as: 'thead',
}

TableFoot.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the TableFoot. */
  children: PropTypes.node,

  /** Classes that will be added to the TableFoot className. */
  className: PropTypes.string,
}

export default TableFoot
