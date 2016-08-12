import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getUnhandledProps,
  META,
  SUI,
  useColumnsProp,
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
    children, className, celled, centered, columns, divided, doubling, padded, relaxed, reversed, stackable, textAlign,
    verticalAlign,
  } = props
  const classes = cx(
    'ui',
    className,
    useColumnsProp(columns, true),
    useKeyOrValueAndKey(celled, 'celled'),
    useKeyOnly(centered, 'centered'),
    useKeyOrValueAndKey(divided, 'divided'),
    useKeyOnly(doubling, 'doubling'),
    useKeyOrValueAndKey(padded, 'padded'),
    useKeyOrValueAndKey(relaxed, 'relaxed'),
    useValueAndKey(reversed, 'reversed'),
    useKeyOnly(stackable, 'stackable'),
    useTextAlignProp(textAlign),
    useVerticalAlignProp(verticalAlign),
    'grid'
  )
  const rest = getUnhandledProps(Grid, props)

  return <div {...rest} className={classes}>{children}</div>
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

  /** Represents column count per line in Grid. */
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

  /** A grid its text alignment. */
  textAlign: PropTypes.oneOf(Grid._meta.props.textAlign),

  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: PropTypes.oneOf(GridColumn._meta.props.verticalAlign),
}

export default Grid
