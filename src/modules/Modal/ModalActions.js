import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
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
function ModalActions(props) {
  const { children, className, actions } = props
  const classes = cx('actions', className)
  const rest = getUnhandledProps(ModalActions, props)
  const ElementType = getElementType(ModalActions, props)

  return (
    <ElementType {...rest} className={classes}>
      {children}
      {_.isNil(children) && actions.map((action) => Button.create(action, true))}
    </ElementType>
  )
}

ModalActions._meta = {
  name: 'ModalActions',
  type: META.TYPES.MODULE,
  parent: 'Modal',
}

ModalActions.propTypes = {
  /** Elements to render as Modal action buttons. */
  actions: PropTypes.arrayOf(customPropTypes.itemShorthand),

  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

ModalActions.create = createShorthandFactory(ModalActions, actions => ({ actions }), true)

export default ModalActions
