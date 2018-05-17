import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'
import ComponentControlsToolTip from './ComponentControlsToolTip'

const ComponentControlsShowVariables = ({ active, onClick }) => (
  <ComponentControlsToolTip content='Edit Variables'>
    <Menu.Item active={active} onClick={onClick}>
      <Icon color={active ? 'green' : 'grey'} fitted name='theme' size='large' />
    </Menu.Item>
  </ComponentControlsToolTip>
)

ComponentControlsShowVariables.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
}

export default updateForKeys(['active'])(ComponentControlsShowVariables)
