import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
  useEventCallback,
} from '../../lib'
import Icon from '../../elements/Icon'

/**
 * A menu can contain an item.
 */
const MenuItem = React.forwardRef(function (props, ref) {
  const {
    active,
    children,
    className,
    color,
    content,
    disabled,
    fitted,
    header,
    icon,
    link,
    name,
    onClick,
    position,
  } = props

  const classes = cx(
    color,
    position,
    useKeyOnly(active, 'active'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(icon === true || (icon && !(name || content)), 'icon'),
    useKeyOnly(header, 'header'),
    useKeyOnly(link, 'link'),
    useKeyOrValueAndKey(fitted, 'fitted'),
    'item',
    className,
  )
  const ElementType = getElementType(MenuItem, props, () => {
    if (onClick) return 'a'
  })
  const rest = getUnhandledProps(MenuItem, props)

  const handleClick = useEventCallback((e) => {
    if (!disabled) {
      _.invoke(props, 'onClick', e, props)
    }
  })

  if (!childrenUtils.isNil(children)) {
    return (
      <ElementType {...rest} className={classes} onClick={handleClick} ref={ref}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes} onClick={handleClick} ref={ref}>
      {Icon.create(icon, { autoGenerateKey: false })}
      {childrenUtils.isNil(content) ? _.startCase(name) : content}
    </ElementType>
  )
})

MenuItem.displayName = 'MenuItem'
MenuItem.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A menu item can be active. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Additional colors can be specified. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A menu item can be disabled. */
  disabled: PropTypes.bool,

  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['horizontally', 'vertically'])]),

  /** A menu item may include a header or may itself be a header. */
  header: PropTypes.bool,

  /** MenuItem can be only icon. */
  icon: PropTypes.oneOfType([PropTypes.bool, customPropTypes.itemShorthand]),

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

  /** A menu item can take left or right position. */
  position: PropTypes.oneOf(['left', 'right']),
}

MenuItem.create = createShorthandFactory(MenuItem, (val) => ({ content: val, name: val }))

export default MenuItem
