import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
  useTextAlignProp,
  useValueAndKey,
  useVerticalAlignProp,
  useWidthProp,
} from '../../lib'
import GridColumn from './GridColumn'
import GridRow from './GridRow'

/**
 * A grid is used to harmonize negative space in a layout.
 */
function Grid(props) {
  const {
    celled,
    centered,
    container,
    children,
    className,
    columns,
    divided,
    doubling,
    padded,
    relaxed,
    reversed,
    stackable,
    stretched,
    textAlign,
    verticalAlign,
  } = props

  const classes = cx(
    'ui',
    useKeyOnly(centered, 'centered'),
    useKeyOnly(container, 'container'),
    useKeyOnly(doubling, 'doubling'),
    useKeyOnly(stackable, 'stackable'),
    useKeyOnly(stretched, 'stretched'),
    useKeyOrValueAndKey(celled, 'celled'),
    useKeyOrValueAndKey(divided, 'divided'),
    useKeyOrValueAndKey(padded, 'padded'),
    useKeyOrValueAndKey(relaxed, 'relaxed'),
    useTextAlignProp(textAlign),
    useValueAndKey(reversed, 'reversed'),
    useVerticalAlignProp(verticalAlign),
    useWidthProp(columns, 'column', true),
    'grid',
    className,
  )
  const rest = getUnhandledProps(Grid, props)
  const ElementType = getElementType(Grid, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

Grid.Column = GridColumn
Grid.Row = GridRow

Grid._meta = {
  name: 'Grid',
  type: META.TYPES.COLLECTION,
  props: {
    celled: ['internally'],
    columns: [...SUI.WIDTHS, 'equal'],
    divided: ['vertically'],
    padded: ['horizontally', 'vertically'],
    relaxed: ['very'],
    reversed: ['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically'],
    textAlign: SUI.TEXT_ALIGNMENTS,
    verticalAlign: SUI.VERTICAL_ALIGNMENTS,
  },
}

Grid.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A grid can have rows divided into cells. */
  celled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Grid._meta.props.celled),
  ]),

  /** A grid can have its columns centered. */
  centered: PropTypes.bool,

  /** A grid can be combined with a container to use avaiable layout and alignment */
  container: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Represents column count per row in Grid. */
  columns: PropTypes.oneOf(Grid._meta.props.columns),

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

  /** A grid can specify that its columns should reverse order at different device sizes. */
  reversed: PropTypes.oneOf(Grid._meta.props.reversed),

  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: PropTypes.bool,

  /** An can stretch its contents to take up the entire grid height. */
  stretched: PropTypes.bool,

  /** A grid can specify its text alignment. */
  textAlign: PropTypes.oneOf(Grid._meta.props.textAlign),

  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: PropTypes.oneOf(GridColumn._meta.props.verticalAlign),
}

export default Grid
