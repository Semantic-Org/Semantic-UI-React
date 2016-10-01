import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useValueAndKey,
  useVerticalAlignProp,
} from '../../lib'

function ListContent(props) {
  const {
    children,
    className,
    floated,
    verticalAlign,
  } = props
  const classes = cx(
    useValueAndKey(floated, 'floated'),
    useVerticalAlignProp(verticalAlign),
    'content',
    className,
  )

  const ElementType = getElementType(ListContent, props)
  const rest = getUnhandledProps(ListContent, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
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

  /** Primary content of the ListContent. */
  children: PropTypes.node,

  /** Classes to add to the ListContent className. */
  className: PropTypes.string,

  /** An list content can be floated left or right. */
  floated: PropTypes.oneOf(ListContent._meta.props.floated),

  /** An element inside a list can be vertically aligned. */
  verticalAlign: PropTypes.oneOf(ListContent._meta.props.verticalAlign),
}

export default ListContent
