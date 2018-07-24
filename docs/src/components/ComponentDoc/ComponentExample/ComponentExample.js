import copyToClipboard from 'copy-to-clipboard'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { withRouteData, withRouter } from 'react-static'
import { Divider, Grid, Menu, Segment, Visibility } from 'semantic-ui-react'

import { examplePathToHash, getFormattedHash, repoURL, scrollToAnchor } from 'docs/src/utils'
import Editor, { EDITOR_BACKGROUND_COLOR } from 'docs/src/components/Editor/Editor'
import ComponentControls from '../ComponentControls'
import ComponentExampleRenderExample from './ComponentExampleRenderExample'
import ComponentExampleRenderHtml from './ComponentExampleRenderHtml'
import ComponentExampleTitle from './ComponentExampleTitle'
import CarbonAdNative from '../../CarbonAd/CarbonAdNative'

const childrenStyle = {
  paddingTop: 0,
  maxWidth: '50rem',
}

const errorStyle = {
  fontSize: '0.9rem',
  fontFamily: 'monospace',
  whiteSpace: 'pre',
}

const htmlAreaStyle = {
  padding: '1rem',
  filter: 'grayscale()',
}
const htmlDividerStyle = {
  opacity: 0.5,
}

const renderedExampleStyle = {
  padding: '2rem',
}

/**
 * Renders a `component` and the raw `code` that produced it.
 * Allows toggling the the raw `code` code block.
 */
class ComponentExample extends PureComponent {
  state = {}

  static contextTypes = {
    onPassed: PropTypes.func,
  }

  static propTypes = {
    children: PropTypes.node,
    description: PropTypes.node,
    exampleKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
    exampleSources: PropTypes.objectOf(PropTypes.string).isRequired,
    examplePath: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    suiVersion: PropTypes.string,
    title: PropTypes.node,
  }

  componentWillMount() {
    const { examplePath } = this.props
    this.anchorName = examplePathToHash(examplePath)

    this.setState({
      handleMouseLeave: this.handleMouseLeave,
      handleMouseMove: this.handleMouseMove,
      showCode: this.isActiveHash(),
      sourceCode: this.getOriginalSourceCode(),
    })
  }

  componentWillReceiveProps(nextProps) {
    // deactivate examples when switching from one to the next
    if (
      this.isActiveHash() &&
      this.isActiveState() &&
      this.props.location.hash !== nextProps.location.hash
    ) {
      this.clearActiveState()
    }
  }

  clearActiveState = () => {
    this.setState({
      showCode: false,
      showHTML: false,
    })
  }

  isActiveState = () => {
    const { showCode, showHTML } = this.state

    return showCode || showHTML
  }

  isActiveHash = () => this.anchorName === getFormattedHash(this.props.location.hash)

  updateHash = () => {
    if (this.isActiveState()) this.setHashAndScroll()
  }

  setHashAndScroll = () => {
    const { history, location } = this.props

    history.replace(`${location.pathname}#${this.anchorName}`)
    scrollToAnchor()
  }

  removeHash = () => {
    const { history, location } = this.props

    history.replace(location.pathname)

    this.clearActiveState()
  }

  handleDirectLinkClick = () => {
    this.setHashAndScroll()
    copyToClipboard(window && window.location.href)
  }

  handleMouseLeave = () => {
    this.setState({
      isHovering: false,
      handleMouseLeave: null,
      handleMouseMove: this.handleMouseMove,
    })
  }

  handleMouseMove = () => {
    this.setState({
      isHovering: true,
      handleMouseLeave: this.handleMouseLeave,
      handleMouseMove: null,
    })
  }

  handleShowCodeClick = (e) => {
    e.preventDefault()

    const { showCode } = this.state

    this.setState({ showCode: !showCode }, this.updateHash)
  }

  handleShowHTMLClick = (e) => {
    e.preventDefault()

    const { showHTML } = this.state

    this.setState({ showHTML: !showHTML }, this.updateHash)
  }

  handlePass = () => {
    const { title } = this.props

    if (title) _.invoke(this.context, 'onPassed', null, this.props)
  }

  copyJSX = () => {
    copyToClipboard(this.state.sourceCode)
    this.setState({ copiedCode: true })
    setTimeout(() => this.setState({ copiedCode: false }), 1000)
  }

  resetJSX = () => {
    const { examplePath, exampleSources } = this.state
    const original = exampleSources[examplePath]

    // eslint-disable-next-line no-alert
    if (this.hasOriginalCodeChanged() && confirm('Lose your changes?')) {
      this.setState({ sourceCode: original })
    }
  }

