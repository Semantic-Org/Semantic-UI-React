import _ from 'lodash'
import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
} from '../../lib'
import Icon from '../../elements/Icon'

const _meta = {
  name: 'MenuItem',
  type: META.TYPES.COLLECTION,
  parent: 'Menu',
  props: {
    color: SUI.COLORS,
    fitted: ['horizontally', 'vertically'],
    position: ['right'],
  },
}

export default class MenuItem extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** A menu item can be active. */
    active: PropTypes.bool,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Additional colors can be specified. */
    color: PropTypes.oneOf(_meta.props.color),

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /** A menu item or menu can remove element padding, vertically or horizontally. */
    fitted: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.fitted),
    ]),

    /** A menu item may include a header or may itself be a header. */
    header: PropTypes.bool,

    /** MenuItem can be only icon. */
    icon: PropTypes.oneOfType([
      PropTypes.bool,
      customPropTypes.itemShorthand,
    ]),

    /** MenuItem index inside Menu. */
    index: PropTypes.number,

    /** A menu item can be link. */
    link: PropTypes.bool,

    /** Internal name of the MenuItem. */
    name: PropTypes.string,

    /**
     * Called on click. When passed, the component will render as an `a`
     * tag by default instead of a `div`.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,

    /** A menu item can take right position. */
    position: PropTypes.oneOf(_meta.props.position),
  }

  static _meta = _meta

  handleClick = (e) => {
    const { onClick } = this.props

    if (onClick) onClick(e, this.props)
  }

  render() {
    const {
      active,
      children,
      className,
      color,
      content,
      fitted,
      header,
      icon,
      link,
      name,
      onClick,
      position,
    } = this.props

    const classes = cx(
      color,
      position,
      useKeyOnly(active, 'active'),
      useKeyOnly(icon === true || icon && !(name || content), 'icon'),
      useKeyOnly(header, 'header'),
      useKeyOnly(link, 'link'),
      useKeyOrValueAndKey(fitted, 'fitted'),
      'item',
      className,
    )
    const ElementType = getElementType(MenuItem, this.props, () => {
      if (onClick) return 'a'
    })
    const rest = getUnhandledProps(MenuItem, this.props)

    if (!_.isNil(children)) {
      return <ElementType {...rest} className={classes} onClick={this.handleClick}>{children}</ElementType>
    }

    return (
      <ElementType {...rest} className={classes} onClick={this.handleClick}>
        {Icon.create(icon)}
        {content || _.startCase(name)}
      </ElementType>
    )
  }
}

MenuItem.create = createShorthandFactory(MenuItem, val => ({ content: val, name: val }), true)
