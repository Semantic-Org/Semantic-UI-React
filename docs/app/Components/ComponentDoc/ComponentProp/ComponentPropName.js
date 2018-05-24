import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Icon, Popup } from 'semantic-ui-react'

const popupStyle = { padding: '0.5em' }

export default class ComponentPropName extends PureComponent {
  static propTypes = {
    displayName: PropTypes.string,
    required: PropTypes.bool,
  }

  render() {
    const { displayName, required } = this.props

    return (
      <div>
        <code>{displayName}</code>
        {required && (
          <Popup
            content='Required'
            inverted
            position='right center'
            size='tiny'
            style={popupStyle}
            trigger={<Icon color='red' name='asterisk' size='small' />}
          />
        )}
      </div>
    )
  }
}
