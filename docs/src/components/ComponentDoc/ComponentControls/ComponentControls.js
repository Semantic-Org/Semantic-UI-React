import PropTypes from 'prop-types'
import React from 'react'
import { Menu, Transition } from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'
import ComponentControlsCopyLink from './ComponentControlsCopyLink'
import ComponentControlsEditCode from './ComponentControlsEditCode'
import ComponentControlsMaximize from './ComponentControlsMaximize'
import ComponentControlsShowHtml from './ComponentControlsShowHtml'

const ComponentControls = (props) => {
  const {
    anchorName,
    examplePath,
    showHTML,
    showCode,
    onCopyLink,
    onShowHTML,
    onShowCode,
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
          <ComponentControlsCopyLink anchorName={anchorName} onClick={onCopyLink} />
          <ComponentControlsMaximize examplePath={examplePath} />
          <ComponentControlsShowHtml active={showHTML} onClick={onShowHTML} />
          <ComponentControlsEditCode active={showCode} onClick={onShowCode} />
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
  showCode: PropTypes.bool,
  showHTML: PropTypes.bool,
  visible: PropTypes.bool,
}

export default updateForKeys(['showCode', 'showHTML', 'visible'])(ComponentControls)
