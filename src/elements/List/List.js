import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import ListContent from './ListContent'
import ListDescription from './ListDescription'
import ListHeader from './ListHeader'
import ListIcon from './ListIcon'
import ListItem from './ListItem'
import ListList from './ListList'

function List(props) {
  const {
    bulleted,
    children,
    className,
    divided,
    horizontal,
    relaxed,
  } = props
  const classes = cx(
    'ui',
    useKeyOnly(bulleted, 'bulleted'),
    useKeyOnly(divided, 'divided'),
    useKeyOnly(horizontal, 'horizontal'),
    useKeyOnly(relaxed, 'relaxed'),
    className,
    'list'
  )

  const ElementType = getElementType(List, props)
  const rest = getUnhandledProps(List, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

List._meta = {
  name: 'List',
  type: META.TYPES.ELEMENT,
}

List.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A list can mark items with a bullet. */
  bulleted: PropTypes.bool,

  /** Primary content of the List. */
  children: PropTypes.node,

  /** Classes to add to the List className. */
  className: PropTypes.string,

  divided: PropTypes.bool,

  horizontal: PropTypes.bool,

  relaxed: PropTypes.bool,
}

List.Content = ListContent
List.Description = ListDescription
List.Header = ListHeader
List.Icon = ListIcon
List.Item = ListItem
List.List = ListList

export default List
