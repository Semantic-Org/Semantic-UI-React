import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function MenuItem(props) {
  const { active, children, className, header, index, link, name, onClick, position } = props
  const classes = cx(
    useKeyOnly(active, 'active'),
    useKeyOnly(header, 'header'),
    useKeyOnly(link, 'link'),
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

  return (
    <ElementType {...rest} className={classes} onClick={handleClick}>
      {children || name}
    </ElementType>
  )
}

MenuItem._meta = {
  name: 'MenuItem',
  type: META.TYPES.COLLECTION,
  parent: 'Menu',
  props: {
    position: ['right'],
  },
}

MenuItem.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** A menu item can be active. */
  active: PropTypes.bool,

  /** Primary content of the MenuItem. */
  children: PropTypes.node,

  /** Classes that will be added to the MenuItem className. */
  className: PropTypes.string,

  /** A menu item can be pressed in. */
  down: PropTypes.bool,

  /** A menu item can be link. */
  link: PropTypes.bool,

  /** A menu item may include a header or may itself be a header. */
  header: PropTypes.bool,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: PropTypes.string,

  /** MenuItem index inside Menu. */
  index: PropTypes.number,

  /** Internal name of the MenuItem. */
  name: PropTypes.string,

  /** Render as an `a` tag instead of a `div` and called with event on MenuItem click. */
  onClick: PropTypes.func,

  /** A menu item can take right position. */
  position: PropTypes.oneOf(MenuItem._meta.props.position),
}

MenuItem.defaultProps = {
  as: 'a',
}

export default MenuItem
