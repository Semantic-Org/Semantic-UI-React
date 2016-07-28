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
  const { children, className, column, divided } = props
  const classes = cx(
    'ui',
    className,
    useValueAndKey(numberToWord(column), 'column'),
    useKeyOrValueAndKey(divided, 'divided'),
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
    column: sui.widths,
    divided: ['vertically'],
  },
}

Grid.propTypes = {
  /** Primary content of the Grid. */
  children: PropTypes.node,

  /** Classes that will be added to the Grid className. */
  className: PropTypes.string,

  /** Represents column count per line in Grid. */
  column: PropTypes.oneOf(Grid._meta.props.column),

  /** A grid can have dividers between its columns. */
  divided: PropTypes.oneOf(Grid._meta.props.divided),
}

export default Grid
