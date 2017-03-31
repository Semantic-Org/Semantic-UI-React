import cx from 'classnames'
import _ from 'lodash'
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
  const { actions, children, className } = props
  const classes = cx('actions', className)
  const rest = getUnhandledProps(ModalActions, props)
  const ElementType = getElementType(ModalActions, props)

  if (!_.isNil(children)) return <ElementType {...rest} className={classes}>{children}</ElementType>

  return (
    <ElementType {...rest} className={classes}>
      {_.map(actions, (action) => Button.create(action))}
    </ElementType>
  )
}

ModalActions._meta = {
  name: 'ModalActions',
  type: META.TYPES.MODULE,
  parent: 'Modal',
}

ModalActions.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Elements to render as Modal action buttons. */
  actions: PropTypes.arrayOf(customPropTypes.itemShorthand),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

ModalActions.create = createShorthandFactory(ModalActions, actions => ({ actions }))

export default ModalActions
