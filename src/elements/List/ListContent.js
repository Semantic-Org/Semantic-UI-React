import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getComponentType,
  getUnhandledProps,
  SUI,
  getValueAndKey,
  getVerticalAlignProp,
} from '../../lib'
import ListDescription from './ListDescription'
import ListHeader from './ListHeader'

/**
 * A list item can contain a content.
 */
const ListContent = React.forwardRef(function (props, ref) {
  const { children, className, content, description, floated, header, verticalAlign } = props

  const classes = cx(
    getValueAndKey(floated, 'floated'),
    getVerticalAlignProp(verticalAlign),
    'content',
    className,
  )
  const rest = getUnhandledProps(ListContent, props)
  const ElementType = getComponentType(props)

  if (!childrenUtils.isNil(children)) {
    return (
      <ElementType {...rest} className={classes} ref={ref}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {ListHeader.create(header)}
      {ListDescription.create(description)}
      {content}
    </ElementType>
  )
})

ListContent.displayName = 'ListContent'
ListContent.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for ListDescription. */
  description: customPropTypes.itemShorthand,

  /** An list content can be floated left or right. */
  floated: PropTypes.oneOf(SUI.FLOATS),

  /** Shorthand for ListHeader. */
  header: customPropTypes.itemShorthand,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS),
}

ListContent.create = createShorthandFactory(ListContent, (content) => ({ content }))

export default ListContent
