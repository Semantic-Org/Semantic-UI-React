import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { childrenExist, customPropTypes, UIComponent } from '../../lib'
import chatRules from './chatRules'
import ChatMessage from './ChatMessage'

class Chat extends UIComponent<any, any> {
  static className = 'ui-chat'

  static displayName = 'Chat'

  static propTypes = {
    as: customPropTypes.as,

    /** Additional classes. */
    className: PropTypes.string,

    children: PropTypes.node,

    /** Shorthand array of messages. */
    messages: PropTypes.arrayOf(PropTypes.any),
  }

  static handledProps = ['as', 'className', 'children', 'messages']

  static defaultProps = { as: 'ul' }

  static rules = chatRules

  static Message = ChatMessage

  renderComponent({ ElementType, classes, rest }) {
    const { children, messages } = this.props

    return (
      <ElementType {...rest} className={classes.root}>
        {childrenExist(children)
          ? children
          : _.map(messages, message => ChatMessage.create(message))}
      </ElementType>
    )
  }
}

export default Chat
