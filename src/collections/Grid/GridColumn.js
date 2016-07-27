import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function GridColumn(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'column'
  )
  const rest = getUnhandledProps(GridColumn, props)

  return <div {...rest} className={classes}>{children}</div>
}

GridColumn._meta = {
  library: META.library.semanticUI,
  name: 'GridColumn',
  parent: 'Grid',
  type: META.type.collection,
}

GridColumn.propTypes = {
  /** Primary content of the GridColumn. */
  children: PropTypes.node,

  /** Classes that will be added to the GridColumn className. */
  className: PropTypes.string,
}

export default GridColumn
