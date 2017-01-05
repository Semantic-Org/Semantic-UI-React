import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useValueAndKey,
  useVerticalAlignProp,
} from '../../lib'

import ListDescription from './ListDescription'
import ListHeader from './ListHeader'

function ListContent(props) {
  const {
    children,
    className,
    content,
    description,
    floated,
    header,
    verticalAlign,
  } = props

  const classes = cx(
    useValueAndKey(floated, 'floated'),
    useVerticalAlignProp(verticalAlign),
    'content',
    className,
  )
  const rest = getUnhandledProps(ListContent, props)
  const ElementType = getElementType(ListContent, props)

  if (!_.isNil(children)) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      {ListHeader.create(header)}
      {ListDescription.create(description)}
      {content}
    </ElementType>
  )
}

ListContent._meta = {
  name: 'ListContent',
  parent: 'List',
  type: META.TYPES.ELEMENT,
  props: {
    floated: SUI.FLOATS,
    verticalAlign: SUI.VERTICAL_ALIGNMENTS,
  },
}

ListContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for ListDescription. */
  description: customPropTypes.itemShorthand,

  /** An list content can be floated left or right. */
  floated: PropTypes.oneOf(ListContent._meta.props.floated),

  /** Shorthand for ListHeader. */
  header: customPropTypes.itemShorthand,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: PropTypes.oneOf(ListContent._meta.props.verticalAlign),
}

ListContent.create = createShorthandFactory(ListContent, content => ({ content }))

export default ListContent
