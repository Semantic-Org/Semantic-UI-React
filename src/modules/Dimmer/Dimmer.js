import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  isBrowser,
  META,
  useKeyOnly,
} from '../../lib'
import Portal from '../../addons/Portal'
import DimmerDimmable from './DimmerDimmable'

const _meta = {
  name: 'Dimmer',
  type: META.TYPES.MODULE,
}

/**
 * A dimmer hides distractions to focus attention on particular content.
 */
export default class Dimmer extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** An active dimmer will dim its parent container. */
    active: PropTypes.bool,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /** A disabled dimmer cannot be activated */
    disabled: PropTypes.bool,

    /**
     * Called on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,

    /**
     * Handles click outside Dimmer's content, but inside Dimmer area.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClickOutside: PropTypes.func,

    /** A dimmer can be formatted to have its colors inverted. */
    inverted: PropTypes.bool,

    /** A dimmer can be formatted to be fixed to the page. */
    page: PropTypes.bool,

    /** A dimmer can be controlled with simple prop. */
    simple: PropTypes.bool,
  }

  static _meta = _meta

  static Dimmable = DimmerDimmable

  handlePortalMount = () => {
    if (isBrowser) document.body.classList.add('dimmed', 'dimmable')
  }

  handlePortalUnmount = () => {
    if (isBrowser) document.body.classList.remove('dimmed', 'dimmable')
  }

  handleClick = (e) => {
    const { onClick, onClickOutside } = this.props

    if (onClick) onClick(e, this.props)
    if (this.center && (this.center !== e.target && this.center.contains(e.target))) return
    if (onClickOutside) onClickOutside(e, this.props)
  }

  render() {
    const {
      active,
      children,
      className,
      content,
      disabled,
      inverted,
      page,
      simple,
    } = this.props

    const classes = cx(
      'ui',
      useKeyOnly(active, 'active transition visible'),
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(page, 'page'),
      useKeyOnly(simple, 'simple'),
      'dimmer',
      className,
    )
    const rest = getUnhandledProps(Dimmer, this.props)
    const ElementType = getElementType(Dimmer, this.props)

    const childrenJSX = (children || content) && (
        <div className='content'>
          <div className='center' ref={center => (this.center = center)}>
            { children || content }
          </div>
        </div>
      )

    if (page) {
      return (
        <Portal
          closeOnEscape={false}
          closeOnDocumentClick={false}
          onMount={this.handlePortalMount}
          onUnmount={this.handlePortalUnmount}
          open={active}
          openOnTriggerClick={false}
        >
          <ElementType{...rest} className={classes} onClick={this.handleClick}>{childrenJSX}</ElementType>
        </Portal>
      )
    }

    return <ElementType{...rest} className={classes} onClick={this.handleClick}>{childrenJSX}</ElementType>
  }
}

// Dimmer is not yet defined inside the class
// Do not use a static property initializer
Dimmer.create = createShorthandFactory(Dimmer, value => ({ content: value }))
