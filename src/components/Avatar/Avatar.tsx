import PropTypes from 'prop-types'
import React from 'react'
import { Image, Label, Icon } from '../../'

import { customPropTypes, UIComponent } from '../../lib'
import avatarRules from './avatarRules'
import avatarVariables from './avatarVariables'

/**
 * An avatar is a graphic representation of user alongside with a presence icon.
 * @accessibility To be discussed
 *
 */
class Avatar extends UIComponent<any, any> {
  static className = 'ui-avatar'

  static displayName = 'Avatar'

  static handledProps = ['as', 'className', 'name', 'size', 'src', 'status']

  static rules = avatarRules

  static variables = avatarVariables

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Additional classes. */
    className: PropTypes.string,

    /** The name used for displaying the initials of the avatar if the image is not provided. */
    name: PropTypes.string,

    /** Size multiplier (default 5) * */
    size: PropTypes.number,

    /** The src of the image used in the Avatar. */
    src: PropTypes.string,

    /** The presence of the user, used for showing different presence icon in the Avatar. */
    status: PropTypes.oneOf([
      'Available',
      'Away',
      'BeRightBack',
      'Busy',
      'DoNotDisturb',
      'Offline',
      'PresenceUnknown',
    ]),
  }

  static defaultProps = {
    size: 5,
  }

  static statusToIcon = {
    Available: {
      icon: 'check',
      color: 'green',
    },
    Busy: {
      icon: '',
      color: 'red',
    },
    DoNotDisturb: {
      icon: 'minus',
      color: 'red',
    },
    Away: {
      icon: 'clock',
      color: 'yellow',
    },
    BeRightBack: {
      icon: 'clock',
      color: 'yellow',
    },
    Offline: {
      icon: '',
      color: 'grey',
    },
    PresenceUnknown: {
      icon: '',
      color: 'grey',
    },
  }

  renderComponent({ ElementType, classes, rest }) {
    const { src, name, status } = this.props
    const { icon = '', color = '' } = Avatar.statusToIcon[status] || {}
    return (
      <ElementType {...rest} className={classes.root}>
        {src ? (
          <Image className={classes.imageAvatar} avatar src={src} title={name} />
        ) : (
          <Label
            className={classes.avatarLabel}
            as="div"
            content={this.getInitials(name)}
            variables={{ padding: '0px' }}
            circular
            title={name}
          />
        )}
        {status && (
          <span className={classes.presenceSpan}>
            <Label
              className={classes.presenceIconLabel}
              as="div"
              variables={{ padding: '0px' }}
              style={{ background: color }}
              circular
              title={name}
            >
              <Icon
                size="mini"
                name={icon}
                color="white"
                style={avatarRules.presenceIcon()}
                title={status}
              />
            </Label>
          </span>
        )}
      </ElementType>
    )
  }

  getInitials(name: string): string {
    if (!name) {
      return ''
    }
    const names = name.split(' ')
    return names
      .map(name => (name.length ? name.charAt(0) : ''))
      .reduce((accumulator, currentValue) => accumulator + currentValue)
  }
}

export default Avatar
