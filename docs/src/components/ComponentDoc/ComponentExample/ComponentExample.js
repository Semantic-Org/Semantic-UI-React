import cx from 'clsx'
import copyToClipboard from 'copy-to-clipboard'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { InView } from 'react-intersection-observer'
import { Grid } from 'semantic-ui-react'

import { examplePathToHash, scrollToAnchor } from 'docs/src/utils'
import CarbonAdNative from 'docs/src/components/CarbonAd/CarbonAdNative'
import formatCode from 'docs/src/utils/formatCode'
import ComponentControls from '../ComponentControls'
import ExampleEditor from '../ExampleEditor'
import ComponentDocContext from '../ComponentDocContext'
import ComponentExampleTitle from './ComponentExampleTitle'

const childrenStyle = {
  paddingBottom: 0,
  paddingTop: 0,
  maxWidth: '50rem',
}
const componentControlsStyle = {
  flex: '0 0 auto',
  width: 'auto',
}

/**
 * Renders a `component` and the raw `code` that produced it.
 * Allows toggling the raw `code` code block.
 */
class ComponentExample extends Component {
  constructor(props) {
    super(props)

    const anchorName = examplePathToHash(props.examplePath)
    const hashName = `#${anchorName}`

    this.state = {
      anchorName,
      hashName,
      originalSourceCode: props.sourceCode,
      showCode: hashName === props.location.hash,
      sourceCode: props.sourceCode,
    }
  }

  static getDerivedStateFromProps(props, state) {
    const willBeActiveHash = state.hashName === props.location.hash
    const derivedState = { isActiveHash: willBeActiveHash }

    // deactivate examples when switching from one to the next
    if (state.isActiveHash && !willBeActiveHash) {
      derivedState.showCode = false
      derivedState.showHTML = false
    }

    if (process.env.NODE_ENV !== 'production') {
      const wasCodeChanged = state.originalSourceCode !== state.sourceCode
      const wasCodeUpdated = props.sourceCode !== state.originalSourceCode

      if (wasCodeUpdated) {
        if (wasCodeChanged) {
          /* eslint-disable-next-line no-console */
          console.warn(
            `[HMR] the code of example (${props.examplePath}) was not reload because it was modified, please reset your changes.`,
          )
        } else {
          derivedState.originalSourceCode = props.sourceCode
          derivedState.sourceCode = props.sourceCode
        }
      }
    }

    return derivedState
  }

  setHashAndScroll = () => {
    const { history, location } = this.props
    const { anchorName } = this.state

    history.replace(`${location.pathname}#${anchorName}`)
    scrollToAnchor()
  }

  handleCodeChange = (sourceCode) => this.setState({ sourceCode })

  handleCodeFormat = () =>
    this.setState((prevState) => ({ sourceCode: formatCode(prevState.sourceCode) }))

  handleCodeReset = () =>
    this.setState((prevState) => ({ sourceCode: prevState.originalSourceCode }))

  handleDirectLinkClick = () => {
    this.setHashAndScroll()
    copyToClipboard(window && window.location.href)
  }

  handleShowCodeClick = (e) => {
    const { showCode } = this.state

    e.preventDefault()
    const nextShowCode = !showCode

    if (nextShowCode) this.setHashAndScroll()
    this.setState({ showCode: nextShowCode })
  }

  handleVisibility = (willVisible) => {
    const { examplePath, onVisibilityChange, title } = this.props
    const { wasEverVisible } = this.state

    if (willVisible && !wasEverVisible) {
      this.setState({ wasEverVisible: true })
    }
    if (title) onVisibilityChange(examplePath, willVisible)
  }

  render() {
    const { children, description, examplePath, renderHtml, suiVersion, title } = this.props
    const {
      anchorName,
      isActiveHash,
      showCode,
      originalSourceCode,
      sourceCode,
      wasEverVisible,
    } = this.state

    return (
      <InView onChange={this.handleVisibility}>
        <div id={anchorName} style={{ marginTop: '1rem' }}>
          <Grid className={cx('docs-example', showCode && 'active')} padded='vertically'>
            <Grid.Row columns='equal'>
              <Grid.Column>
                <ComponentExampleTitle
                  description={description}
                  title={title}
                  suiVersion={suiVersion}
                />
              </Grid.Column>
              <Grid.Column textAlign='right' style={componentControlsStyle}>
                <ComponentControls
                  anchorName={anchorName}
                  disableHtml={!renderHtml}
                  exampleCode={sourceCode}
                  examplePath={examplePath}
                  onCopyLink={this.handleDirectLinkClick}
                  onShowCode={this.handleShowCodeClick}
                  showCode={showCode}
                  visible={wasEverVisible}
                />
              </Grid.Column>
            </Grid.Row>

            {children && (
              <Grid.Row columns={1} style={childrenStyle}>
                <Grid.Column>{children}</Grid.Column>
              </Grid.Row>
            )}

            <Grid.Row style={{ paddingBottom: wasEverVisible && 0 }}>
              <ExampleEditor
                examplePath={examplePath}
                hasCodeChanged={originalSourceCode !== sourceCode}
                onCodeChange={this.handleCodeChange}
                onCodeFormat={this.handleCodeFormat}
                onCodeReset={this.handleCodeReset}
                renderHtml={renderHtml}
                showCode={showCode}
                sourceCode={sourceCode}
                title={title}
                visible={wasEverVisible}
              />
            </Grid.Row>

            {isActiveHash && <CarbonAdNative inverted={showCode} />}
          </Grid>
        </div>
      </InView>
    )
  }
}

ComponentExample.propTypes = {
  children: PropTypes.node,
  description: PropTypes.node,
  examplePath: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  onVisibilityChange: PropTypes.func.isRequired,
  renderHtml: PropTypes.bool,
  sourceCode: PropTypes.string.isRequired,
  suiVersion: PropTypes.string,
  title: PropTypes.node,
}

ComponentExample.defaultProps = {
  renderHtml: true,
}

/* TODO: Replace this temporary component with hooks */
const Wrapper = (props) => {
  const { exampleSources, ...rest } = React.useContext(ComponentDocContext)
  /* eslint-disable-next-line react/prop-types */
  const sourceCode = exampleSources[props.examplePath]

  return (
    <ComponentExample
      {...props}
      {...rest}
      /* eslint-disable-next-line react/prop-types */
      sourceCode={sourceCode}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </ComponentExample>
  )
}

export default Wrapper
