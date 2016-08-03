import cx from 'classnames'
import React, { PropTypes } from 'react'

import numberToWord from '../../utils/numberToWord'
import META from '../../utils/Meta'
import {
  getUnhandledProps,
  useKeyOnly,
  useTextAlignProp,
  useValueAndKey,
  useVerticalAlignProp,
} from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'

function GridRow(props) {
  const { centered, children, className, color, column, only, reversed, stretched, textAlign, verticalAlign } = props
  const classes = cx(
    className,
    color,
    useKeyOnly(centered, 'centered'),
    useValueAndKey(numberToWord(column), 'column'),
    useValueAndKey(only, 'only'),
    useValueAndKey(reversed, 'reversed'),
    useKeyOnly(stretched, 'stretched'),
    useTextAlignProp(textAlign),
    useVerticalAlignProp(verticalAlign),
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
    color: sui.colors,
    column: sui.widths,
    only: ['computer', 'large screen', 'mobile', 'tablet mobile', 'tablet', 'widescreen'],
    reversed: ['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically'],
    textAlign: sui.textAlignments,
    verticalAlign: sui.verticalAlignments,
  },
}

GridRow.propTypes = {
  /** A row can have its columns centered. */
  centered: PropTypes.bool,

  /** Primary content of the GridRow. */
  children: PropTypes.node,

  /** Classes that will be added to the GridRow className. */
  className: PropTypes.string,

  /** A grid row can be colored. */
  color: PropTypes.oneOf(GridRow._meta.props.color),

  /** Represents column count per line in Row. */
  column: PropTypes.oneOf(GridRow._meta.props.column),

  /** A row can appear only for a specific device, or screen sizes. */
  only: PropTypes.oneOf(GridRow._meta.props.only),

  /** A  row can specify that its columns should reverse order at different device sizes. */
  reversed: PropTypes.oneOf(GridRow._meta.props.reversed),

  /** An can stretch its contents to take up the entire column height. */
  stretched: PropTypes.bool,

  /** A row can specify its text alignment. */
  textAlign: PropTypes.oneOf(GridRow._meta.props.textAlign),

  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: PropTypes.oneOf(GridRow._meta.props.verticalAlign),
}

export default GridRow
