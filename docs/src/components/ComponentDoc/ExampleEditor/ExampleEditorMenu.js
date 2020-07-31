import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Button, Popup, Menu } from 'semantic-ui-react'

import CopyToClipboard from 'docs/src/components/CopyToClipboard'
import { repoURL } from 'docs/src/utils'

const menuStyle = {
  position: 'absolute',
  margin: 0,
  top: 0,
  right: '1rem',
  zIndex: 100,
}

const disabledStyle = { opacity: 0.5, pointerEvents: 'none' }

const getGithubEditHref = (examplePath) => {
  // get component name from file path:
  // elements/Button/Types/ButtonButtonExample
  const pathParts = examplePath.split(__PATH_SEP__)
  const filename = pathParts[pathParts.length - 1]

  return [
    `${repoURL}/edit/master/docs/src/examples/${examplePath}.js`,
    `?message=docs(${filename}): your description`,
  ].join('')
}

class ExampleEditorMenu extends PureComponent {
  state = {}

  constructor(props) {
    super(props)
    this.state = {
      githubEditHref: getGithubEditHref(props.examplePath),
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      isConfirmingReset: props.sourceCode === state.sourceCode ? state.isConfirmingReset : false,
      sourceCode: props.sourceCode,
    }
  }

  resetStart = () => this.setState({ isConfirmingReset: true })

  resetStop = () => this.setState({ isConfirmingReset: false })

  resetConfirm = () => {
    this.setState({ isConfirmingReset: false }, () => {
      this.props.onCodeReset()
    })
  }

  render() {
    const { hasCodeChanged, hasError, onCodeFormat } = this.props
    const { githubEditHref, isConfirmingReset, sourceCode } = this.state

    return (
      <Menu size='small' secondary inverted text style={menuStyle}>
        <Menu.Item
          active={hasError}
          color={hasError ? 'red' : undefined}
          content='Prettier'
          icon={(hasError && 'bug') || 'magic'}
          onClick={onCodeFormat}
          style={!hasCodeChanged ? disabledStyle : undefined}
        />
        <Popup
          inverted
          on='click'
          onOpen={this.resetStart}
          open={isConfirmingReset}
          offset={5}
          position='top center'
          trigger={
            <Menu.Item
              style={!hasCodeChanged ? disabledStyle : undefined}
              icon='refresh'
              content='Reset'
            />
          }
          size='small'
          wide
        >
          <Button inverted compact color='red' content='Lose Changes' onClick={this.resetConfirm} />
          <Button inverted compact content='Nevermind' onClick={this.resetStop} />
        </Popup>

        <CopyToClipboard timeout={1000} value={sourceCode}>
          {(active, onClick) => (
            <Menu.Item
              icon={active ? { color: 'green', name: 'check' } : 'copy'}
              content='Copy'
              onClick={onClick}
            />
          )}
        </CopyToClipboard>

        <Menu.Item icon='github' content='Edit' href={githubEditHref} target='_blank' />
      </Menu>
    )
  }
}

ExampleEditorMenu.propTypes = {
  examplePath: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  hasCodeChanged: PropTypes.bool.isRequired,
  onCodeFormat: PropTypes.func.isRequired,
  onCodeReset: PropTypes.func.isRequired,
  sourceCode: PropTypes.string.isRequired,
}

export default ExampleEditorMenu
