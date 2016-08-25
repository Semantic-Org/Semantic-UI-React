import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useTextAlignProp,
  useValueAndKey,
  useVerticalAlignProp,
  useWidthProp,
} from '../../lib'

function GridColumn(props) {
  const {
    children, computer, className, color, floated, largeScreen, mobile, only, tablet, textAlign, verticalAlign,
    widescreen, width,
  } = props
  const classes = cx(
    className,
    color,
    useWidthProp(computer, 'wide computer'),
    useValueAndKey(floated, 'floated'),
    useWidthProp(largeScreen, 'wide large screen'),
    useWidthProp(mobile, 'wide mobile'),
    useValueAndKey(only, 'only'),
    useWidthProp(tablet, 'wide tablet'),
    useTextAlignProp(textAlign),
    useVerticalAlignProp(verticalAlign),
    useWidthProp(widescreen, 'wide widescreen'),
    useWidthProp(width, 'wide'),
    'column'
  )
  const rest = getUnhandledProps(GridColumn, props)
  const ElementType = getElementType(GridColumn, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

GridColumn._meta = {
  name: 'GridColumn',
  parent: 'Grid',
  type: META.TYPES.COLLECTION,
  props: {
    color: SUI.COLORS,
    computer: SUI.WIDTHS,
    floated: SUI.FLOATS,
    largeScreen: SUI.WIDTHS,
    mobile: SUI.WIDTHS,
    only: ['computer', 'large screen', 'mobile', 'tablet mobile', 'tablet', 'widescreen'],
    tablet: SUI.WIDTHS,
    textAlign: SUI.TEXT_ALIGNMENTS,
    verticalAlign: SUI.VERTICAL_ALIGNMENTS,
    widescreen: SUI.WIDTHS,
    width: SUI.WIDTHS,
  },
}

GridColumn.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the GridColumn. */
  children: PropTypes.node,

  /** Classes that will be added to the GridColumn className. */
  className: PropTypes.string,

  /** A column can specify a width for a computer. */
  computer: PropTypes.oneOf(GridColumn._meta.props.width),

  /** A grid column can be colored. */
  color: PropTypes.oneOf(GridColumn._meta.props.color),

  /** A column can sit flush against the left or right edge of a row. */
  floated: PropTypes.oneOf(GridColumn._meta.props.floated),

  /** A column can specify a width for a large screen device. */
  largeScreen: PropTypes.oneOf(GridColumn._meta.props.width),

  /** A column can specify a width for a mobile device. */
  mobile: PropTypes.oneOf(GridColumn._meta.props.width),

  /** A column can appear only for a specific device, or screen sizes. */
  only: PropTypes.oneOf(GridColumn._meta.props.only),

  /** A column can specify a width for a tablet device. */
  tablet: PropTypes.oneOf(GridColumn._meta.props.width),

  /** A row can specify its text alignment. */
  textAlign: PropTypes.oneOf(GridColumn._meta.props.textAlign),

  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: PropTypes.oneOf(GridColumn._meta.props.verticalAlign),

  /** A column can specify a width for a wide screen device. */
  widescreen: PropTypes.oneOf(GridColumn._meta.props.width),

  /** Represents width of column. */
  width: PropTypes.oneOf(GridColumn._meta.props.width),
}

export default GridColumn
