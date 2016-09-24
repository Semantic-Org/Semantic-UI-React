import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
} from '../../lib'

function TableCell(props) {
  const {
    active,
    children,
    className,
    collapsing,
    disabled,
    error,
    negative,
    positive,
    singleLine,
    warning,
  } = props
  const classes = cx(
    useKeyOnly(active, 'active'),
    useKeyOnly(collapsing, 'collapsing'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(error, 'error'),
    useKeyOnly(negative, 'negative'),
    useKeyOnly(positive, 'positive'),
    useKeyOnly(singleLine, 'single line'),
    useKeyOnly(warning, 'warning'),
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
  as: customPropTypes.as,

  /** A cell can be active or selected by a user. */
  active: PropTypes.bool,

  /** Primary content of the TableCell. */
  children: PropTypes.node,

  /** Classes that will be added to the TableCell className. */
  className: PropTypes.string,

  collapsing: PropTypes.bool,

  /** A cell can be disabled. */
  disabled: PropTypes.bool,

  /** A cell may call attention to an error or a negative value. */
  error: PropTypes.bool,

  /** A cell may let a user know whether a value is bad. */
  negative: PropTypes.bool,

  /** A cell may let a user know whether a value is good. */
  positive: PropTypes.bool,

  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine: PropTypes.bool,

  /** A table header, row, or cell can adjust its text alignment. */
  textAlign: PropTypes.oneOf(TableCell._meta.props.textAlign),

  /** A cell may warn a user. */
  warning: PropTypes.bool,
}

export default TableCell
