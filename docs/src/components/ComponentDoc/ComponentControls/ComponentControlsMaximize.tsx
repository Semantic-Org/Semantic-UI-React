import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

import { neverUpdate } from 'docs/src/hoc'
import ComponentControlsToolTip from './ComponentControlsToolTip'

const ComponentControlsMaximize: any = ({ examplePath }) => {
  const href = `/maximize/${_.kebabCase(examplePath.split('/').slice(-1))}`

  return (
    <ComponentControlsToolTip content="Full Screen">
      <Menu.Item as={NavLink} to={href} target="_blank" rel="noopener noreferrer">
        <Icon color="grey" fitted name="window maximize" size="large" />
      </Menu.Item>
    </ComponentControlsToolTip>
  )
}
ComponentControlsMaximize.propTypes = {
  examplePath: PropTypes.string.isRequired,
}

export default neverUpdate(ComponentControlsMaximize)
