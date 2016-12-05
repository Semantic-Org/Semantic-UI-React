import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

/**
 * A title sub-component for Accordion component
 */
export default class AccordionTitle extends Component {
  static displayName = 'AccordionTitle'

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Whether or not the title is in the open state. */
    active: PropTypes.bool,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /**
     * Called on blur.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,
  }

  static _meta = {
    name: 'AccordionTitle',
    type: META.TYPES.MODULE,
    parent: 'Accordion',
  }

  handleClick = (e) => {
    const { onClick } = this.props

    if (onClick) onClick(e, this.props)
  }

  render() {
    const {
      active,
      children,
      className,
    } = this.props

    const classes = cx(
      useKeyOnly(active, 'active'),
      'title',
      className
    )
    const rest = getUnhandledProps(AccordionTitle, this.props)
    const ElementType = getElementType(AccordionTitle, this.props)

    return <ElementType {...rest} className={classes} onClick={this.handleClick}>{children}</ElementType>
  }
}
