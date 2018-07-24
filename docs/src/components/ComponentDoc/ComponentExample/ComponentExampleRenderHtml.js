import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Divider } from 'semantic-ui-react'

import Editor from 'docs/src/components/Editor/Editor'
import formatCode from './formatCode'

const rootStyle = {
  padding: '1rem',
  filter: 'grayscale()',
}
const dividerStyle = {
  opacity: 0.5,
}

export default class ComponentExampleRenderHtml extends PureComponent {
  static propTypes = {
    editorId: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }

  render() {
    const { editorId, value } = this.props

    return (
      <div style={rootStyle}>
        <Divider fitted inverted horizontal style={dividerStyle}>
          HTML
        </Divider>
        <Editor id={editorId} mode='html' value={formatCode(value)} readOnly />
      </div>
    )
  }
}
