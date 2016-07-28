import cx from 'classnames'
import React, { PropTypes } from 'react'
import numberToWord from '../../utils/numberToWord'
import META from '../../utils/Meta'
import { getUnhandledProps, useValueAndKey } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'

function GridRow(props) {
  const { children, className, column } = props
  const classes = cx(
    className,
    useValueAndKey(numberToWord(column), 'column'),
    'row'
  )
  const rest = getUnhandledProps(GridRow, props)

  return <div {...rest} className={classes}>{children}</div>
}

GridRow._meta = {
  library: META.library.semanticUI,
  name: 'GridRow',
  parent: 'Grid',
  type: META.type.collection,
  props: {
    column: sui.widths,
  },
}

GridRow.propTypes = {
  /** Primary content of the GridRow. */
  children: PropTypes.node,

  /** Classes that will be added to the GridRow className. */
  className: PropTypes.string,

  /** Represents column count per line in Row. */
  column: PropTypes.oneOf(GridRow._meta.props.column),
}

export default GridRow
