import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
} from '../../lib'
import Button from '../../elements/Button'

/**
 * A modal can contain a row of actions.
 */
const ModalActions = React.forwardRef(function (props, ref) {
  const { actions, children, className, content } = props

  const classes = cx('actions', className)
  const rest = getUnhandledProps(ModalActions, props)
  const ElementType = getElementType(ModalActions, props)

  if (!childrenUtils.isNil(children)) {
    return (
      <ElementType {...rest} className={classes} ref={ref}>
        {children}
      </ElementType>
    )
  }
  if (!childrenUtils.isNil(content)) {
    return (
      <ElementType {...rest} className={classes}>
        {content}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {_.map(actions, (action) =>
        Button.create(action, {
          overrideProps: (predefinedProps) => ({
            onClick: (e, buttonProps) => {
              _.invoke(predefinedProps, 'onClick', e, buttonProps)
              _.invoke(props, 'onActionClick', e, buttonProps)
            },
          }),
        }),
      )}
    </ElementType>
  )
})

ModalActions.displayName = 'ModalActions'
ModalActions.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Array of shorthand buttons. */
  actions: customPropTypes.collectionShorthand,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props from the clicked action.
   */
  onActionClick: customPropTypes.every([customPropTypes.disallow(['children']), PropTypes.func]),
}

ModalActions.create = createShorthandFactory(ModalActions, (actions) => ({ actions }))

export default ModalActions
