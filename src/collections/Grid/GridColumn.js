import cx from 'classnames'
import React, { PropTypes } from 'react'

import numberToWord from '../../utils/numberToWord'
import META from '../../utils/Meta'
import { getUnhandledProps, useAlignedProp, useValueAndKey } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'

function GridColumn(props) {
  const { aligned, children, className, color, floated, width, vertical } = props
  const classes = cx(
    className,
    color,
    useAlignedProp(aligned),
    useValueAndKey(floated, 'floated'),
    useValueAndKey(numberToWord(width), 'wide'),
    useValueAndKey(vertical, 'aligned'),
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
    aligned: sui.textAlignments,
    color: sui.colors,
    floated: sui.floats,
    vertical: sui.verticalAlignments,
    width: sui.widths,
  },
}

GridColumn.propTypes = {
  /** A row can specify its text alignment. */
  aligned: PropTypes.oneOf(GridColumn._meta.props.aligned),

  /** Primary content of the GridColumn. */
  children: PropTypes.node,

  /** Classes that will be added to the GridColumn className. */
  className: PropTypes.string,

  /** A grid column can be colored. */
  color: PropTypes.oneOf(GridColumn._meta.props.color),

  /** A column can sit flush against the left or right edge of a row. */
  floated: PropTypes.oneOf(GridColumn._meta.props.floated),

  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  vertical: PropTypes.oneOf(GridColumn._meta.props.vertical),

  /** Represents width of column. */
  width: PropTypes.oneOf(GridColumn._meta.props.width),
}

export default GridColumn
