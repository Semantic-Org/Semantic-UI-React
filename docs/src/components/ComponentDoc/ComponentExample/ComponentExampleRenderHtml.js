import { html } from 'js-beautify'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Divider } from 'semantic-ui-react'

import Editor from 'docs/src/components/Editor/Editor'

export default class ComponentExampleRenderHtml extends PureComponent {
  static propTypes = {
    markup: PropTypes.string.isRequired,
  }

  render() {
    const { markup } = this.state

    // add new lines between almost all adjacent elements
    // moves inline elements to their own line
    const preFormattedHTML = markup.replace(/><(?!\/i|\/label|\/span|option)/g, '>\n<')
    const beautifiedHTML = html(preFormattedHTML, {
      indent_size: 2,
      indent_char: ' ',
      wrap_attributes: 'auto',
      wrap_attributes_indent_size: 2,
      end_with_newline: false,
    })

    return [
      <Divider horizontal key='divider'>
        Rendered HTML
      </Divider>,
      <Editor
        id={`${this.getKebabExamplePath()}-html`}
        key='editor'
        mode='html'
        readOnly
        value={beautifiedHTML}
      />,
    ]
  }
}
