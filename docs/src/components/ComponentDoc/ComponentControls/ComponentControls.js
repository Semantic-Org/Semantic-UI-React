import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Menu, Placeholder } from 'semantic-ui-react'

import ComponentControlsCopyLink from './ComponentControlsCopyLink'
import ComponentControlsCodeSandbox from './ComponentControlsCodeSandbox'

const ComponentControls = (props) => {
  const { anchorName, exampleCode, examplePath, showCode, onCopyLink, onShowCode, visible } = props
  const externalHref = `/maximize/${_.kebabCase(examplePath.split('/').slice(-1))}`

  if (visible) {
    return (
      <Menu color='green' compact icon='labeled' size='tiny' text>
        <Menu.Item active={showCode} onClick={onShowCode}>
          <Icon color={showCode ? 'green' : 'grey'} fitted name='code' size='large' />
          Try it
        </Menu.Item>
        <ComponentControlsCodeSandbox exampleCode={exampleCode} visible={visible} />
        <Menu.Item href={externalHref} target='_blank'>
          <Icon color='grey' fitted name='window maximize' size='large' />
          Maximize
        </Menu.Item>
        <ComponentControlsCopyLink anchorName={anchorName} onClick={onCopyLink} />
      </Menu>
    )
  }

  return (
    <Placeholder>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder>
  )
}

ComponentControls.propTypes = {
  anchorName: PropTypes.string,
  disableHtml: PropTypes.bool,
  exampleCode: PropTypes.string,
  examplePath: PropTypes.string,
  onCopyLink: PropTypes.func,
  onShowCode: PropTypes.func,
  showCode: PropTypes.bool,
  visible: PropTypes.bool,
}

export default React.memo(ComponentControls)
