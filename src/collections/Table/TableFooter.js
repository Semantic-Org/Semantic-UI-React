import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function TableFooter(props) {
  const { children, className } = props
  const classes = cx(className)
  const ElementType = getElementType(TableFooter, props)
  const rest = getUnhandledProps(TableFooter, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

TableFooter._meta = {
  name: 'TableFooter',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

TableFooter.defaultProps = {
  as: 'thead',
}

TableFooter.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the TableFooter. */
  children: PropTypes.node,

  /** Classes that will be added to the TableFooter className. */
  className: PropTypes.string,
}

export default TableFooter
