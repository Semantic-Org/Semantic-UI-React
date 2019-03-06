import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

const ComponentControlsShowHtml = ({ active, disabled, onClick }) => (
  <Menu.Item
    active={active}
    disabled={disabled}
    onClick={onClick}
    title={disabled ? 'HTML preview is disabled for this example' : ''}
  >
    <Icon color={active ? 'green' : 'grey'} size='large' name='html5' fitted />
    Show HTML
  </Menu.Item>
)

ComponentControlsShowHtml.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default ComponentControlsShowHtml
