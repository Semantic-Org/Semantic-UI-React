import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useWidthProp,
  useKeyOnly,
  useKeyOrValueAndKey,
  useTextAlignProp,
  useValueAndKey,
  useVerticalAlignProp,
} from '../../lib'
import GridColumn from './GridColumn'
import GridRow from './GridRow'

/** A grid is used to harmonize negative space in a layout. */
function Grid(props) {
  const {
    children, className, celled, centered, columns, divided, doubling, padded, relaxed, reversed, stackable, stretched,
    textAlign, verticalAlign,
  } = props
  const classes = cx(
    'ui',
    className,
    useWidthProp(columns, 'column', true),
    useKeyOrValueAndKey(celled, 'celled'),
    useKeyOnly(centered, 'centered'),
    useKeyOrValueAndKey(divided, 'divided'),
    useKeyOnly(doubling, 'doubling'),
    useKeyOrValueAndKey(padded, 'padded'),
    useKeyOrValueAndKey(relaxed, 'relaxed'),
    useValueAndKey(reversed, 'reversed'),
    useKeyOnly(stackable, 'stackable'),
    useKeyOnly(stretched, 'stretched'),
    useTextAlignProp(textAlign),
    useVerticalAlignProp(verticalAlign),
    'grid'
  )
  const rest = getUnhandledProps(Grid, props)
  const ElementType = getElementType(Grid, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

Grid.Column = GridColumn
Grid.Row = GridRow

Grid._meta = {
  name: 'Grid',
  type: META.TYPES.COLLECTION,
  props: {
    celled: ['internally'],
    columns: [...SUI.WIDTHS, 'equal'],
    divided: ['vertically'],
    padded: ['horizontally', 'vertically'],
    relaxed: ['very'],
    reversed: ['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically'],
    textAlign: SUI.TEXT_ALIGNMENTS,
    verticalAlign: SUI.VERTICAL_ALIGNMENTS,
  },
}

Grid.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** A grid can have rows divided into cells. */
  celled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Grid._meta.props.celled),
  ]),

  /** A grid can have its columns centered. */
  centered: PropTypes.bool,

  /** Primary content of the Grid. */
  children: PropTypes.node,

  /** Classes that will be added to the Grid className. */
  className: PropTypes.string,

  /** Represents column count per row in Grid. */
  columns: PropTypes.oneOf(Grid._meta.props.columns),

  /** A grid can have dividers between its columns. */
  divided: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Grid._meta.props.divided),
  ]),

  /** A grid can double its column width on tablet and mobile sizes. */
  doubling: PropTypes.bool,

  /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
  padded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Grid._meta.props.padded),
  ]),

  /** A grid can increase its gutters to allow for more negative space. */
  relaxed: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Grid._meta.props.relaxed),
  ]),

  /** A grid can specify that its columns should reverse order at different device sizes. */
  reversed: PropTypes.oneOf(Grid._meta.props.reversed),

  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: PropTypes.bool,

  /** An can stretch its contents to take up the entire grid height. */
  stretched: PropTypes.bool,

  /** A grid can specify its text alignment. */
  textAlign: PropTypes.oneOf(Grid._meta.props.textAlign),

  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: PropTypes.oneOf(GridColumn._meta.props.verticalAlign),
}

export default Grid
