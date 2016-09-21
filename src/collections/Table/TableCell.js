import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
} from '../../lib'

function TableCell(props) {
  const { children, className, singleLine } = props
  const classes = cx(
    useKeyOnly(singleLine, 'single line'),
    className,
  )

  const ElementType = getElementType(TableCell, props)
  const rest = getUnhandledProps(TableCell, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

TableCell._meta = {
  name: 'TableCell',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
  props: {
    textAlign: SUI.TEXT_ALIGNMENTS,
  },
}

TableCell.defaultProps = {
  as: 'td',
}

TableCell.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the TableCell. */
  children: PropTypes.node,

  /** Classes that will be added to the TableCell className. */
  className: PropTypes.string,

  /** A table can specify that its cell contents should remain on a single line, and not wrap. */
  singleLine: PropTypes.bool,

  /** A table header, row, or cell can adjust its text alignment. */
  textAlign: PropTypes.oneOf(TableCell._meta.props.textAlign),
}

export default TableCell
