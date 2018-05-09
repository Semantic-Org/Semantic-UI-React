import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'

import { pure } from 'docs/src/hoc'

const popupStyle = { padding: '0.5em' }

const ComponentPropName = ({ name, required }) => (
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

ComponentPropName.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
}

export default pure(ComponentPropName)
