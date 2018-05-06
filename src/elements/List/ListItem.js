import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component, isValidElement } from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  ElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
  withComputedType,
} from '../../lib'
import Image from '../../elements/Image'
import ListContent from './ListContent'
import ListDescription from './ListDescription'
import ListHeader from './ListHeader'
import ListIcon from './ListIcon'

/**
 * A list item can contain a set of items.
 */
class InnerListItem extends Component {
  static propTypes = {
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

    /** A ListItem can be clicked */
    onClick: PropTypes.func,

    /** A value for an ordered list. */
    value: PropTypes.string,
  }

  handleClick = (e) => {
    const { disabled } = this.props

    if (!disabled) _.invoke(this.props, 'onClick', e, this.props)
  }

  render() {
    const {
      as,
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
    } = this.props

    const classes = cx(
      useKeyOnly(active, 'active'),
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(as !== 'li', 'item'),
      className,
    )
    const rest = getUnhandledProps(InnerListItem, this.props, { passAs: true })
    const valueProp = as === 'li' ? { value } : { 'data-value': value }

    if (!childrenUtils.isNil(children)) {
      return (
        <ElementType {...rest} {...valueProp} as={as} className={classes} onClick={this.handleClick} role='listitem'>
          {children}
        </ElementType>
      )
    }

    const iconElement = ListIcon.create(icon)
    const imageElement = Image.create(image)

    // See description of `content` prop for explanation about why this is necessary.
    if (!isValidElement(content) && _.isPlainObject(content)) {
      return (
        <ElementType {...rest} {...valueProp} as={as} className={classes} onClick={this.handleClick} role='listitem'>
          {iconElement || imageElement}
          {ListContent.create(content, { header, description })}
        </ElementType>
      )
    }

    const headerElement = ListHeader.create(header)
    const descriptionElement = ListDescription.create(description)

    if (iconElement || imageElement) {
      return (
        <ElementType {...rest} {...valueProp} as={as} className={classes} onClick={this.handleClick} role='listitem'>
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
      <ElementType {...rest} {...valueProp} as={as} className={classes} onClick={this.handleClick} role='listitem'>
        {headerElement}
        {descriptionElement}
        {content}
      </ElementType>
    )
  }
}

const ListItem = withComputedType()(InnerListItem)

ListItem._meta = {
  name: 'ListItem',
  parent: 'List',
  type: META.TYPES.ELEMENT,
}

ListItem.create = createShorthandFactory(ListItem, content => ({ content }))

export default ListItem
