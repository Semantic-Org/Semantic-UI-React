import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  childrenUtils,
  useKeyOnly,
  useKeyOrValueAndKey,
  useValueAndKey,
} from '../../lib'
import { createIcon, createImage } from '../../factories'
import { Icon, Image } from '../'

/**
 * A label displays content classification
 */
function Label(props) {
  const {
    attached, basic, children, color, corner, className, circular, detail, detailAs, empty, floating, horizontal,
    icon, image, onClick, onDetailClick, onRemove, pointing, removable, ribbon, size, tag, content,
  } = props

  const handleClick = e => onClick && onClick(e, props)
  const handleRemove = e => onRemove && onRemove(e, props)
  const handleDetailClick = e => onDetailClick && onDetailClick(e, props)

  const classes = cx('ui',
    size,
    color,
    useKeyOnly(basic, 'basic'),
    useKeyOnly(circular, 'circular'),
    useKeyOnly(floating, 'floating'),
    useKeyOnly(horizontal, 'horizontal'),
    useKeyOnly(empty, 'empty'),
    useKeyOnly(tag, 'tag'),
    useValueAndKey(attached, 'attached'),
    useKeyOrValueAndKey(corner, 'corner'),
    useKeyOrValueAndKey(pointing, 'pointing'),
    useKeyOrValueAndKey(ribbon, 'ribbon'),
    // TODO how to handle image child with no image class? there are two image style labels.
    (image || childrenUtils.someByType(children, Image) || childrenUtils.someByType(children, 'img')) && 'image',
    'label',
    className
  )

  const DetailComponent = detailAs || 'div'
  const ElementType = getElementType(Label, props)
  const rest = getUnhandledProps(Label, props)

  return (
    <ElementType className={classes} onClick={handleClick} {...rest}>
      {createIcon(icon)}
      {createImage(image)}
      {content}
      {children}
      {detail && (
        <DetailComponent className='detail' onClick={handleDetailClick}>{detail}</DetailComponent>
      )}
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
    pointing: ['bottom', 'left', 'right'],
    corner: ['left', 'right'],
    ribbon: ['right'],
  },
}

Label.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Attach to a <Segment />. */
  attached: PropTypes.oneOf(Label._meta.props.attached),

  /** A label can reduce its complexity. */
  basic: PropTypes.bool,

  /** Primary content of the label, same as content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['icon', 'image', 'content']),
    PropTypes.node,
  ]),

  /** Classes to add to the label className. */
  className: PropTypes.string,

  /** Color of the label. */
  color: PropTypes.oneOf(Label._meta.props.color),

  /** Place the label in one of the upper corners. */
  corner: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Label._meta.props.corner),
  ]),

  /** Additional text with less emphasis. */
  detail: PropTypes.string,

  /** An element type to render the 'detail' as (string or function). */
  detailAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
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

  /** Make the label circular, or a dot when used with 'empty' prop. */
  circular: PropTypes.bool,

  /** Add an icon by icon name or pass an <Icon /> */
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),

  /** Add an image by img src or pass an <Image />. */
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),

  /** Adds the link style when present, called with (event, props). */
  onClick: PropTypes.func,

  /** Click callback for detail, called with (event, props). Formats the detail as a link. */
  onDetailClick: PropTypes.func,

  /** Adds an "x" icon, called with (event, props) when "x" is clicked. */
  onRemove: PropTypes.func,

  /** Add an "x" icon that calls onRemove when clicked. */
  removable: PropTypes.bool,

  /** Point to content next to it. */
  pointing: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Label._meta.props.pointing),
  ]),

  /** Format the label as a ribbon on another component. */
  ribbon: PropTypes.oneOf(Label._meta.props.ribbon),

  /** Size of the label. */
  size: PropTypes.oneOf(Label._meta.props.size),

  /** Format the label like a product tag. */
  tag: PropTypes.bool,

  /** Primary content of the label, same as children. */
  content: PropTypes.node,
}

export default Label
