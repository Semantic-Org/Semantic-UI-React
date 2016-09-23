import _ from 'lodash'
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
} from '../../lib'
import { createIcon } from '../../factories'

function MenuItem(props) {
  const {
    active, children, className, color, content, fitted, header, icon, index, link, name, onClick, position,
  } = props
  const classes = cx(
    useKeyOnly(active, 'active'),
    useKeyOrValueAndKey(fitted, 'fitted'),
    useKeyOnly(icon, 'icon'),
    useKeyOnly(header, 'header'),
    useKeyOnly(link, 'link'),
    color,
    position,
    className,
    'item',
  )
  const ElementType = getElementType(MenuItem, props, () => {
    if (onClick) return 'a'
  })
  const handleClick = (e) => {
    if (onClick) onClick(e, { name, index })
  }
  const rest = getUnhandledProps(MenuItem, props)

  if (children) {
    return (
      <ElementType {...rest} className={classes} onClick={handleClick}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes} onClick={handleClick}>
      {createIcon(icon)}
      {content || _.startCase(name)}
    </ElementType>
  )
}

MenuItem._meta = {
  name: 'MenuItem',
  type: META.TYPES.COLLECTION,
  parent: 'Menu',
  props: {
    color: SUI.COLORS,
    fitted: ['horizontally', 'vertically'],
    position: ['right'],
  },
}

MenuItem.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A menu item can be active. */
  active: PropTypes.bool,

  /** Primary content of the MenuItem. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the MenuItem className. */
  className: PropTypes.string,

  /** Additional colors can be specified. */
  color: PropTypes.oneOf(MenuItem._meta.props.color),

  /** Shorthand for primary content of the MenuItem. Mutually exclusive with the children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),

  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(MenuItem._meta.props.fitted),
  ]),

  /** A menu item may include a header or may itself be a header. */
  header: PropTypes.bool,

  /** MenuItem can be only icon. */
  icon: PropTypes.bool,

  /** MenuItem index inside Menu. */
  index: PropTypes.number,

  /** A menu item can be link. */
  link: PropTypes.bool,

  /** Internal name of the MenuItem. */
  name: PropTypes.string,

  /** Render as an `a` tag instead of a `div` and called with event on MenuItem click. */
  onClick: PropTypes.func,

  /** A menu item can take right position. */
  position: PropTypes.oneOf(MenuItem._meta.props.position),
}

export default MenuItem
