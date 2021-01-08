import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
  useMultipleProp,
  useTextAlignProp,
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
    children,
    className,
    columns,
    container,
    divided,
    doubling,
    inverted,
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
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(stackable, 'stackable'),
    useKeyOnly(stretched, 'stretched'),
    useKeyOrValueAndKey(celled, 'celled'),
    useKeyOrValueAndKey(divided, 'divided'),
    useKeyOrValueAndKey(padded, 'padded'),
    useKeyOrValueAndKey(relaxed, 'relaxed'),
    useMultipleProp(reversed, 'reversed'),
    useTextAlignProp(textAlign),
    useVerticalAlignProp(verticalAlign),
    useWidthProp(columns, 'column', true),
    'grid',
    className,
  )
  const rest = getUnhandledProps(Grid, props)
  const ElementType = getElementType(Grid, props)

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Grid.Column = GridColumn
Grid.Row = GridRow

Grid.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A grid can have rows divided into cells. */
  celled: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['internally'])]),

  /** A grid can have its columns centered. */
  centered: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Represents column count per row in Grid. */
  columns: PropTypes.oneOf([...SUI.WIDTHS, 'equal']),

  /** A grid can be combined with a container to use the available layout and alignment. */
  container: PropTypes.bool,

  /** A grid can have dividers between its columns. */
  divided: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['vertically'])]),

  /** A grid can double its column width on tablet and mobile sizes. */
  doubling: PropTypes.bool,

  /** A grid's colors can be inverted. */
  inverted: PropTypes.bool,

  /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
  padded: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['horizontally', 'vertically'])]),

  /** A grid can increase its gutters to allow for more negative space. */
  relaxed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])]),

  /** A grid can specify that its columns should reverse order at different device sizes. */
  reversed: customPropTypes.multipleProp([
    'computer',
    'computer vertically',
    'mobile',
    'mobile vertically',
    'tablet',
    'tablet vertically',
  ]),

  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: PropTypes.bool,

  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: PropTypes.bool,

  /** A grid can specify its text alignment. */
  textAlign: PropTypes.oneOf(SUI.TEXT_ALIGNMENTS),

  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS),
}

export default Grid
