import _ from 'lodash'
import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  createShorthand,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
  useValueAndKey,
} from '../../lib'
import Icon from '../Icon/Icon'
import Image from '../Image/Image'

import LabelDetail from './LabelDetail'
import LabelGroup from './LabelGroup'

const _meta = {
  name: 'Label',
  type: META.TYPES.ELEMENT,
  props: {
    attached: ['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'],
    color: SUI.COLORS,
    corner: ['left', 'right'],
    pointing: ['above', 'below', 'left', 'right'],
    ribbon: ['right'],
    size: SUI.SIZES,
  },
}

/**
 * A label displays content classification
 */
export default class Label extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** A label can be active. */
    active: PropTypes.bool,

    /** A label can attach to a content segment. */
    attached: PropTypes.oneOf(_meta.props.attached),

    /** A label can reduce its complexity. */
    basic: PropTypes.bool,

    /** Primary content. */
    children: PropTypes.node,

    /** A label can be circular. */
    circular: PropTypes.bool,

    /** Additional classes. */
    className: PropTypes.string,

    /** Color of the label. */
    color: PropTypes.oneOf(_meta.props.color),

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /** A label can position itself in the corner of an element. */
    corner: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.corner),
    ]),

    /** Shorthand for LabelDetail. */
    detail: customPropTypes.itemShorthand,

    /** Formats the label as a dot. */
    empty: customPropTypes.every([
      customPropTypes.demand(['circular']),
      PropTypes.bool,
    ]),

    /** Float above another element in the upper right corner. */
    floating: PropTypes.bool,

    /** A horizontal label is formatted to label content along-side it horizontally. */
    horizontal: PropTypes.bool,

    /** Shorthand for Icon. */
    icon: customPropTypes.itemShorthand,

    /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
    image: PropTypes.oneOfType([
      PropTypes.bool,
      customPropTypes.itemShorthand,
    ]),

    /** A label can point to content next to it. */
    pointing: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.pointing),
    ]),

    /**
     * Called on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,

    /**
     * Adds an "x" icon, called when "x" is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onRemove: PropTypes.func,

    /** Shorthand for Icon to appear as the last child and trigger onRemove. */
    removeIcon: customPropTypes.itemShorthand,

    /** A label can appear as a ribbon attaching itself to an element. */
    ribbon: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.ribbon),
    ]),

    /** A label can have different sizes. */
    size: PropTypes.oneOf(_meta.props.size),

    /** A label can appear as a tag. */
    tag: PropTypes.bool,
  }

  static _meta = _meta

  static Detail = LabelDetail
  static Group = LabelGroup

  handleClick = (e) => {
    const { onClick } = this.props

    if (onClick) onClick(e, this.props)
  }

  handleRemove = (e) => {
    const { onRemove } = this.props

    if (onRemove) onRemove(e, this.props)
  }

  render() {
    const {
      active,
      attached,
      basic,
      children,
      circular,
      className,
      color,
      content,
      corner,
      detail,
      empty,
      floating,
      horizontal,
      icon,
      image,
      onRemove,
      pointing,
      removeIcon,
      ribbon,
      size,
      tag,
    } = this.props

    const pointingClass = pointing === true && 'pointing'
      || (pointing === 'left' || pointing === 'right') && `${pointing} pointing`
      || (pointing === 'above' || pointing === 'below') && `pointing ${pointing}`

    const classes = cx(
      'ui',
      color,
      pointingClass,
      size,
      useKeyOnly(active, 'active'),
      useKeyOnly(basic, 'basic'),
      useKeyOnly(circular, 'circular'),
      useKeyOnly(empty, 'empty'),
      useKeyOnly(floating, 'floating'),
      useKeyOnly(horizontal, 'horizontal'),
      useKeyOnly(image === true, 'image'),
      useKeyOnly(tag, 'tag'),
      useKeyOrValueAndKey(corner, 'corner'),
      useKeyOrValueAndKey(ribbon, 'ribbon'),
      useValueAndKey(attached, 'attached'),
      'label',
      className,
    )
    const rest = getUnhandledProps(Label, this.props)
    const ElementType = getElementType(Label, this.props)

    if (!_.isNil(children)) {
      return <ElementType {...rest} className={classes} onClick={this.handleClick}>{children}</ElementType>
    }

    const removeIconShorthand = _.isUndefined(removeIcon) ? 'delete' : removeIcon

    return (
      <ElementType className={classes} onClick={this.handleClick} {...rest}>
        {Icon.create(icon)}
        {typeof image !== 'boolean' && Image.create(image)}
        {content}
        {createShorthand(LabelDetail, val => ({ content: val }), detail)}
        {onRemove && Icon.create(removeIconShorthand, { onClick: this.handleRemove })}
      </ElementType>
    )
  }
}

// Label is not yet defined inside the class
// Do not use a static property initializer
Label.create = createShorthandFactory(Label, value => ({ content: value }))
