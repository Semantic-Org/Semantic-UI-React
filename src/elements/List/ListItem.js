import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { isValidElement } from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
  useEventCallback,
} from '../../lib'
import Image from '../Image'
import ListContent from './ListContent'
import ListDescription from './ListDescription'
import ListHeader from './ListHeader'
import ListIcon from './ListIcon'

/**
 * A list item can contain a set of items.
 */
const ListItem = React.forwardRef(function (props, ref) {
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

  const handleClick = useEventCallback((e) => {
    if (!disabled) {
      _.invoke(props, 'onClick', e, props)
    }
  })
  const valueProp = ElementType === 'li' ? { value } : { 'data-value': value }

  if (!childrenUtils.isNil(children)) {
    return (
      <ElementType
        {...valueProp}
        role='listitem'
        {...rest}
        className={classes}
        onClick={handleClick}
        ref={ref}
      >
        {children}
      </ElementType>
    )
  }

  const iconElement = ListIcon.create(icon, { autoGenerateKey: false })
  const imageElement = Image.create(image, { autoGenerateKey: false })

  // See description of `content` prop for explanation about why this is necessary.
  if (!isValidElement(content) && _.isPlainObject(content)) {
    return (
      <ElementType
        {...valueProp}
        role='listitem'
        {...rest}
        className={classes}
        onClick={handleClick}
        ref={ref}
      >
        {iconElement || imageElement}
        {ListContent.create(content, {
          autoGenerateKey: false,
          defaultProps: { header, description },
        })}
      </ElementType>
    )
  }

  const headerElement = ListHeader.create(header, { autoGenerateKey: false })
  const descriptionElement = ListDescription.create(description, { autoGenerateKey: false })

  if (iconElement || imageElement) {
    return (
      <ElementType
        {...valueProp}
        role='listitem'
        {...rest}
        className={classes}
        onClick={handleClick}
        ref={ref}
      >
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
    <ElementType
      {...valueProp}
      role='listitem'
      {...rest}
      className={classes}
      onClick={handleClick}
      ref={ref}
    >
      {headerElement}
      {descriptionElement}
      {content}
    </ElementType>
  )
})

ListItem.displayName = 'ListItem'
ListItem.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

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
  icon: customPropTypes.every([customPropTypes.disallow(['image']), customPropTypes.itemShorthand]),

  /** Shorthand for Image. */
  image: customPropTypes.every([customPropTypes.disallow(['icon']), customPropTypes.itemShorthand]),

  /** A ListItem can be clicked */
  onClick: PropTypes.func,

  /** A value for an ordered list. */
  value: PropTypes.string,
}
ListItem.create = createShorthandFactory(ListItem, (content) => ({ content }))

export default ListItem
