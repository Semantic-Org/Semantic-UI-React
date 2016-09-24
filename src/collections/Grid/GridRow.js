import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useWidthProp,
  useKeyOnly,
  useTextAlignProp,
  useValueAndKey,
  useVerticalAlignProp,
} from '../../lib'

function GridRow(props) {
  const { centered, children, className, color, columns, only, reversed, stretched, textAlign, verticalAlign } = props
  const classes = cx(
    className,
    color,
    useKeyOnly(centered, 'centered'),
    useWidthProp(columns, 'column', true),
    useValueAndKey(only, 'only'),
    useValueAndKey(reversed, 'reversed'),
    useKeyOnly(stretched, 'stretched'),
    useTextAlignProp(textAlign),
    useVerticalAlignProp(verticalAlign),
    'row'
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
    columns: SUI.WIDTHS,
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

  /** Primary content of the GridRow. */
  children: PropTypes.node,

  /** Classes that will be added to the GridRow className. */
  className: PropTypes.string,

  /** A grid row can be colored. */
  color: PropTypes.oneOf(GridRow._meta.props.color),

  /** Represents column count per line in Row. */
  columns: PropTypes.oneOf(GridRow._meta.props.columns),

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
