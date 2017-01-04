import _ from 'lodash'
import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  customPropTypes,
  createShorthandFactory,
  getElementType,
  getUnhandledProps,
  makeDebugger,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
  useValueAndKey,
} from '../../lib'
import Icon from '../Icon/Icon'
import Label from '../Label/Label'

import ButtonContent from './ButtonContent'
import ButtonGroup from './ButtonGroup'
import ButtonOr from './ButtonOr'

const debug = makeDebugger('button')

const _meta = {
  name: 'Button',
  type: META.TYPES.ELEMENT,
  props: {
    animated: ['fade', 'vertical'],
    attached: ['left', 'right', 'top', 'bottom'],
    color: [
      ...SUI.COLORS,
      'facebook',
      'twitter',
      'google plus',
      'vk',
      'linkedin',
      'instagram',
      'youtube',
    ],
    floated: SUI.FLOATS,
    labelPosition: ['right', 'left'],
    size: SUI.SIZES,
  },
}

/**
 * A Button indicates a possible user action
 * @see Form
 * @see Icon
 * @see Label
 */
class Button extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** A button can show it is currently the active user selection */
    active: PropTypes.bool,

    /** A button can animate to show hidden content */
    animated: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.animated),
    ]),

    /** A button can be attached to the top or bottom of other content */
    attached: PropTypes.oneOf(_meta.props.attached),

    /** A basic button is less pronounced */
    basic: PropTypes.bool,

    /** Primary content. */
    children: customPropTypes.every([
      PropTypes.node,
      customPropTypes.disallow(['label']),
      customPropTypes.givenProps(
        {
          icon: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.object.isRequired,
            PropTypes.element.isRequired,
          ]),
        },
        customPropTypes.disallow(['icon']),
      ),
    ]),

    /** A button can be circular */
    circular: PropTypes.bool,

    /** Additional classes. */
    className: PropTypes.string,

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /** A button can have different colors */
    color: PropTypes.oneOf(_meta.props.color),

    /** A button can reduce its padding to fit into tighter spaces */
    compact: PropTypes.bool,

    /** A button can show it is currently unable to be interacted with */
    disabled: PropTypes.bool,

    /** A button can be aligned to the left or right of its container */
    floated: PropTypes.oneOf(_meta.props.floated),

    /** A button can take the width of its container */
    fluid: PropTypes.bool,

    /** Add an Icon by name, props object, or pass an <Icon /> */
    icon: customPropTypes.some([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.object,
      PropTypes.element,
    ]),

    /** A button can be formatted to appear on dark backgrounds */
    inverted: PropTypes.bool,

    /** A labeled button can format a Label or Icon to appear on the left or right */
    labelPosition: PropTypes.oneOf(_meta.props.labelPosition),

    /** Add a Label by text, props object, or pass a <Label /> */
    label: customPropTypes.some([
      PropTypes.string,
      PropTypes.object,
      PropTypes.element,
    ]),

    /** A button can show a loading indicator */
    loading: PropTypes.bool,

    /** A button can hint towards a negative consequence */
    negative: PropTypes.bool,

    /**
     * Called after user's click.
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,

    /** A button can hint towards a positive consequence */
    positive: PropTypes.bool,

    /** A button can be formatted to show different levels of emphasis */
    primary: PropTypes.bool,

    /** A button can be formatted to show different levels of emphasis */
    secondary: PropTypes.bool,

    /** A button can have different sizes */
    size: PropTypes.oneOf(_meta.props.size),

    /** A button can receive focus. */
    tabIndex: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /** A button can be formatted to toggle on and off */
    toggle: PropTypes.bool,
  }

  static defaultProps = {
    as: 'button',
  }

  static _meta = _meta
  static Content = ButtonContent
  static Group = ButtonGroup
  static Or = ButtonOr

  handleClick = (e) => {
    const { disabled, onClick } = this.props

    if (disabled) {
      e.preventDefault()
      return
    }

    if (onClick) onClick(e, this.props)
  }

  render() {
    const {
      active,
      animated,
      attached,
      basic,
      children,
      circular,
      className,
      color,
      compact,
      content,
      disabled,
      floated,
      fluid,
      icon,
      inverted,
      label,
      labelPosition,
      loading,
      negative,
      positive,
      primary,
      secondary,
      size,
      tabIndex,
      toggle,
    } = this.props

    const labeledClasses = cx(
      useKeyOrValueAndKey(labelPosition || !!label, 'labeled'),
    )

    const baseClasses = cx(
      color,
      size,
      useKeyOnly(active, 'active'),
      useKeyOrValueAndKey(animated, 'animated'),
      useKeyOrValueAndKey(attached, 'attached'),
      useKeyOnly(basic, 'basic'),
      useKeyOnly(circular, 'circular'),
      useKeyOnly(compact, 'compact'),
      useKeyOnly(disabled, 'disabled'),
      useValueAndKey(floated, 'floated'),
      useKeyOnly(fluid, 'fluid'),
      useKeyOnly(icon === true || icon && (labelPosition || !children && !content), 'icon'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(loading, 'loading'),
      useKeyOnly(negative, 'negative'),
      useKeyOnly(positive, 'positive'),
      useKeyOnly(primary, 'primary'),
      useKeyOnly(secondary, 'secondary'),
      useKeyOnly(toggle, 'toggle'),
    )
    const rest = getUnhandledProps(Button, this.props)
    const ElementType = getElementType(Button, this.props, () => {
      if (!_.isNil(label) || !_.isNil(attached)) return 'div'
    })

    let computedTabIndex
    if (!_.isNil(tabIndex)) computedTabIndex = tabIndex
    else if (disabled) computedTabIndex = -1
    else if (ElementType === 'div') computedTabIndex = 0

    if (!_.isNil(children)) {
      const classes = cx('ui', baseClasses, labeledClasses, 'button', className)
      debug('render children:', { classes })
      return (
        <ElementType {...rest} className={classes} tabIndex={computedTabIndex} onClick={this.handleClick}>
          {children}
        </ElementType>
      )
    }

    const labelElement = Label.create(label, {
      basic: true,
      pointing: labelPosition === 'left' ? 'right' : 'left',
    })
    if (labelElement) {
      const classes = cx('ui', baseClasses, 'button', className)
      const containerClasses = cx('ui', labeledClasses, 'button', className)
      debug('render label:', { classes, containerClasses }, this.props)

      return (
        <ElementType {...rest} className={containerClasses} onClick={this.handleClick}>
          {labelPosition === 'left' && labelElement}
          <button className={classes}>
            {Icon.create(icon)} {content}
          </button>
          {(labelPosition === 'right' || !labelPosition) && labelElement}
        </ElementType>
      )
    }

    if (!_.isNil(icon) && _.isNil(label)) {
      const classes = cx('ui', labeledClasses, baseClasses, 'button', className)
      debug('render icon && !label:', { classes })
      return (
        <ElementType {...rest} className={classes} tabIndex={computedTabIndex} onClick={this.handleClick}>
          {Icon.create(icon)} {content}
        </ElementType>
      )
    }

    const classes = cx('ui', labeledClasses, baseClasses, 'button', className)
    debug('render default:', { classes })

    return (
      <ElementType {...rest} className={classes} tabIndex={computedTabIndex} onClick={this.handleClick}>
        {content}
      </ElementType>
    )
  }
}

Button.create = createShorthandFactory(Button, value => ({ content: value }))

export default Button
