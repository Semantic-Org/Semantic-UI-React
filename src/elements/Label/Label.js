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

    /** A label can attach to a content segment. */
    attached: PropTypes.oneOf(_meta.props.attached),

    /** A label can reduce its complexity. */
    basic: PropTypes.bool,

    /** Primary content of the label, same as content. */
    children: customPropTypes.every([
      customPropTypes.disallow(['content', 'detail', 'icon']),
      PropTypes.node,
    ]),

    /** A label can be circular. */
    circular: PropTypes.bool,

    /** Classes to add to the label className. */
    className: PropTypes.string,

    /** Color of the label. */
    color: PropTypes.oneOf(_meta.props.color),

    /** Shorthand for primary content of the label. Mutually exclusive with children. */
    content: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    ]),

    /** A label can position itself in the corner of an element. */
    corner: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.corner),
    ]),

    /** Shorthand for the LabelDetail component. Mutually exclusive with children. */
    detail: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    ]),

    /** Formats the label as a dot. */
    empty: customPropTypes.every([
      customPropTypes.demand(['circular']),
      PropTypes.bool,
    ]),

    /** Float above another element in the upper right corner. */
    floating: PropTypes.bool,

    /** A horizontal label is formatted to label content along-side it horizontally. */
    horizontal: PropTypes.bool,

    /** A label can be formatted to emphasize an icon or prop can be used as shorthand for Icon. */
    icon: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    ]),

    /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
    image: customPropTypes.every([
      customPropTypes.givenProps(
        { children: PropTypes.node.isRequired },
        PropTypes.bool,
      ),
      customPropTypes.givenProps(
        { image: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.object]) },
        customPropTypes.disallow(['children']),
      ),
    ]),

    /** A label can point to content next to it. */
    pointing: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.pointing),
    ]),

    /** Adds the link style when present, called with (event, props). */
    onClick: PropTypes.func,

    /** Adds an "x" icon, called with (event, props) when "x" is clicked. */
    onRemove: PropTypes.func,

    /** Add an "x" icon that calls onRemove when clicked. */
    removable: PropTypes.bool,

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

  static create = createShorthandFactory(Label, value => ({ content: value }))
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
      removable,
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

    if (children) {
      return <ElementType {...rest} className={classes} onClick={this.handleClick}>{children}</ElementType>
    }

    return (
      <ElementType className={classes} onClick={this.handleClick} {...rest}>
        {Icon.create(icon)}
        {typeof image !== 'boolean' && Image.create(image)}
        {content}
        {createShorthand(LabelDetail, val => ({ content: val }), detail)}
        {(removable || onRemove) && (
          <Icon name='delete' onClick={this.handleRemove} />
        )}
      </ElementType>
    )
  }
}
