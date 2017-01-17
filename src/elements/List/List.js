import _ from 'lodash'
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
  useValueAndKey,
  useVerticalAlignProp,
} from '../../lib'
import ListContent from './ListContent'
import ListDescription from './ListDescription'
import ListHeader from './ListHeader'
import ListIcon from './ListIcon'
import ListItem from './ListItem'
import ListList from './ListList'

/**
 * A list groups related content
 */
function List(props) {
  const {
    animated,
    bulleted,
    celled,
    children,
    className,
    divided,
    floated,
    horizontal,
    inverted,
    items,
    link,
    ordered,
    relaxed,
    size,
    selection,
    verticalAlign,
  } = props

  const classes = cx(
    'ui',
    size,
    useKeyOnly(animated, 'animated'),
    useKeyOnly(bulleted, 'bulleted'),
    useKeyOnly(celled, 'celled'),
    useKeyOnly(divided, 'divided'),
    useKeyOnly(horizontal, 'horizontal'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(link, 'link'),
    useKeyOnly(ordered, 'ordered'),
    useKeyOnly(selection, 'selection'),
    useKeyOrValueAndKey(relaxed, 'relaxed'),
    useValueAndKey(floated, 'floated'),
    useVerticalAlignProp(verticalAlign),
    'list',
    className,
  )
  const rest = getUnhandledProps(List, props)
  const ElementType = getElementType(List, props)

  if (!_.isNil(children)) {
    return <ElementType {...rest} role='list' className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} role='list' className={classes}>
      {_.map(items, (item) => ListItem.create(item))}
    </ElementType>
  )
}

List._meta = {
  name: 'List',
  type: META.TYPES.ELEMENT,
  props: {
    floated: SUI.FLOATS,
    relaxed: ['very'],
    size: SUI.SIZES,
    verticalAlign: SUI.VERTICAL_ALIGNMENTS,
  },
}

List.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A list can animate to set the current item apart from the list. */
  animated: PropTypes.bool,

  /** A list can mark items with a bullet. */
  bulleted: PropTypes.bool,

  /** A list can divide its items into cells. */
  celled: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A list can show divisions between content. */
  divided: PropTypes.bool,

  /** An list can be floated left or right. */
  floated: PropTypes.oneOf(List._meta.props.floated),

  /** A list can be formatted to have items appear horizontally. */
  horizontal: PropTypes.bool,

  /** A list can be inverted to appear on a dark background. */
  inverted: PropTypes.bool,

  /** Shorthand array of props for ListItem. */
  items: customPropTypes.collectionShorthand,

  /** A list can be specially formatted for navigation links. */
  link: PropTypes.bool,

  /** A list can be ordered numerically. */
  ordered: PropTypes.bool,

  /** A list can relax its padding to provide more negative space. */
  relaxed: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(List._meta.props.relaxed),
  ]),

  /** A selection list formats list items as possible choices. */
  selection: PropTypes.bool,

  /** A list can vary in size. */
  size: PropTypes.oneOf(List._meta.props.size),

  /** An element inside a list can be vertically aligned. */
  verticalAlign: PropTypes.oneOf(List._meta.props.verticalAlign),
}

List.Content = ListContent
List.Description = ListDescription
List.Header = ListHeader
List.Icon = ListIcon
List.Item = ListItem
List.List = ListList

export default List
