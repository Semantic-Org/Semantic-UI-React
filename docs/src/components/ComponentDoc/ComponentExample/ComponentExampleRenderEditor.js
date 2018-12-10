import copyToClipboard from 'copy-to-clipboard'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Button, Popup, Segment, Menu } from 'semantic-ui-react'

import Editor, { EDITOR_BACKGROUND_COLOR } from 'docs/src/components/CodeEditor'
import { updateForKeys } from 'docs/src/hoc'
import formatCode from 'docs/src/utils/formatCode'

const rootStyle = {
  position: 'relative',
  paddingTop: '1rem',
  background: EDITOR_BACKGROUND_COLOR,
}

const errorStyle = {
  fontSize: '0.9rem',
  fontFamily: 'monospace',
  whiteSpace: 'pre-wrap',
}

const menuStyle = {
  position: 'absolute',
  margin: 0,
  top: 0,
  right: '1rem',
  zIndex: 100,
}

const disabledStyle = { opacity: 0.5, pointerEvents: 'none' }

class ComponentExampleRenderEditor extends PureComponent {
  state = {}

  static propTypes = {
    examplePath: PropTypes.string.isRequired,
    githubEditHref: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    originalValue: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value && this.state.isConfirmingReset) {
      this.resetStop()
    }
  }

  canBePrettified = () => {
    const { error, value } = this.props

    try {
      return !error && value !== formatCode(value)
    } catch (err) {
      return false
    }
  }

  handleCopy = () => {
    copyToClipboard(this.props.value)
    this.setState({ copiedCode: true })
    setTimeout(() => this.setState({ copiedCode: false }), 1000)
  }

  handleFormat = () => {
    const { onChange, value } = this.props

    onChange(formatCode(value))
  }

  hasOriginalCodeChanged = () => this.props.value !== this.props.originalValue

  resetStart = () => this.setState({ isConfirmingReset: true })

  resetStop = () => this.setState({ isConfirmingReset: false })

  resetConfirm = () => {
    const { onChange, originalValue } = this.props

    this.setState({ isConfirmingReset: false }, () => {
      onChange(originalValue)
    })
  }

  renderEditorMenu = () => {
    const { error, githubEditHref } = this.props
    const { copiedCode, isConfirmingReset } = this.state

    return (
      <Menu size='small' secondary inverted text style={menuStyle}>
        <Menu.Item
          icon={(error && 'bug') || (this.canBePrettified() ? 'magic' : 'check')}
          color={error ? 'red' : undefined}
          active={error}
          content='Prettier'
          onClick={this.handleFormat}
          style={!this.canBePrettified() ? disabledStyle : undefined}
        />
        <Popup
          inverted
          wide
          verticalOffset={5}
          on='click'
          position='top center'
          size='small'
          open={isConfirmingReset}
          onOpen={this.resetStart}
          trigger={
            <Menu.Item
              style={!this.hasOriginalCodeChanged() ? disabledStyle : undefined}
              icon={this.hasOriginalCodeChanged() ? 'refresh' : 'check'}
              content='Reset'
            />
          }
        >
          <Button inverted compact color='red' content='Lose Changes' onClick={this.resetConfirm} />
          <Button inverted compact content='Nevermind' onClick={this.resetStop} />
        </Popup>
        <Menu.Item
          icon={copiedCode ? { color: 'green', name: 'check' } : 'copy'}
          content='Copy'
          onClick={this.handleCopy}
        />
        <Menu.Item icon='github' content='Edit' href={githubEditHref} target='_blank' />
      </Menu>
    )
  }

  render() {
    const { error, onChange, value } = this.props

    return (
      <div style={rootStyle}>
        {this.renderEditorMenu()}
        <Editor value={value} onChange={onChange} />
        {error && (
          <Segment color='red' basic secondary inverted style={errorStyle}>
            {error}
          </Segment>
        )}
      </div>
    )
  }
}

export default updateForKeys(['error', 'value'])(ComponentExampleRenderEditor)
