import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'

const ComponentControlsShowCode: any = ({ active, onClick }) => (
  <Menu.Item active={active} onClick={onClick}>
    <Icon color={active ? 'green' : 'grey'} fitted name="code" size="large" />
    Try it
  </Menu.Item>
)

ComponentControlsShowCode.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
}

export default updateForKeys(['active'])(ComponentControlsShowCode)
