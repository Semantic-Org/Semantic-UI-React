import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

import { neverUpdate } from 'docs/app/HOC'
import ComponentControlsToolTip from './ComponentControlsToolTip'

const ComponentControlsMaximize = ({ examplePath }) => {
  const [displayName, type, exampleName] = examplePath
    .split('/')
    .slice(-3)
    .map(part => _.kebabCase(part).toLowerCase())

  const href = `/maximize/${type}/${displayName}/${exampleName}`

  return (
    <ComponentControlsToolTip content='Full Screen'>
      <Menu.Item href={href} target='_blank'>
        <Icon color='grey' fitted name='window maximize' size='large' />
      </Menu.Item>
    </ComponentControlsToolTip>
  )
}
ComponentControlsMaximize.propTypes = {
  examplePath: PropTypes.string,
}

export default neverUpdate(ComponentControlsMaximize)
