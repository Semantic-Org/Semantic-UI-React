import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Divider } from 'semantic-ui-react'

import Editor, { EDITOR_BACKGROUND_COLOR } from 'docs/src/components/CodeEditor'
import formatCode from 'docs/src/utils/formatCode'

const rootStyle = {
  padding: '1rem',
  background: EDITOR_BACKGROUND_COLOR,
}

const dividerStyle = {
  opacity: 0.5,
}

export default class ComponentExampleRenderHtml extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
  }

  render() {
    const { value } = this.props

    // remove new line at eof after formatting for a tighter fit
    const formattedCode = formatCode(value, 'html').replace(/\s+$/, '')

    return (
      <div style={rootStyle}>
        <Divider fitted inverted horizontal style={dividerStyle}>
          HTML
        </Divider>
        <Editor mode='html' value={formattedCode} readOnly />
      </div>
    )
  }
}
