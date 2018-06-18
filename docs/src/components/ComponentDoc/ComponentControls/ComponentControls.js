import PropTypes from 'prop-types'
import React from 'react'
import { Menu, Transition } from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'
import ComponentControlsCopyLink from './ComponentControlsCopyLink'
import ComponentControlsEditCode from './ComponentControlsEditCode'
import ComponentControlsShowVariables from './ComponentControlsShowVariables'
import ComponentControlsMaximize from './ComponentControlsMaximize'
import ComponentControlsShowHtml from './ComponentControlsShowHtml'
import ComponentControlsRtl from './ComponentControlsRtl'

const ComponentControls = (props) => {
  const {
    anchorName,
    examplePath,
    showHTML,
    showRtl,
    showCode,
    showVariables,
    onCopyLink,
    onShowHTML,
    onShowRtl,
    onShowCode,
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
        <Menu color='green' compact icon size='small' text>
          <ComponentControlsEditCode active={showCode} onClick={onShowCode} />
          <ComponentControlsShowVariables active={showVariables} onClick={onShowVariables} />
          <ComponentControlsShowHtml active={showHTML} onClick={onShowHTML} />
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
  onShowCode: PropTypes.func,
  onShowHTML: PropTypes.func,
  onShowRtl: PropTypes.func,
  onShowVariables: PropTypes.func,
  showCode: PropTypes.bool,
  showHTML: PropTypes.bool,
  showRtl: PropTypes.bool,
  showVariables: PropTypes.bool,
  visible: PropTypes.bool,
}

export default updateForKeys(['showCode', 'showHTML', 'showRtl', 'showVariables', 'visible'])(
  ComponentControls,
)
