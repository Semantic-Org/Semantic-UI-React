import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import Image from '../../elements/Image'

import ListContent from './ListContent'
import ListDescription from './ListDescription'
import ListHeader from './ListHeader'
import ListIcon from './ListIcon'

function ListItem(props) {
  const {
    active,
    children,
    className,
    content,
    description,
    disabled,
    header,
    icon,
    image,
    value,
  } = props

  const ElementType = getElementType(ListItem, props)
  const classes = cx(
    useKeyOnly(active, 'active'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(ElementType !== 'li', 'item'),
    className,
  )
  const rest = getUnhandledProps(ListItem, props)
  const valueProp = ElementType === 'li' ? { value } : { 'data-value': value }

  if (children) {
    return <ElementType {...rest} className={classes} {...valueProp}>{children}</ElementType>
  }

  const iconNode = ListIcon.create(icon)
  const imageNode = Image.create(image)

  if (_.isPlainObject(content)) {
    return (
      <ElementType {...rest} className={classes} {...valueProp}>
        {iconNode || imageNode}
        {ListContent.create(content, { header, description })}
      </ElementType>
    )
  }

  const headerNode = ListHeader.create(header)
  const descriptionNode = ListDescription.create(description)

  if (iconNode || imageNode) {
    return (
      <ElementType {...rest} className={classes} {...valueProp}>
        {iconNode || imageNode}
        {(content || headerNode || descriptionNode) && (
          <ListContent>
            {headerNode}
            {descriptionNode}
            {content}
          </ListContent>
        )}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes} {...valueProp}>
      {headerNode}
      {descriptionNode}
      {content}
    </ElementType>
  )
}

ListItem._meta = {
  name: 'ListItem',
  parent: 'List',
  type: META.TYPES.ELEMENT,
}

ListItem.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A list item can active. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for ListDescription. */
  description: customPropTypes.itemShorthand,

  /** A list item can disabled. */
  disabled: PropTypes.bool,

  /** Shorthand for ListHeader. */
  header: customPropTypes.itemShorthand,

  /** Shorthand for ListIcon. */
  icon: customPropTypes.every([
    customPropTypes.disallow(['image']),
    customPropTypes.itemShorthand,
  ]),

  /** Shorthand for Image. */
  image: customPropTypes.every([
    customPropTypes.disallow(['icon']),
    customPropTypes.itemShorthand,
  ]),

  /** A value for an ordered list. */
  value: PropTypes.string,
}

ListItem.create = createShorthandFactory(ListItem, content => ({ content }))

export default ListItem
