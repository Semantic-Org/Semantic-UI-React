import cx from 'classnames'
import React, { PropTypes } from 'react'

import numberToWord from '../../utils/numberToWord'
import META from '../../utils/Meta'
import { getUnhandledProps, useValueAndKey } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'

function GridColumn(props) {
  const { children, className, width } = props
  const classes = cx(
    className,
    useValueAndKey(numberToWord(width), 'wide'),
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
  props: {
    width: sui.widths,
  },
}

GridColumn.propTypes = {
  /** Primary content of the GridColumn. */
  children: PropTypes.node,

  /** Classes that will be added to the GridColumn className. */
  className: PropTypes.string,

  width: PropTypes.oneOf(GridColumn._meta.props.width),
}

export default GridColumn
