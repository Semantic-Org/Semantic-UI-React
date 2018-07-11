import * as React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'
import {
  childrenExist,
  createComponent,
  customPropTypes,
  getElementType,
  getUnhandledProps,
} from '../../lib'

import chatMessageRules from './chatMessageRules'
import chatMessageVariables from './chatMessageVariables'

const ChatMessage: any = props => {
  const { children, content, styles, className } = props
  const ElementType = getElementType(ChatMessage, props)
  const rest = getUnhandledProps(ChatMessage, props)

  return (
    <ElementType {...rest} className={cx('ui-chat__message', styles.root, className)}>
      {childrenExist(children) ? children : content}
    </ElementType>
  )
}

ChatMessage.propTypes = {
  as: customPropTypes.as,

  /** Child content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for the primary content. */
  content: PropTypes.string,

  /** Indicates whether message belongs to the current user. */
  mine: PropTypes.bool,

  styles: PropTypes.object,
  variables: PropTypes.object,
  rules: PropTypes.object,
}

ChatMessage.defaultProps = {
  as: 'li',
}

export default createComponent(ChatMessage, {
  rules: chatMessageRules,
  variables: chatMessageVariables,
  shorthand: content => ({ content }),
})
