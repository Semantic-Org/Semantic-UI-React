import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function TableFooter(props) {
  const { children, className, fullWidth } = props
  const classes = cx(
    useKeyOnly(fullWidth, 'full-width'),
    className
  )

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
  as: 'tfoot',
}

TableFooter.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the TableFooter. */
  children: PropTypes.node,

  /** Classes that will be added to the TableFooter className. */
  className: PropTypes.string,

  fullWidth: PropTypes.bool,
}

export default TableFooter
