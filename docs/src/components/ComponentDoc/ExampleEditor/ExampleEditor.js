import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import SourceRender from 'react-source-render'
import { Grid, Segment } from 'semantic-ui-react'

import CodeEditor from 'docs/src/components/CodeEditor'
import CodeSnippet from 'docs/src/components/CodeSnippet'
import ExampleEditorMenu from './ExampleEditorMenu'
import ExampleEditorPlaceholder from './ExampleEditorPlaceholder'
import { babelConfig, resolver } from './renderConfig'

const renderedExampleStyle = {
  padding: '2rem',
}

const editorStyle = {
  padding: 0,
}

const errorStyle = {
  fontSize: '0.9rem',
  fontFamily: 'monospace',
  margin: 0,
  whiteSpace: 'pre-wrap',
}

const getKebabExamplePath = _.memoize((examplePath) => _.kebabCase(examplePath))

const ExampleEditor = (props) => {
  const {
    examplePath,
    hasCodeChanged,
    onCodeChange,
    onCodeFormat,
    onCodeReset,
    renderHtml,
    showCode,
    sourceCode,
    visible,
  } = props

  if (visible) {
    return (
      <SourceRender
        babelConfig={babelConfig}
        renderHtml={showCode && renderHtml}
        resolver={resolver}
        source={sourceCode}
        unstable_hot
      >
        {({ element, error, markup }) => (
          <>
            <Grid.Column
              className={`rendered-example ${getKebabExamplePath(examplePath)}`}
              style={renderedExampleStyle}
              width={16}
            >
              {element}
            </Grid.Column>

            {showCode && (
              <Grid.Column width={16} style={editorStyle}>
                <ExampleEditorMenu
                  examplePath={examplePath}
                  hasError={!!error}
                  hasCodeChanged={hasCodeChanged}
                  onCodeFormat={onCodeFormat}
                  onCodeReset={onCodeReset}
                  sourceCode={sourceCode}
                />
                <CodeEditor onChange={onCodeChange} value={sourceCode} />

                {error && (
                  <Segment color='red' basic secondary inverted style={errorStyle}>
                    {error.toString()}
                  </Segment>
                )}
                <CodeSnippet fitted mode='html' value={markup} />
              </Grid.Column>
            )}
          </>
        )}
      </SourceRender>
    )
  }

  return (
    <Grid.Column width={16}>
      <ExampleEditorPlaceholder />
    </Grid.Column>
  )
}

ExampleEditor.propTypes = {
  examplePath: PropTypes.string.isRequired,
  hasCodeChanged: PropTypes.bool.isRequired,
  onCodeChange: PropTypes.func.isRequired,
  onCodeFormat: PropTypes.func.isRequired,
  onCodeReset: PropTypes.func.isRequired,
  sourceCode: PropTypes.string.isRequired,
  renderHtml: PropTypes.bool.isRequired,
  showCode: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
}

export default React.memo(ExampleEditor)
