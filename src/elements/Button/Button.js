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
import { createIcon, createLabel } from '../../factories'
import ButtonGroup from './ButtonGroup'
import Icon from '../Icon/Icon'
import Label from '../Label/Label'

/**
 * A Button indicates a possible user action
 * @see Form
 * @see Icon
 * @see Label
 */
function Button(props) {
  const {
    active, animated, attached, basic, children, circular, className, color, compact, content, disabled, floated, fluid,
    icon, inverted, label, labeled, loading, negative, positive, primary, secondary, size, toggle, type,
  } = props

  const labeledClasses = cx(
    useKeyOrValueAndKey(labeled || !!label, 'labeled'),
  )

  const baseClasses = cx(
    color,
    size,
    useKeyOnly(active, 'active'),
    useKeyOnly(animated, 'animated'),
    useKeyOrValueAndKey(attached, 'attached'),
    useKeyOnly(basic, 'basic'),
    useKeyOnly(circular, 'circular'),
    useKeyOnly(compact, 'compact'),
    useKeyOnly(disabled, 'disabled'),
    useValueAndKey(floated, 'floated'),
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(icon === true || !children && !content && icon, 'icon'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(loading, 'loading'),
    useKeyOnly(negative, 'negative'),
    useKeyOnly(positive, 'positive'),
    useKeyOnly(primary, 'primary'),
    useKeyOnly(secondary, 'secondary'),
    useKeyOnly(toggle, 'toggle'),
  )

  const rest = getUnhandledProps(Button, props)
  const ElementType = getElementType(Button, props, () => {
    if (type === 'submit') return 'button'
    if (labeled || attached) return 'div'
  })
  const tabIndex = ElementType === 'div' ? 0 : undefined

  if (children) {
    const classes = cx('ui', baseClasses, labeledClasses, 'button', className)
    console.debug('RENDER children:', { classes })
    return (
      <ElementType {...rest} type={type} className={classes} tabIndex={tabIndex}>
        {children}
      </ElementType>
    )
  }

  if (label) {
    const classes = cx('ui', baseClasses, 'button', className)
    const containerClasses = cx('ui', labeledClasses, 'button', className)
    console.debug('RENDER label:', { classes, containerClasses }, props)
    const labelJSX = createLabel(label, {
      basic: true,
      pointing: labeled === 'left' ? 'right' : 'left',
    })
    return (
      <div {...rest} className={containerClasses}>
        {labeled === 'left' && labelJSX}
        <ElementType {...rest} type={type} className={classes} tabIndex={tabIndex}>
          {createIcon(icon)} {content}
        </ElementType>
        {(labeled === 'right' || !labeled) && labelJSX}
      </div>
    )
  }

  if (icon && !label) {
    const classes = cx('ui', labeledClasses, baseClasses, 'button', className)
    console.debug('RENDER icon && !label:', { classes })
    return (
      <ElementType {...rest} type={type} className={classes} tabIndex={tabIndex}>
        {createIcon(icon)} {content}
      </ElementType>
    )
  }

  const classes = cx('ui', labeledClasses, baseClasses, 'button', className)
  console.debug('RENDER default:', { classes })

  return (
    <ElementType {...rest} type={type} className={classes} tabIndex={tabIndex}>
      {content}
    </ElementType>
  )
}

Button.Group = ButtonGroup

Button._meta = {
  name: 'Button',
  type: META.TYPES.ELEMENT,
  props: {
    attached: ['left', 'right', 'top', 'bottom'],
    color: SUI.COLORS,
    floated: SUI.FLOATS,
    labeled: ['right', 'left'],
    size: SUI.SIZES,
  },
}

Button.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** A button can show it is currently the active user selection */
  active: PropTypes.bool,

  /** A button can animate to show hidden content */
  animated: PropTypes.bool,

  /** A button can be attached to the top or bottom of other content */
  attached: PropTypes.oneOf(Button._meta.props.attached),

  /** A basic button is less pronounced */
  basic: PropTypes.bool,

  /** Primary content of the button */
  children: customPropTypes.every([
    PropTypes.node,
    customPropTypes.disallow(['label']),
    customPropTypes.givenProps(
      { icon: PropTypes.bool.isRequired },
      customPropTypes.disallow(['icon']),
    ),
  ]),

  /** A button can be circular */
  circular: PropTypes.bool,

  /** Classes to add to the button className. */
  className: PropTypes.string,

  /** Primary content. Mutually exclusive with children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),

  /** A button can have different colors */
  color: PropTypes.oneOf(Button._meta.props.color),

  /** A button can reduce its padding to fit into tighter spaces */
  compact: PropTypes.bool,

  /** A button can show it is currently unable to be interacted with */
  disabled: PropTypes.bool,

  /** A button can be aligned to the left or right of its container */
  floated: PropTypes.oneOf(Button._meta.props.floated),

  /** A button can take the width of its container */
  fluid: PropTypes.bool,

  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon: customPropTypes.every([
    Icon.propTypes.name,
    customPropTypes.givenProps(
      { icon: PropTypes.bool.isRequired },
      customPropTypes.disallow(['children']),
    ),
  ]),

  /** A button can be formatted to appear on dark backgrounds */
  inverted: PropTypes.bool,

  /** A labeled button can format a Label or Icon to appear on the left or right */
  labeled: customPropTypes.some([
    PropTypes.bool,
    PropTypes.oneOf(Button._meta.props.labeled),
  ]),

  /** Add a Label by text, props object, or pass a <Label /> */
  label: customPropTypes.every([
    Label.propTypes.text,
    customPropTypes.some([
      PropTypes.bool,
      PropTypes.oneOf(Button._meta.props.labeled),
    ]),
  ]),

  /** A button can show a loading indicator */
  loading: PropTypes.bool,

  /** A button can hint towards a negative consequence */
  negative: PropTypes.bool,

  /** A button can hint towards a positive consequence */
  positive: PropTypes.bool,

  /** A button can be formatted to show different levels of emphasis */
  primary: PropTypes.bool,

  /** A button can be formatted to show different levels of emphasis */
  secondary: PropTypes.bool,

  /** A button can be formatted to toggle on and off */
  toggle: PropTypes.bool,

  /** The HTML <button> type attribute */
  type: PropTypes.string,

  /** A button can have different sizes */
  size: PropTypes.oneOf(Button._meta.props.size),
}

Button.defaultProps = {
  as: 'button',
}

export default Button
