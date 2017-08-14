import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  isBrowser,
  META,
  useKeyOnly,
} from '../../lib'
import Portal from '../../addons/Portal'
import Transition from '../../modules/Transition'
import DimmerContent from './DimmerContent'
import DimmerDimmable from './DimmerDimmable'

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

  static _meta = {
    name: 'Dimmer',
    type: META.TYPES.MODULE,
  }

  static Dimmable = DimmerDimmable

  handlePortalMount = () => {
    if (!isBrowser) return

    // Heads up, IE doesn't support second argument in add()
    document.body.classList.add('dimmed')
    document.body.classList.add('dimmable')
  }

  handlePortalUnmount = () => {
    if (!isBrowser) return

    // Heads up, IE doesn't support second argument in add()
    document.body.classList.remove('dimmed')
    document.body.classList.remove('dimmable')
  }

  handleClick = (e) => {
    const { onClick, onClickOutside } = this.props

    if (onClick) onClick(e, this.props)
    if (this.centerRef && (this.centerRef !== e.target && this.centerRef.contains(e.target))) return
    if (onClickOutside) onClickOutside(e, this.props)
  }

  handleCenterRef = c => (this.centerRef = c)

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
      useKeyOnly(active, 'active'),
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(page, 'page'),
      useKeyOnly(simple, 'simple'),
      'dimmer',
      className,
    )
    const rest = getUnhandledProps(Dimmer, this.props)
    const ElementType = getElementType(Dimmer, this.props)

    const dimmerJSX = (
      <Transition duration={5000} visible={active}>
        <ElementType{...rest} className={classes} onClick={this.handleClick}>
          <DimmerContent centerRef={this.handleCenterRef} content={content}>
            {children}
          </DimmerContent>
        </ElementType>
      </Transition>
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
          {dimmerJSX}
        </Portal>
      )
    }

    return dimmerJSX
  }
}

Dimmer.create = createShorthandFactory(Dimmer, value => ({ content: value }))
