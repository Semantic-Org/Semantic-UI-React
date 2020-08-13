import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Icon, Popup } from 'semantic-ui-react'

export default class ComponentPropName extends PureComponent {
  render() {
    const { name, required } = this.props

    return (
      <div>
        <code>{name}</code>
        {required && (
          <Popup
            content='Required'
            inverted
            position='right center'
            size='tiny'
            trigger={<Icon color='red' name='asterisk' size='small' />}
          />
        )}
      </div>
    )
  }
}

ComponentPropName.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
}
