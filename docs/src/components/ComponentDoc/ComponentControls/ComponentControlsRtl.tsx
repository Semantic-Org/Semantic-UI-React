import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'
import ComponentControlsToolTip from './ComponentControlsToolTip'

const ComponentControlsShowRtl: React.SFC = ({ active, onClick }: any) => {
  const btnLabel = 'Switch to RTL'

  return (
    <ComponentControlsToolTip content={btnLabel}>
      <Menu.Item active={active} onClick={onClick}>
        <Icon color={active ? 'green' : 'grey'} size="large" name="align right" fitted />
        {btnLabel}
      </Menu.Item>
    </ComponentControlsToolTip>
  )
}

ComponentControlsShowRtl.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
}

export default updateForKeys(['active'])(ComponentControlsShowRtl)
