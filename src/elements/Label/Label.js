/* eslint-disable valid-jsdoc, complexity */
import cx from 'classnames'
import React, { createElement, PropTypes } from 'react'
import createFragment from 'react-addons-create-fragment'

import META from '../../utils/Meta'
import * as sui from '../../utils/semanticUtils'
import { someChildType } from '../../utils/childrenUtils'
import {
  iconPropRenderer,
  imagePropRenderer,
  useKeyOnly,
  useValueAndKey,
  useKeyOrValueAndKey,
} from '../../utils/propUtils'
import Icon from '../Icon/Icon'
import Image from '../Image/Image'

/**
 * A label displays content classification
 */
function Label(props) {
  const {
    attached, children, color, corner, className, circular, detail, detailLink, floating, horizontal, icon,
    image, link, onClick, onClickDetail, onClickRemove, pointing, removable, ribbon, size, tag, text,
    ...rest,
  } = props

  const handleClick = e => onClick && onClick(e, props)
  const handleClickRemove = e => onClickRemove && onClickRemove(e, props)
  const handleClickDetail = e => onClickDetail && onClickDetail(e, props)

  const _component = image || link || onClick ? 'a' : 'div'

  const classes = cx('sd-label ui',
    size,
    color,
    useKeyOnly(floating, 'floating'),
    useKeyOnly(horizontal, 'horizontal'),
    useKeyOnly(tag, 'tag'),
    useValueAndKey(attached, 'attached'),
    useValueAndKey(corner, 'corner'),
    useKeyOrValueAndKey(pointing, 'pointing'),
    useKeyOrValueAndKey(ribbon, 'ribbon'),
    circular && (children && 'circular' || 'empty circular'),
    // TODO how to handle image child with no image class? there are two image style labels.
    (image || someChildType(children, Image) || someChildType(children, 'img')) && 'image',
    'label',
    className
  )

  const _props = {
    className: classes,
    onClick: handleClick,
    ...rest,
  }

  const _detail = detail || detailLink
  const detailComponent = (detailLink || onClickDetail) && 'a' || detail && 'div'

  const _children = createFragment({
    icon: iconPropRenderer(icon),
    image: imagePropRenderer(image),
    text,
    children,
    detail: _detail && createElement(detailComponent, { className: 'detail', onClick: handleClickDetail }, _detail),
    remove: (removable || onClickRemove) && <Icon className='delete' onClick={handleClickRemove} />,
  })

  // Do not destructure createElement import
  // react-docgen only recognizes a stateless component when React.createElement is returned
  return React.createElement(_component, _props, _children)
}

Label._meta = {
  library: META.library.semanticUI,
  name: 'Label',
  type: META.type.element,
  props: {
    attached: ['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'],
    size: sui.sizes,
    color: sui.colors,
    pointing: ['bottom', 'left', 'right'],
    corner: ['left', 'right'],
    right: ['left', 'right'],
    ribbon: ['right'],
  },
}

Label.propTypes = {
  /** Attach to a <Segment />. */
  attached: PropTypes.oneOf(Label._meta.props.attached),

  /** Primary content of the label, same as text. */
  children: PropTypes.node,

  /** Classes to add to the label className. */
  className: PropTypes.string,

  /** Color of the label. */
  color: PropTypes.oneOf(Label._meta.props.colors),

  /** Place the label in one of the upper corners . */
  corner: PropTypes.oneOf(Label._meta.props.corner),

  /** Additional text with less emphasis. */
  detail: PropTypes.string,

  /** Same as detail but formatted as a link. */
  detailLink: PropTypes.string,

  /** Format a label to align better alongside text. */
  horizontal: PropTypes.bool,

  /** Float above another element in the upper right corner. */
  floating: PropTypes.bool,

  /** Make the label circular, or a dot if it is empty. */
  circular: PropTypes.bool,

  /** Add an icon by icon className or pass an <Icon /.>*/
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),

  /** Add an image by img src or pass an <Image />. */
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),

  /** Format the label as a link on hover. */
  link: PropTypes.bool,

  /** Adds the link style when present, called with (event, props). */
  onClick: PropTypes.func,

  /** Click callback for detail, called with (event, props). */
  onClickDetail: PropTypes.func,

  /** Adds an "x" icon, called with (event, props) when "x" is clicked. */
  onClickRemove: PropTypes.func,

  /** Add an "x" icon that calls onClickRemove when clicked. */
  removable: PropTypes.bool,

  /** Point to content next to it. */
  pointing: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Label._meta.props.pointing),
  ]),

  /** Format the label as a ribbon on another component. */
  ribbon: PropTypes.oneOf(Label._meta.props.ribbon),

  /** Size of the label. */
  size: PropTypes.oneOf(Label._meta.props.sizes),

  /** Format the label like a product tag. */
  tag: PropTypes.bool,

  /** Primary text of the label, same as children. */
  text: PropTypes.node,
}

export default Label
