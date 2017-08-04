import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import Button from '../../elements/Button'

/**
 * A modal can contain a row of actions.
 */
export default class ModalActions extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Elements to render as Modal action buttons. */
    actions: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.arrayOf(customPropTypes.itemShorthand),
    ]),

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /**
     * onClick handler for an action. Mutually exclusive with children.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All item props.
     */
    onActionClick: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.func,
    ]),
  }

  static _meta = {
    name: 'ModalActions',
    type: META.TYPES.MODULE,
    parent: 'Modal',
  }

  handleButtonOverrides = predefinedProps => ({
    onClick: (e, buttonProps) => {
      _.invoke(predefinedProps, 'onClick', e, buttonProps)
      _.invoke(this.props, 'onActionClick', e, buttonProps)
    },
  })

  render() {
    const { actions, children, className } = this.props
    const classes = cx('actions', className)
    const rest = getUnhandledProps(ModalActions, this.props)
    const ElementType = getElementType(ModalActions, this.props)

    if (!childrenUtils.isNil(children)) return <ElementType {...rest} className={classes}>{children}</ElementType>

    return (
      <ElementType {...rest} className={classes}>
        {_.map(actions, action => Button.create(action, { overrideProps: this.handleButtonOverrides }))}
      </ElementType>
    )
  }
}

ModalActions.create = createShorthandFactory(ModalActions, actions => ({ actions }))
