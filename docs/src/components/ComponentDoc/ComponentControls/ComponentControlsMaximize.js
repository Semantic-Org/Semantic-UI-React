import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

import { neverUpdate } from 'docs/app/HOC'
import ComponentControlsToolTip from './ComponentControlsToolTip'

const ComponentControlsMaximize = ({ anchorName }) => (
  <ComponentControlsToolTip content='Full Screen'>
    <Menu.Item href={`/maximize/${anchorName}`} target='_blank'>
      <Icon
        color='grey'
        fitted
        name='window maximize'
        size='large'
      />
    </Menu.Item>
  </ComponentControlsToolTip>
)

ComponentControlsMaximize.propTypes = {
  anchorName: PropTypes.string,
}

export default neverUpdate(ComponentControlsMaximize)
