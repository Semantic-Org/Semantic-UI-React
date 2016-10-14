import _ from 'lodash'
import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  makeDebugger,
  META,
  useKeyOnly,
} from '../../lib'
import Portal from '../../addons/Portal'

const debug = makeDebugger('dimmer')

const _meta = {
  name: 'Dimmer',
  type: META.TYPES.MODULE,
}

/**
 * A dimmer hides distractions to focus attention on particular content.
 */
class Dimmer extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** An active dimmer will dim its parent container. */
    active: PropTypes.bool,

    /** A dimmable element can blur its contents. */
    blurring: PropTypes.bool,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    closeOnOutsideClick: PropTypes.bool,

    /** A disabled dimmer cannot be activated. */
    disabled: PropTypes.bool,

    /** A dimmer can be formatted to have its colors inverted. */
    inverted: PropTypes.bool,

    /** Called when a close event happens */
    onClose: PropTypes.func,

    page: PropTypes.bool,
  }

  static defaultProps = {
    closeOnOutsideClick: true,
  }

  static _meta = _meta

  handlePageMount = () => {
    debug('handleMount()')

    document.body.classList.add('dimmed', 'dimmable')
  }

  handlePageUnmount = () => {
    debug('handleUnmount()')

    document.body.classList.remove('dimmed', 'dimmable')
  }

  handleOutsideClick = (e) => {
    debug('handleOutsideClick()')
    const { closeOnOutsideClick, onClose } = this.props

    if (closeOnOutsideClick && onClose) onClose(e, this.props)
  }

  renderChildren() {
    const { children } = this.props

    if (children) {
      return (
        <div className='content'>
          <div className='center'>
            {children}
          </div>
        </div>
      )
    }

    return null
  }

  render() {
    const {
      active,
      blurring,
      className,
      inverted,
      onClose,
      page,
    } = this.props

    const classes = cx(
      'ui',
      useKeyOnly(active, 'active'),
      useKeyOnly(blurring, 'blurring'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(page, 'page'),
      'dimmer transition visible',
      className,
    )
    const ElementType = getElementType(Dimmer, this.props)

    const unhandled = getUnhandledProps(Dimmer, this.props)
    const portalPropNames = _.keys(Portal.propTypes)

    const rest = _.omit(unhandled, portalPropNames)
    const portalProps = _.pick(unhandled, portalPropNames)

    const dimmerJSX = (
      <ElementType
        {...rest}
        className={classes}
        onClick={this.handleOutsideClick}
      >
        {this.renderChildren()}
      </ElementType>
    )

    if (page) {
      return (
        <Portal
          {...portalProps}
          onClose={onClose}
          onMount={this.handlePageMount}
          onUnmount={this.handlePageUnmount}
          open={active}
        >
          {dimmerJSX}
        </Portal>
      )
    }

    return dimmerJSX
  }
}

export default Dimmer
