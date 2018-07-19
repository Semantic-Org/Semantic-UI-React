import PropTypes from 'prop-types'
import React from 'react'
import { Menu } from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'
import ComponentControlsShowCode from './ComponentControlsShowCode'
import ComponentControlsCopyLink from './ComponentControlsCopyLink'
import ComponentControlsShowVariables from './ComponentControlsShowVariables'
import ComponentControlsMaximize from './ComponentControlsMaximize'
import ComponentControlsRtl from './ComponentControlsRtl'

const ComponentControls: any = props => {
  const {
    anchorName,
    examplePath,
    showCode,
    showRtl,
    showVariables,
    onCopyLink,
    onShowCode,
    onShowRtl,
    onShowVariables,
  } = props

  return (
    <Menu color="green" icon="labeled" size="tiny" fitted compact text>
      <ComponentControlsShowCode active={showCode} onClick={onShowCode} />
      <ComponentControlsShowVariables active={showVariables} onClick={onShowVariables} />
      <ComponentControlsRtl active={showRtl} onClick={onShowRtl} />
      <ComponentControlsMaximize examplePath={examplePath} />
      <ComponentControlsCopyLink anchorName={anchorName} onClick={onCopyLink} />
    </Menu>
  )
}

ComponentControls.propTypes = {
  examplePath: PropTypes.string,
  anchorName: PropTypes.string,
  onCopyLink: PropTypes.func,
  onShowCode: PropTypes.func,
  onShowRtl: PropTypes.func,
  onShowVariables: PropTypes.func,
  showCode: PropTypes.bool,
  showRtl: PropTypes.bool,
  showVariables: PropTypes.bool,
  visible: PropTypes.bool,
}

export default updateForKeys(['showRtl', 'showCode', 'showVariables', 'visible'])(ComponentControls)
