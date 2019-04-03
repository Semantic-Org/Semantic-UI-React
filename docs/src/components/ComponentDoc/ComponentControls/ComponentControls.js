import PropTypes from 'prop-types'
import React from 'react'
import universal from 'react-universal-component'
import { Menu } from 'semantic-ui-react'

import { isBrowser } from 'src/lib'
import ComponentControlsCopyLink from './ComponentControlsCopyLink'
import ComponentControlsEditCode from './ComponentControlsEditCode'
import ComponentControlsMaximize from './ComponentControlsMaximize'
import ComponentControlsShowHtml from './ComponentControlsShowHtml'

const ComponentControlsCodeSandbox = isBrowser()
  ? universal(import('./ComponentControlsCodeSandbox'), {
      loading: () => (
        <Menu.Item disabled icon={{ loading: true, name: 'spinner', title: 'Loading...' }} />
      ),
    })
  : () => null

const ComponentControls = (props) => {
  const {
    anchorName,
    disableHtml,
    exampleCode,
    examplePath,
    showHTML,
    showCode,
    onCopyLink,
    onShowHTML,
    onShowCode,
  } = props

  return (
    <Menu color='green' compact icon='labeled' size='tiny' text>
      <ComponentControlsEditCode active={showCode} onClick={onShowCode} />
      <ComponentControlsShowHtml active={showHTML} disabled={disableHtml} onClick={onShowHTML} />
      <ComponentControlsCodeSandbox exampleCode={exampleCode} />
      <ComponentControlsMaximize examplePath={examplePath} />
      <ComponentControlsCopyLink anchorName={anchorName} onClick={onCopyLink} />
    </Menu>
  )
}

ComponentControls.propTypes = {
  anchorName: PropTypes.string,
  disableHtml: PropTypes.bool,
  exampleCode: PropTypes.string,
  examplePath: PropTypes.string,
  onCopyLink: PropTypes.func,
  onShowCode: PropTypes.func,
  onShowHTML: PropTypes.func,
  showCode: PropTypes.bool,
  showHTML: PropTypes.bool,
}

export default React.memo(ComponentControls)
