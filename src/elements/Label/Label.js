import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
  useValueAndKey,
} from '../../lib'
import { createIcon, createImage, createShorthand } from '../../factories'
import { Icon } from '../'
import LabelDetail from './LabelDetail'

/**
 * A label displays content classification
 */
function Label(props) {
  const {
    attached, basic, children, circular, className, color, content, corner, detail, empty, floating, horizontal, icon,
    image, onClick, onRemove, pointing, removable, ribbon, size, tag,
  } = props

  const handleClick = e => onClick && onClick(e, props)
  const handleRemove = e => onRemove && onRemove(e, props)

  const pointingClass = pointing === true && 'pointing'
      || (pointing === 'left' || pointing === 'right') && `${pointing} pointing`
      || (pointing === 'above' || pointing === 'below') && `pointing ${pointing}`

  const classes = cx('ui',
    size,
    color,
    pointingClass,
    useKeyOnly(basic, 'basic'),
    useKeyOnly(circular, 'circular'),
    useKeyOnly(floating, 'floating'),
    useKeyOnly(horizontal, 'horizontal'),
    useKeyOnly(image === true, 'image'),
    useKeyOnly(empty, 'empty'),
    useKeyOnly(tag, 'tag'),
    useValueAndKey(attached, 'attached'),
    useKeyOrValueAndKey(corner, 'corner'),
    useKeyOrValueAndKey(ribbon, 'ribbon'),
    className,
    'label',
  )

  const ElementType = getElementType(Label, props)
  const rest = getUnhandledProps(Label, props)

  if (children) {
    return <ElementType {...rest} className={classes} onClick={handleClick}>{children}</ElementType>
  }

  return (
    <ElementType className={classes} onClick={handleClick} {...rest}>
      {createIcon(icon)}
      {typeof image !== 'boolean' && createImage(image)}
      {content}
      {createShorthand(LabelDetail, val => ({ content: val }), detail)}
      {(removable || onRemove) && (
        <Icon name='delete' onClick={handleRemove} />
      )}
    </ElementType>
  )
}

Label._meta = {
  name: 'Label',
  type: META.TYPES.ELEMENT,
  props: {
    attached: ['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'],
    size: SUI.SIZES,
    color: SUI.COLORS,
    pointing: ['above', 'below', 'left', 'right'],
    corner: ['left', 'right'],
    ribbon: ['right'],
  },
}

Label.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Attach to a <Segment />. */
  attached: PropTypes.oneOf(Label._meta.props.attached),

  /** A label can reduce its complexity. */
  basic: PropTypes.bool,

  /** Primary content of the label, same as content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content', 'detail', 'icon']),
    PropTypes.node,
  ]),

  /** Classes to add to the label className. */
  className: PropTypes.string,

  /** Make the label circular, or a dot when used with 'empty' prop. */
  circular: PropTypes.bool,

  /** Color of the label. */
  color: PropTypes.oneOf(Label._meta.props.color),

  /** Primary content of the label, same as children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ]),

  /** Place the label in one of the upper corners. */
  corner: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Label._meta.props.corner),
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

  /** Format a label to align better alongside text. */
  horizontal: PropTypes.bool,

  /** Float above another element in the upper right corner. */
  floating: PropTypes.bool,

  /** Add an icon by icon name or pass an <Icon /> */
  icon: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ]),

  /** A label can be formatted to emphasize an image or prop can be used as shorthand for image. */
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

  /** Adds the link style when present, called with (event, props). */
  onClick: PropTypes.func,

  /** Adds an "x" icon, called with (event, props) when "x" is clicked. */
  onRemove: PropTypes.func,

  /** Point to content next to it. */
  pointing: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Label._meta.props.pointing),
  ]),

  /** Add an "x" icon that calls onRemove when clicked. */
  removable: PropTypes.bool,

  /** Format the label as a ribbon on another component. */
  ribbon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Label._meta.props.ribbon),
  ]),

  /** Size of the label. */
  size: PropTypes.oneOf(Label._meta.props.size),

  /** Format the label like a product tag. */
  tag: PropTypes.bool,
}

Label.Detail = LabelDetail

export default Label
