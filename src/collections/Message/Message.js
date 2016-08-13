import _ from 'lodash'
import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
} from '../../lib'
import { createIcon } from '../../factories'
import { Icon } from '../../elements'
import MessageContent from './MessageContent'
import MessageHeader from './MessageHeader'
import MessageList from './MessageList'
import MessageItem from './MessageItem'

/**
 * A message displays information that explains nearby content
 */
function Message(props) {
  const {
    children,
    className,
    content,
    header,
    icon,
    list,
    onDismiss,
    hidden,
    visible,
    floating,
    compact,
    attached,
    warning,
    info,
    positive,
    success,
    negative,
    error,
    color,
    size,
  } = props

  const classes = cx(
    'ui',
    size,
    color,
    useKeyOnly(icon, 'icon'),
    useKeyOnly(hidden, 'hidden'),
    useKeyOnly(visible, 'visible'),
    useKeyOnly(floating, 'floating'),
    useKeyOnly(compact, 'compact'),
    useKeyOrValueAndKey(attached, 'attached'),
    useKeyOnly(warning, 'warning'),
    useKeyOnly(info, 'info'),
    useKeyOnly(positive, 'positive'),
    useKeyOnly(success, 'success'),
    useKeyOnly(negative, 'negative'),
    useKeyOnly(error, 'error'),
    'message',
    className,
  )

  const dismissIcon = onDismiss && <Icon name='close' onClick={onDismiss} />
  const rest = getUnhandledProps(Message, props)

  if (content || header || (icon && icon !== true) || list) {
    return (
      <div {...rest} className={classes}>
        {dismissIcon}
        {createIcon(icon)}
        {(header || content || list) && (
          <MessageContent>
            {header && <MessageHeader>{header}</MessageHeader>}
            {list && <MessageList items={list} />}
            {content && <p>{content}</p>}
          </MessageContent>
        )}
      </div>
    )
  }

  return (
    <div {...rest} className={classes}>
      {dismissIcon}
      {children}
    </div>
  )
}

Message._meta = {
  name: 'Message',
  type: META.TYPES.COLLECTION,
  props: {
    attached: ['bottom'],
    color: SUI.COLORS,
    size: _.without(SUI.SIZES, 'medium'),
  },
}

Message.propTypes = {
  /** Primary content of the message. */
  children: customPropTypes.every([
    PropTypes.node,
    customPropTypes.disallow(['header', 'content']),
    customPropTypes.givenProps(
      { icon: PropTypes.node.isRequired },
      customPropTypes.disallow(['icon'])
    ),
  ]),

  /** Additional classes. */
  className: PropTypes.string,

  /** The body of the message.  Mutually exclusive with children. */
  content: PropTypes.string,

  /** The content of the MessageHeader. Mutually exclusive with children. */
  header: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]),
  ]),

  /** A message can contain an icon. */
  icon: customPropTypes.every([
    customPropTypes.givenProps(
      { children: PropTypes.node.isRequired },
      PropTypes.bool
    ),
    customPropTypes.givenProps(
      { icon: PropTypes.string.isRequired },
      customPropTypes.disallow(['children'])
    ),
  ]),

  /** Array of string items for the MessageList. Mutually exclusive with children. */
  list: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.arrayOf(PropTypes.string),
  ]),

  /**
   * A message that the user can choose to hide.
   * Called when the user clicks the "x" icon. This also adds the "x" icon.
   */
  onDismiss: PropTypes.func,

  /** A message can be hidden. */
  hidden: PropTypes.bool,

  /** A message can be set to visible to force itself to be shown. */
  visible: PropTypes.bool,

  /** A message can float above content that it is related to. */
  floating: PropTypes.bool,

  /** A message can only take up the width of its content. */
  compact: PropTypes.bool,

  /** A message can be formatted to attach itself to other content. */
  attached: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Message._meta.props.attached),
  ]),

  /** A message may be formatted to display warning messages. */
  warning: PropTypes.bool,

  /** A message may be formatted to display information. */
  info: PropTypes.bool,

  /** A message may be formatted to display a positive message.  Same as `success`. */
  positive: PropTypes.bool,

  /** A message may be formatted to display a positive message.  Same as `positive`. */
  success: PropTypes.bool,

  /** A message may be formatted to display a negative message. Same as `error`. */
  negative: PropTypes.bool,

  /** A message may be formatted to display a negative message. Same as `negative`. */
  error: PropTypes.bool,

  /** A message can be formatted to be different colors. */
  color: PropTypes.oneOf(Message._meta.props.color),

  /** A message can have different sizes. */
  size: PropTypes.oneOf(Message._meta.props.size),
}

Message.Content = MessageContent
Message.Header = MessageHeader
Message.List = MessageList
Message.Item = MessageItem

export default Message
