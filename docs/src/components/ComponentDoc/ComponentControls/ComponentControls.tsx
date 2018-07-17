import PropTypes from 'prop-types'
import React from 'react'
import { Menu, Transition } from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'
import ComponentControlsCopyLink from './ComponentControlsCopyLink'
import ComponentControlsShowVariables from './ComponentControlsShowVariables'
import ComponentControlsMaximize from './ComponentControlsMaximize'
import ComponentControlsRtl from './ComponentControlsRtl'

const ComponentControls: any = props => {
  const {
    anchorName,
    examplePath,
    showRtl,
    showVariables,
    onCopyLink,
    onShowRtl,
    onShowVariables,
    visible,
  } = props

  return (
    <Transition duration={200} visible={!!visible} unmountOnHide>
      {/*
        Heads up! Don't remove this `div`, visible Transition applies `display: block`,
        while Menu should have `display: inline-flex`
      */}
      <div>
        <Menu color="green" icon="labeled" size="tiny" floated="right" text>
          <ComponentControlsShowVariables active={showVariables} onClick={onShowVariables} />
          <ComponentControlsRtl active={showRtl} onClick={onShowRtl} />
          <ComponentControlsMaximize examplePath={examplePath} />
          <ComponentControlsCopyLink anchorName={anchorName} onClick={onCopyLink} />
        </Menu>
      </div>
    </Transition>
  )
}

ComponentControls.propTypes = {
  examplePath: PropTypes.string,
  anchorName: PropTypes.string,
  onCopyLink: PropTypes.func,
  onShowRtl: PropTypes.func,
  onShowVariables: PropTypes.func,
  showRtl: PropTypes.bool,
  showVariables: PropTypes.bool,
  visible: PropTypes.bool,
}

export default updateForKeys(['showRtl', 'showVariables', 'visible'])(ComponentControls)