  hasOriginalCodeChanged = () => {
    const { sourceCode } = this.state
    const original = this.getOriginalSourceCode()

    return sourceCode !== original
  }

  getOriginalSourceCode = () => {
    const { examplePath, exampleSources } = this.state
    return exampleSources[examplePath]
  }

  getKebabExamplePath = () => {
    if (!this.kebabExamplePath) this.kebabExamplePath = _.kebabCase(this.props.examplePath)

    return this.kebabExamplePath
  }

  handleChangeCode = (sourceCode) => {
    this.setState({ sourceCode })
  }

  renderJSXControls = () => {
    const { examplePath } = this.props
    const { copiedCode } = this.state

    // get component name from file path:
    // elements/Button/Types/ButtonButtonExample
    const pathParts = examplePath.split(__PATH_SEP__)
    const filename = pathParts[pathParts.length - 1]

    const ghEditHref = [
      `${repoURL}/edit/master/docs/src/examples/${examplePath}.js`,
      `?message=docs(${filename}): your description`,
    ].join('')

    const codeEditorStyle = {
      position: 'absolute',
      margin: 0,
      top: '2px',
      right: '0.5rem',
      zIndex: 1,
    }

    return (
      <Menu size='small' secondary inverted text style={codeEditorStyle}>
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
        <Menu.Item
          style={{ border: 'none' }}
          icon='github'
          content='Edit'
          href={ghEditHref}
          target='_blank'
        />
      </Menu>
    )
  }

  renderJSX = () => {
    const { error, showCode, sourceCode } = this.state
    if (!showCode) return

    const style = {
      position: 'relative',
    }

    return (
      <div style={style}>
        {this.renderJSXControls()}
        <Editor
          id={`${this.getKebabExamplePath()}-jsx`}
          value={sourceCode}
          onChange={this.handleChangeCode}
        />
        {error && (
          <Segment color='red' basic secondary inverted style={errorStyle}>
            {error}
          </Segment>
        )}
      </div>
    )
  }

  render() {
    const { children, description, examplePath, suiVersion, title } = this.props
    const {
      handleMouseLeave,
      handleMouseMove,
      isHovering,
      markup,
      showCode,
      showHTML,
      sourceCode,
    } = this.state

    const isActive = this.isActiveHash() || this.isActiveState()

    const exampleStyle = {
      position: 'relative',
      background: '#fff',
      boxShadow: '0 1px 2px #ccc',
      ...(isActive
        ? {
          boxShadow: '0 8px 32px #aaa',
        }
        : isHovering && {
          boxShadow: '0 2px 8px #bbb',
        }),
    }

    return (
      <Visibility
        once={false}
        onTopPassed={this.handlePass}
        onTopPassedReverse={this.handlePass}
        style={{ margin: '2rem 0' }}
      >
        {/* Ensure anchor links don't occlude card shadow effect */}
        <div id={this.anchorName} style={{ position: 'relative', bottom: '1rem' }} />
        <Grid
          className='docs-example'
          padded='vertically'
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          style={exampleStyle}
        >
          <Grid.Column width={12}>
            <ComponentExampleTitle
              description={description}
              title={title}
              suiVersion={suiVersion}
            />
          </Grid.Column>
          <Grid.Column textAlign='right' width={4}>
            <ComponentControls
              anchorName={this.anchorName}
              examplePath={examplePath}
              onCopyLink={this.handleDirectLinkClick}
              onShowCode={this.handleShowCodeClick}
              onShowHTML={this.handleShowHTMLClick}
              showCode={showCode}
              showHTML={showHTML}
            />
          </Grid.Column>

          {children && (
            <Grid.Column width={16} style={childrenStyle}>
              {children}
            </Grid.Column>
          )}

          <Grid.Column
            width={16}
            className={`rendered-example ${this.getKebabExamplePath()}`}
            style={renderedExampleStyle}
          >
            <ComponentExampleRenderExample
              exampleHash={`rendered-example ${this.getKebabExamplePath()}`}
              examplePath={examplePath}
              sourceCode={sourceCode}
            />
          </Grid.Column>
          {(showCode || showHTML) && (
            <Grid.Column
              width={16}
              style={{ padding: '1rem 0 0', background: EDITOR_BACKGROUND_COLOR }}
            >
              {this.renderJSX()}
              <ComponentExampleRenderHtml markup={markup} />
            </Grid.Column>
          )}
          {isActive && <CarbonAdNative inverted={this.isActiveState()} />}
        </Grid>
      </Visibility>
    )
  }
}

export default withRouteData(withRouter(ComponentExample))
