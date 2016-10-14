import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useTextAlignProp,
  useValueAndKey,
  useVerticalAlignProp,
  useWidthProp,
} from '../../lib'

/**
 * A row sub-component for Grid.
 */
function GridRow(props) {
  const {
    centered,
    children,
    className,
    color,
    columns,
    divided,
    only,
    reversed,
    stretched,
    textAlign,
    verticalAlign,
  } = props

  const classes = cx(
    color,
    useKeyOnly(centered, 'centered'),
    useKeyOnly(divided, 'divided'),
    useKeyOnly(stretched, 'stretched'),
    useTextAlignProp(textAlign),
    useValueAndKey(only, 'only'),
    useValueAndKey(reversed, 'reversed'),
    useVerticalAlignProp(verticalAlign),
    useWidthProp(columns, 'column', true),
    'row',
    className,
  )
  const rest = getUnhandledProps(GridRow, props)
  const ElementType = getElementType(GridRow, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

GridRow._meta = {
  name: 'GridRow',
  parent: 'Grid',
  type: META.TYPES.COLLECTION,
  props: {
    color: SUI.COLORS,
    columns: [...SUI.WIDTHS, 'equal'],
    only: ['computer', 'large screen', 'mobile', 'tablet mobile', 'tablet', 'widescreen'],
    reversed: ['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically'],
    textAlign: SUI.TEXT_ALIGNMENTS,
    verticalAlign: SUI.VERTICAL_ALIGNMENTS,
  },
}

GridRow.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A row can have its columns centered. */
  centered: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A grid row can be colored. */
  color: PropTypes.oneOf(GridRow._meta.props.color),

  /** Represents column count per line in Row. */
  columns: PropTypes.oneOf(GridRow._meta.props.columns),

  /** A row can have dividers between its columns. */
  divided: PropTypes.bool,

  /** A row can appear only for a specific device, or screen sizes. */
  only: PropTypes.oneOf(GridRow._meta.props.only),

  /** A  row can specify that its columns should reverse order at different device sizes. */
  reversed: PropTypes.oneOf(GridRow._meta.props.reversed),

  /** An can stretch its contents to take up the entire column height. */
  stretched: PropTypes.bool,

  /** A row can specify its text alignment. */
  textAlign: PropTypes.oneOf(GridRow._meta.props.textAlign),

  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: PropTypes.oneOf(GridRow._meta.props.verticalAlign),
}

export default GridRow
