import _ from 'lodash'
import cx from 'classnames'
import React, { cloneElement, Component, PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
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
class Dimmer extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** An active dimmer will dim its parent container. */
    active: PropTypes.bool,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Handles click outside Dimmer's content, but inside Dimmer area. */
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

  handlePortalMount = () => document.body.classList.add('dimmed', 'dimmable')

  handlePortalUnmount = () => document.body.classList.remove('dimmed', 'dimmable')

  handleClickOutside = (e) => {
    const { onClickOutside } = this.props

    if (onClickOutside) onClickOutside(e, this.props)
  }

  handleClickChildren = (e) => {
    const { children } = this.props

    _.invoke(children, 'props.onClick', e)
    e.stopPropagation()
  }

  render() {
    const {
      active,
      children,
      className,
      inverted,
      page,
    } = this.props

    const classes = cx(
      'ui',
      useKeyOnly(active, 'active'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(page, 'page'),
      'dimmer transition visible',
      className,
    )
    const rest = getUnhandledProps(Dimmer, this.props)
    const ElementType = getElementType(Dimmer, this.props)

    const childrenJSX = children && (
        <div className='content'>
          <div className='center' onClick={this.handleClickOutside}>
            {cloneElement(children, { onClick: this.handleClickChildren })}
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
          <ElementType{...rest} className={classes}>{childrenJSX}</ElementType>
        </Portal>
      )
    }

    return <ElementType{...rest} className={classes}>{childrenJSX}</ElementType>
  }
}

export default Dimmer
