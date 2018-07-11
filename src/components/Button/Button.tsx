import PropTypes from 'prop-types'
import React from 'react'

import { UIComponent, childrenExist, customPropTypes } from '../../lib'
import buttonRules from './buttonRules'
import buttonVariables from './buttonVariables'

/**
 * A button.
 */
class Button extends UIComponent<any, any> {
  static displayName = 'Button'

  static className = 'ui-button'

  static rules = buttonRules

  static variables = buttonVariables

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** A button can appear circular. */
    circular: PropTypes.bool,

    /** Additional classes. */
    className: PropTypes.string,

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /** A button can be formatted to show different levels of emphasis. */
    type: PropTypes.oneOf(['primary', 'secondary']),
  }

  static handledProps = ['as', 'circular', 'className', 'content', 'type']

  static defaultProps = {
    as: 'button',
  }

  renderComponent({ ElementType, classes, rest }) {
    const { children, content } = this.props
    return (
      <ElementType {...rest} className={classes.root}>
        {childrenExist(children) ? children : content}
      </ElementType>
    )
  }
}
export default Button
