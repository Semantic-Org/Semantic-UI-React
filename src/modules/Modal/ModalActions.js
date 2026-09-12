import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getComponentType,
  getUnhandledProps,
} from '../dropdown/lib'

/**
 * A modal can contain a row of actions.
 */
const ModalActions = React.forwardRef((props, ref) => {
  const { actions, children, className, content, onActionClick } = props

  const classes = cx('actions', className)
  const rest = getUnhandledProps(ModalActions, props)
  const ElementType = getComponentType(props)

  if (!childrenUtils.isNil(children)) {
    return (
      <ElementType {...rest} className={classes} ref={ref}>
        {children}
      </ElementType>
    )
  }

  if (!childrenUtils.isNil(content)) {
    return (
      <ElementType {...rest} className={classes} ref={ref}>
        {content}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {actions?.map((action, index) => {
        const buttonProps =
          typeof action === 'string' ? { content: action } : action

        const {
          content: buttonContent,
          className: buttonClassName,
          onClick: buttonOnClick,
          ...restButtonProps
        } = buttonProps

        const handleButtonClick = (e) => {
          buttonOnClick?.(e, buttonProps)
          onActionClick?.(e, buttonProps)
        }

        const buttonClasses = cx('ui', buttonClassName, 'button')

        return (
          <button
            key={buttonContent || index}
            {...restButtonProps}
            type="button"
            className={buttonClasses}
            onClick={handleButtonClick}
          >
            {buttonContent}
          </button>
        )
      })}
    </ElementType>
  )
})

ModalActions.displayName = 'ModalActions'

ModalActions.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** * Array of shorthand buttons.
   */
  actions: customPropTypes.every([
    customPropTypes.disallow(['children', 'content']),
    customPropTypes.collectionShorthand,
  ]),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** * Shorthand for primary content.
   */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    customPropTypes.contentShorthand,
  ]),

  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props from the clicked action.
   */
  onActionClick: customPropTypes.every([
    customPropTypes.disallow(['children', 'content']),
    PropTypes.func,
  ]),
}

ModalActions.defaultProps = {
  as: 'div',
  actions: [],
  children: null,
  className: '',
  content: null,
  onActionClick: () => {},
}

ModalActions.create = createShorthandFactory(ModalActions, (actions) => {
  return { actions }
})

export default ModalActions
