import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function GridRow(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'Row'
  )
  const rest = getUnhandledProps(GridRow, props)

  return <div {...rest} className={classes}>{children}</div>
}

GridRow._meta = {
  library: META.library.semanticUI,
  name: 'GridRow',
  parent: 'Grid',
  type: META.type.collection,
}

GridRow.propTypes = {
  /** Primary content of the GridRow. */
  children: PropTypes.node,

  /** Classes that will be added to the GridRow className. */
  className: PropTypes.string,
}

export default GridRow
