import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'

const ComponentControlsShowVariables: any = ({ active, onClick }) => {
  const btnLabel = 'Theme it'

  return (
    <Menu.Item active={active} onClick={onClick}>
      <Icon color={active ? 'green' : 'grey'} fitted name="paint brush" size="large" />
      {btnLabel}
    </Menu.Item>
  )
}

ComponentControlsShowVariables.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
}

export default updateForKeys(['active'])(ComponentControlsShowVariables)
