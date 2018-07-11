import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenExist,
  createComponent,
  customPropTypes,
  getElementType,
  getUnhandledProps,
} from '../../lib'
import chatRules from './chatRules'
import ChatMessage from './ChatMessage'

const Chat: any = props => {
  const { children, className, messages, styles } = props
  const ElementType = getElementType(Chat, props)
  const rest = getUnhandledProps(ChatMessage, props)

  return (
    <ElementType {...rest} className={cx('ui-chat', styles.root, className)}>
      {childrenExist(children) ? children : _.map(messages, message => ChatMessage.create(message))}
    </ElementType>
  )
}

Chat.propTypes = {
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  children: PropTypes.node,

  /** Shorthand array of messages. */
  messages: PropTypes.arrayOf(PropTypes.any),

  styles: PropTypes.object,
  variables: PropTypes.object,
  rules: PropTypes.object,
}

Chat.handledProps = ['as', 'className', 'children', 'messages', 'styles']

Chat.defaultProps = { as: 'ul' }

Chat.Message = ChatMessage

export default createComponent(Chat, { rules: chatRules })
