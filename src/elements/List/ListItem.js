import _ from 'lodash'
import cx from 'classnames'
import React, { isValidElement, PropTypes } from 'react'

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

  if (!_.isNil(children)) {
    return <ElementType {...rest} role='listitem' className={classes} {...valueProp}>{children}</ElementType>
  }

  const iconElement = ListIcon.create(icon)
  const imageElement = Image.create(image)

  // See description of `content` prop for explanation about why this is necessary.
  if (!isValidElement(content) && _.isPlainObject(content)) {
    return (
      <ElementType {...rest} role='listitem' className={classes} {...valueProp}>
        {iconElement || imageElement}
        {ListContent.create(content, { header, description })}
      </ElementType>
    )
  }

  const headerElement = ListHeader.create(header)
  const descriptionElement = ListDescription.create(description)

  if (iconElement || imageElement) {
    return (
      <ElementType {...rest} role='listitem' className={classes} {...valueProp}>
        {iconElement || imageElement}
        {(content || headerElement || descriptionElement) && (
          <ListContent>
            {headerElement}
            {descriptionElement}
            {content}
          </ListContent>
        )}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} role='listitem' className={classes} {...valueProp}>
      {headerElement}
      {descriptionElement}
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

  /**
   * Shorthand for primary content.
   *
   * Heads up!
   *
   * This is handled slightly differently than the typical `content` prop since
   * the wrapping ListContent is not used when there's no icon or image.
   *
   * If you pass content as:
   * - an element/literal, it's treated as the sibling node to
   * header/description (whether wrapped in Item.Content or not).
   * - a props object, it forces the presence of Item.Content and passes those
   * props to it. If you pass a content prop within that props object, it
   * will be treated as the sibling node to header/description.
   */
  content: customPropTypes.itemShorthand,

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

ListItem.create = createShorthandFactory(ListItem, content => ({ content }), true)

export default ListItem
