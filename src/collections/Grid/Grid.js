import cx from 'classnames'
import React, { PropTypes } from 'react'

import numberToWord from '../../utils/numberToWord'
import META from '../../utils/Meta'
import { getUnhandledProps, useKeyOrValueAndKey, useValueAndKey } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'
import GridColumn from './GridColumn'
import GridRow from './GridRow'

/** A grid is used to harmonize negative space in a layout. */
function Grid(props) {
  const { children, className, celled, column, divided, floated } = props
  const classes = cx(
    'ui',
    className,
    useValueAndKey(numberToWord(column), 'column'),
    useKeyOrValueAndKey(celled, 'celled'),
    useKeyOrValueAndKey(divided, 'divided'),
    useValueAndKey(floated, 'floated'),
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
    celled: ['internally'],
    column: sui.widths,
    divided: ['vertically'],
    floated: sui.floats,
  },
}

Grid.propTypes = {
  /** Primary content of the Grid. */
  children: PropTypes.node,

  /** Classes that will be added to the Grid className. */
  className: PropTypes.string,

  /** A grid can have rows divided into cells. */
  celled: PropTypes.oneOf(Grid._meta.props.celled),

  /** Represents column count per line in Grid. */
  column: PropTypes.oneOf(Grid._meta.props.column),

  /** A grid can have dividers between its columns. */
  divided: PropTypes.oneOf(Grid._meta.props.divided),

  /** A column can sit flush against the left or right edge of a row. */
  floated: PropTypes.oneOf(Grid._meta.props.floated),
}

export default Grid
