import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

import { updateForKeys } from 'docs/app/HOC'
import ComponentControlsToolTip from './ComponentControlsToolTip'

const ComponentControlsShowHtml = ({ active, onClick }) => (
  <ComponentControlsToolTip content='Show HTML'>
    <Menu.Item active={active} onClick={onClick}>
      <Icon
        color={active ? 'green' : 'grey'}
        size='large'
        name='html5'
        fitted
      />
    </Menu.Item>
  </ComponentControlsToolTip>
)

ComponentControlsShowHtml.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
}

export default updateForKeys(['active'])(ComponentControlsShowHtml)
