import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'

import { pure } from 'docs/app/HOC'

const popupStyle = { padding: '0.5em' }

const ComponentPropsName = ({ name, required }) => (
  <div>
    <code>{name}</code>
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

ComponentPropsName.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
}

export default pure(ComponentPropsName)
