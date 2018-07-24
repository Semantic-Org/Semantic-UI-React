import PropTypes from 'prop-types'
import React from 'react'
import { Menu } from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'
import ComponentControlsCopyLink from './ComponentControlsCopyLink'
import ComponentControlsEditCode from './ComponentControlsEditCode'
import ComponentControlsMaximize from './ComponentControlsMaximize'
import ComponentControlsShowHtml from './ComponentControlsShowHtml'

const ComponentControls = (props) => {
  const { anchorName, examplePath, showHTML, showCode, onCopyLink, onShowHTML, onShowCode } = props

  return (
    <Menu color='green' compact icon size='small' text>
      <ComponentControlsCopyLink anchorName={anchorName} onClick={onCopyLink} />
      <ComponentControlsMaximize examplePath={examplePath} />
      <ComponentControlsShowHtml active={showHTML} onClick={onShowHTML} />
      <ComponentControlsEditCode active={showCode} onClick={onShowCode} />
    </Menu>
  )
}

ComponentControls.propTypes = {
  examplePath: PropTypes.string,
  anchorName: PropTypes.string,
  onCopyLink: PropTypes.func,
  onShowCode: PropTypes.func,
  onShowHTML: PropTypes.func,
  showCode: PropTypes.bool,
  showHTML: PropTypes.bool,
  visible: PropTypes.bool,
}

export default updateForKeys(['showCode', 'showHTML', 'visible'])(ComponentControls)
