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
  color: PropTypes.oneOf(SUI.COLORS),

  /** Represents column count per line in Row. */
  columns: PropTypes.oneOf([...SUI.WIDTHS, 'equal']),

  /** A row can have dividers between its columns. */
  divided: PropTypes.bool,

  /** A row can appear only for a specific device, or screen sizes. */
  only: PropTypes.oneOf(['computer', 'large screen', 'mobile', 'tablet mobile', 'tablet', 'widescreen']),

  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed: PropTypes.oneOf([
    'computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically',
  ]),

  /** A row can stretch its contents to take up the entire column height. */
  stretched: PropTypes.bool,

  /** A row can specify its text alignment. */
  textAlign: PropTypes.oneOf(SUI.TEXT_ALIGNMENTS),

  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS),
}

export default GridRow
