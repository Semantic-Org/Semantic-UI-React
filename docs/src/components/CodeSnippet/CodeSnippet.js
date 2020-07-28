import _ from 'lodash'
import * as Prism from 'prismjs/components/prism-core'
import prettier from 'prettier/standalone'
import babel from 'prettier/parser-babel'
import html from 'prettier/parser-html'
import PropTypes from 'prop-types'
import React from 'react'

// Order of PrismJS imports there is sensitive
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'

import CodeSnippetLabel from './CodeSnippetLabel'

const prettierConfig = {
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: {
    babel,
    html,
  },
}

const normalizeToString = (value) => {
  if (Array.isArray(value)) {
    return value.join('\n')
  }

  return _.isObject(value) ? JSON.stringify(value, null, 2) : value
}

export const prettifyCode = (code, parser) => {
  const formatted = prettier.format(code, {
    ...prettierConfig,
    // a narrower print width is more friendly to doc examples
    parser,
  })

  return formatted.replace(/^;</m, '<') // remove beginning semi in JSX/HTML
}

const formatters = {
  bash: (val = '') => val.replace(/^/g, '$  '),
  json: (val) => prettifyCode(val, 'json'),
  js: (val = '') => prettifyCode(val, 'babel'),
  jsx: (val = '') => prettifyCode(val, 'babel'),
  html: (val = '') => prettifyCode(val, 'html'),
}

export const formatCode = (code, mode) => {
  if (!code) return ''
  const formatter = formatters[mode]

  return (
    formatter(normalizeToString(code))
      // remove eof line break, they are not helpful for snippets
      .replace(/\n$/, '')
  )
}

const CodeSnippet = React.memo((props) => {
  const {
    className,
    copyable = true,
    fitted,
    formattable = true,
    label,
    mode = 'jsx',
    value,
  } = props

  const codeClassName = `language-${mode}`
  const code = formattable ? formatCode(value, mode) : value
  const codeRef = React.useRef(null)

  React.useLayoutEffect(() => {
    Prism.highlightElement(codeRef.current)
  })

  return (
    <div
      className={className}
      style={{
        fontSize: '12px',
        position: 'relative',
        ...props.style,
      }}
    >
      <CodeSnippetLabel copyable={copyable} label={label} mode={mode} value={code} />

      <pre style={{ margin: fitted ? '0' : undefined }}>
        <code className={codeClassName} ref={codeRef}>
          {code}
        </code>
      </pre>
    </div>
  )
})

CodeSnippet.propTypes = {
  className: PropTypes.string,
  copyable: PropTypes.bool,
  fitted: PropTypes.bool,
  formattable: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
  mode: PropTypes.oneOf(['bash', 'json', 'js', 'jsx', 'html']),
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default CodeSnippet
