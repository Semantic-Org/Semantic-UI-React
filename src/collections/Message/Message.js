import React, { PropTypes } from 'react'
import cx from 'classnames'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'
import Header from '../../elements/Header/Header'
import Icon from '../../elements/Icon/Icon'
import * as sui from '../../utils/semanticUtils'
import { customPropTypes } from '../../utils/propUtils'

/**
 * A message displays information that explains nearby content
 */
function Message(props) {
  const {
    children,
    className,
    header,
    icon,
    dismissable,
  } = props
  const classes = cx(
    'ui',
    className,
    { icon: icon },
    'message'
  )

  const closeIcon = <Icon name='close' onClick={this.handleDismiss} />
  const header = <Header>{header}</Header>
  const icon = <Icon name={icon} />

  // wrap children in <p> if there is a header
  const children = header ? <p>{children}</p> : children

  // wrap header and children in content if there is an icon
  const content = (
    <div className='content'>
      {header && header}
      {children}
    </div>
  )

  // prevent spreading icon classes as props on message element
  const messageProps = { ...this.props }
  delete messageProps.icon

  return (
    <div {...messageProps} className={classes}>
      {dismissable && closeIcon}
      {icon && icon}
      {icon && content}
      {!icon && header && header}
      {!icon && children && children}
    </div>
  )
}

Message._meta = {
  library: META.library.semanticUI,
  name: 'Message',
  type: META.type.collection,
  props: {
    attached: [true, 'bottom'],
    color: sui.colors,
    size: sui.sizes,
  }
}

Message.propTypes = {
  /** Primary content of the message. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['icon', 'header', 'content']),
    PropTypes.node,
  ]),

  /** Additional classes. */
  className: PropTypes.string,

  /** Primary content.  Mutually exclusive with children. */
  content: PropTypes.node,

  /** A message can contain an icon. */
  icon: PropTypes.bool,

  /** A message that the user can choose to hide. */
  dismissable: PropTypes.bool,

  /** A message can be hidden. */
  hidden: PropTypes.bool,

  /** A message can be set to visible to force itself to be shown. */
  visible: PropTypes.bool,

  /** A message can float above content that it is related to. */
  floating: PropTypes.bool,

  /** A message can only take up the width of its content. */
  compact: PropTypes.bool,

  /** A message can be formatted to attach itself to other content. */
  attached: PropTypes.oneOf(Message._meta.props.attached),

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

export default Message
