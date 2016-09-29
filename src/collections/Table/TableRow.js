import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useTextAlignProp,
  useVerticalAlignProp,
} from '../../lib'
import TableCell from './TableCell'

function TableRow(props) {
  const {
    active,
    children,
    className,
    disabled,
    error,
    itemAs,
    items,
    negative,
    positive,
    textAlign,
    verticalAlign,
    warning,
  } = props
  const classes = cx(
    useKeyOnly(active, 'active'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(error, 'error'),
    useKeyOnly(negative, 'negative'),
    useKeyOnly(positive, 'positive'),
    useKeyOnly(warning, 'warning'),
    useTextAlignProp(textAlign),
    useVerticalAlignProp(verticalAlign),
    className,
  )

  const ElementType = getElementType(TableRow, props)
  const rest = getUnhandledProps(TableRow, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      {_.map(items, (item) => TableCell.create(item, { as: itemAs }))}
    </ElementType>
  )
}

TableRow._meta = {
  name: 'TableRow',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
  props: {
    textAlign: SUI.TEXT_ALIGNMENTS,
    verticalAlign: SUI.VERTICAL_ALIGNMENTS,
  },
}

TableRow.defaultProps = {
  as: 'tr',
  itemAs: 'td',
}

TableRow.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A row can be active or selected by a user. */
  active: PropTypes.bool,

  /** Primary content of the TableRow. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content', 'icon']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the TableRow className. */
  className: PropTypes.string,

  /** A row can be disabled. */
  disabled: PropTypes.bool,

  /** A row may call attention to an error or a negative value. */
  error: PropTypes.bool,

  /** An element type to render as (string or function). */
  itemAs: customPropTypes.as,

  /** Shorthand array of props for TableCell. Mutually exclusive with children. */
  items: customPropTypes.every([
    customPropTypes.disallow(['children']),
    // Array of shorthands for MenuItem
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.object,
    ])),
  ]),

  /** A row may let a user know whether a value is bad. */
  negative: PropTypes.bool,

  /** A row may let a user know whether a value is good. */
  positive: PropTypes.bool,

  /** A table row can adjust its text alignment. */
  textAlign: PropTypes.oneOf(TableRow._meta.props.textAlign),

  /** A table row can adjust its vertical alignment. */
  verticalAlign: PropTypes.oneOf(TableRow._meta.props.verticalAlign),

  /** A row may warn a user. */
  warning: PropTypes.bool,
}

TableRow.create = createShorthandFactory(TableRow, items => ({ items }))

export default TableRow
