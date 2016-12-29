import _ from 'lodash'
import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  createShorthand,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
} from '../../lib'
import Icon from '../../elements/Icon'

import MessageContent from './MessageContent'
import MessageHeader from './MessageHeader'
import MessageList from './MessageList'
import MessageItem from './MessageItem'

/**
 * A message displays information that explains nearby content
 * @see Form
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
  const ElementType = getElementType(Message, props)

  if (!_.isNil(children)) {
    return (
      <ElementType {...rest} className={classes}>
        {dismissIcon}
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes}>
      {dismissIcon}
      {Icon.create(icon)}
      {(!_.isNil(header) || !_.isNil(content) || !_.isNil(list)) && (
        <MessageContent>
          {MessageHeader.create(header)}
          {MessageList.create(list)}
          {createShorthand('p', val => ({ children: val }), content)}
        </MessageContent>
      )}
    </ElementType>
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
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for MessageHeader. */
  header: customPropTypes.itemShorthand,

  /** A message can contain an icon. */
  icon: PropTypes.oneOfType([
    PropTypes.bool,
    customPropTypes.itemShorthand,
  ]),

  /** Array shorthand items for the MessageList. Mutually exclusive with children. */
  list: customPropTypes.collectionShorthand,

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
