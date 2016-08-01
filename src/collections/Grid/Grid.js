import cx from 'classnames'
import React, { PropTypes } from 'react'

import numberToWord from '../../utils/numberToWord'
import META from '../../utils/Meta'
import {
  getUnhandledProps,
  useAlignedProp,
  useKeyOnly,
  useKeyOrValueAndKey,
  useValueAndKey,
} from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'
import GridColumn from './GridColumn'
import GridRow from './GridRow'

/** A grid is used to harmonize negative space in a layout. */
function Grid(props) {
  const {
    aligned, children, className, celled, centered, column, divided, doubling, padded, relaxed, stackable, vertical,
    width,
  } = props
  const classes = cx(
    'ui',
    className,
    useAlignedProp(aligned),
    useValueAndKey(numberToWord(column), 'column'),
    useKeyOrValueAndKey(celled, 'celled'),
    useKeyOnly(centered, 'centered'),
    useKeyOrValueAndKey(divided, 'divided'),
    useKeyOnly(doubling, 'doubling'),
    useKeyOrValueAndKey(padded, 'padded'),
    useKeyOrValueAndKey(relaxed, 'relaxed'),
    useKeyOnly(stackable, 'stackable'),
    useValueAndKey(vertical, 'aligned'),
    useValueAndKey(width, 'width'),
    'grid'
  )
  const rest = getUnhandledProps(Grid, props)

  return <div {...rest} className={classes}>{children}</div>
}

Grid.Column = GridColumn
Grid.Row = GridRow

Grid._meta = {
  library: META.library.semanticUI,
  name: 'Grid',
  type: META.type.collection,
  props: {
    aligned: sui.textAlignments,
    celled: ['internally'],
    column: sui.widths,
    divided: ['vertically'],
    padded: ['horizontally', 'vertically'],
    relaxed: ['very'],
    width: ['equal'],
  },
}

Grid.propTypes = {
  /** A grid its text alignment. */
  aligned: PropTypes.oneOf(Grid._meta.props.aligned),

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
  column: PropTypes.oneOf(Grid._meta.props.column),

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

  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: PropTypes.bool,

  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  vertical: PropTypes.oneOf(GridColumn._meta.props.vertical),

  /** A row can automatically resize all elements to split the available width evenly. */
  width: PropTypes.oneOf(Grid._meta.props.width),
}

export default Grid
