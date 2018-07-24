import copyToClipboard from 'copy-to-clipboard'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Segment, Menu } from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'
import Editor from 'docs/src/components/Editor/Editor'

const rootStyle = {
  position: 'relative',
}

const errorStyle = {
  fontSize: '0.9rem',
  fontFamily: 'monospace',
  whiteSpace: 'pre',
}

const menuStyle = {
  position: 'absolute',
  margin: 0,
  top: '2px',
  right: '0.5rem',
  zIndex: 1,
}

class ComponentExampleRenderExample extends PureComponent {
  state = {}

  static propTypes = {
    editorId: PropTypes.string.isRequired,
    examplePath: PropTypes.string.isRequired,
    githubEditHref: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    originalValue: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
  }

  hasOriginalCodeChanged = () => this.props.value !== this.props.originalValue

  copyJSX = () => {
    copyToClipboard(this.state.value)
    this.setState({ copiedCode: true })
    setTimeout(() => this.setState({ copiedCode: false }), 1000)
  }

  resetJSX = () => {
    // eslint-disable-next-line no-alert
    if (this.hasOriginalCodeChanged() && confirm('Lose your changes?')) {
      this.setState({ value: this.originalValue })
    }
  }

  renderEditorMenu = () => {
    const { githubEditHref } = this.props
    const { copiedCode } = this.state

    return (
      <Menu size='small' secondary inverted text style={menuStyle}>
        <Menu.Item
          style={
            this.hasOriginalCodeChanged() ? undefined : { opacity: 0.5, pointerEvents: 'none' }
          }
          icon='refresh'
          content='Reset'
          onClick={this.resetJSX}
        />
        <Menu.Item
          active={copiedCode} // to show the color
          icon={copiedCode ? { color: 'green', name: 'check' } : 'copy'}
          content='Copy'
          onClick={this.copyJSX}
        />
        <Menu.Item icon='github' content='Edit' href={githubEditHref} target='_blank' />
      </Menu>
    )
  }

  render() {
    const { editorId, error, onChange, value } = this.props

    return (
      <div style={rootStyle}>
        {this.renderEditorMenu()}
        <Editor id={editorId} value={value} onChange={onChange} />
        {error && (
          <Segment color='red' basic secondary inverted style={errorStyle}>
            {error}
          </Segment>
        )}
      </div>
    )
  }
}

export default updateForKeys(['value'])(ComponentExampleRenderExample)
