import * as React from 'react'
import PropTypes from 'prop-types'

import { childrenExist, createShorthandFactory, customPropTypes, UIComponent } from '../../lib'

import chatMessageRules from './chatMessageRules'
import chatMessageVariables from './chatMessageVariables'

class ChatMessage extends UIComponent<any, any> {
  static className = 'ui-chat__message'

  static create: Function

  static displayName = 'ChatMessage'

  static propTypes = {
    as: customPropTypes.as,

    /** Child content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Shorthand for the primary content. */
    content: PropTypes.string,

    /** Indicates whether message belongs to the current user. */
    mine: PropTypes.bool,
  }

  static defaultProps = {
    as: 'li',
  }

  static rules = chatMessageRules

  static variables = chatMessageVariables

  renderComponent({ ElementType, classes, rest }) {
    const { children, content } = this.props

    return (
      <ElementType {...rest} className={classes.root}>
        {childrenExist(children) ? children : content}
      </ElementType>
    )
  }
}

ChatMessage.create = createShorthandFactory(ChatMessage, content => ({ content }))

export default ChatMessage
