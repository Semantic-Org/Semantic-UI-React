import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

const ComponentControlsShowHtml = ({ active, onClick }) => (
  <Menu.Item active={active} onClick={onClick}>
    <Icon color={active ? 'green' : 'grey'} size='large' name='html5' fitted />
    Show HTML
  </Menu.Item>
)

ComponentControlsShowHtml.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
}

export default ComponentControlsShowHtml
