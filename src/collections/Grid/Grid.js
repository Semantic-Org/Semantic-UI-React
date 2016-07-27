import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'
import GridColumn from './GridColumn'
import GridRow from './GridRow'

/** A grid is used to harmonize negative space in a layout. */
function Grid(props) {
  const { children, className } = props
  const classes = cx(
    'ui',
    className,
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
}

Grid.propTypes = {
  /** Primary content of the Grid. */
  children: PropTypes.node,

  /** Classes that will be added to the Grid className. */
  className: PropTypes.string,
}

export default Grid
