import copyToClipboard from 'copy-to-clipboard'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { withRouteData, withRouter } from 'react-static'
import { Divider, Grid, Menu, Visibility } from 'semantic-ui-react'

import { examplePathToHash, getFormattedHash, repoURL, scrollToAnchor } from 'docs/src/utils'
import Editor from 'docs/src/components/Editor/Editor'
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
  padding: '1em',
  fontSize: '0.9rem',
  color: '#a33',
  background: '#fff2f2',
}

const controlsWrapperStyle = {
  minHeight: '3rem',
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
    const { exampleSources, examplePath } = this.props
    this.anchorName = examplePathToHash(examplePath)

    this.setState({
      handleMouseLeave: this.handleMouseLeave,
      handleMouseMove: this.handleMouseMove,
      showCode: this.isActiveHash(),
      sourceCode: exampleSources[examplePath],
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
    else if (this.isActiveHash()) this.removeHash()
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
    const { examplePath, exampleSources, sourceCode } = this.state
    const original = exampleSources[examplePath]

    // eslint-disable-next-line no-alert
    if (sourceCode !== original && confirm('Lose your changes?')) {
      this.setState({ sourceCode: original })
    }
  }

  getKebabExamplePath = () => {
    if (!this.kebabExamplePath) this.kebabExamplePath = _.kebabCase(this.props.examplePath)

    return this.kebabExamplePath
  }

  handleChangeCode = (sourceCode) => {
    this.setState({ sourceCode })
  }

  setGitHubHrefs = () => {
    const { examplePath } = this.props

    if (this.ghEditHref && this.ghBugHref) return

    // get component name from file path:
    // elements/Button/Types/ButtonButtonExample
    const pathParts = examplePath.split(__PATH_SEP__)
    const filename = pathParts[pathParts.length - 1]

    this.ghEditHref = [
      `${repoURL}/edit/master/docs/src/examples/${examplePath}.js`,
      `?message=docs(${filename}): your description`,
    ].join('')
  }

  renderJSXControls = () => {
    const { copiedCode, error } = this.state

    this.setGitHubHrefs()

    const color = error ? 'red' : 'black'
    return (
      <Divider horizontal fitted>
        <Menu text>
          <Menu.Item
            active={copiedCode || !!error} // to show the color
            color={copiedCode ? 'green' : color}
            onClick={this.copyJSX}
            icon={!copiedCode && 'copy'}
            content={copiedCode ? 'Copied!' : 'Copy'}
          />
          <Menu.Item
            active={!!error} // to show the color
            color={color}
            icon='refresh'
            content='Reset'
            onClick={this.resetJSX}
          />
          <Menu.Item
            active={!!error} // to show the color
            color={color}
            icon='github'
            content='Edit'
            href={this.ghEditHref}
            target='_blank'
          />
        </Menu>
      </Divider>
    )
  }

  renderJSX = () => {
    const { error, showCode, sourceCode } = this.state
    if (!showCode) return

    const style = { width: '100%' }
    if (error) {
      style.boxShadow = `inset 0 0 0 1em ${errorStyle.background}`
    }

    return (
      <div style={style}>
        {this.renderJSXControls()}
        <Editor
          id={`${this.getKebabExamplePath()}-jsx`}
          value={sourceCode}
          onChange={this.handleChangeCode}
        />
        {error && <pre style={errorStyle}>{error}</pre>}
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
          <Grid.Row>
            <Grid.Column width={12}>
              <ComponentExampleTitle
                description={description}
                title={title}
                suiVersion={suiVersion}
              />
            </Grid.Column>
            <Grid.Column textAlign='right' width={4} style={controlsWrapperStyle}>
              <ComponentControls
                anchorName={this.anchorName}
                examplePath={examplePath}
                onCopyLink={this.handleDirectLinkClick}
                onShowCode={this.handleShowCodeClick}
                onShowHTML={this.handleShowHTMLClick}
                showCode={showCode}
                showHTML={showHTML}
                visible={isActive || isHovering}
              />
            </Grid.Column>
          </Grid.Row>

          {children && (
            <Grid.Row columns={1}>
              <Grid.Column style={childrenStyle}>{children}</Grid.Column>
            </Grid.Row>
          )}

          <Grid.Row columns={1}>
            <Grid.Column className={`rendered-example ${this.getKebabExamplePath()}`}>
              <ComponentExampleRenderExample
                exampleHash={`rendered-example ${this.getKebabExamplePath()}`}
                examplePath={examplePath}
                sourceCode={sourceCode}
              />
            </Grid.Column>
            <Grid.Column>
              {this.renderJSX()}
              {showHTML ? <ComponentExampleRenderHtml markup={markup} /> : null}
            </Grid.Column>
          </Grid.Row>
          {isActive && <CarbonAdNative />}
        </Grid>
      </Visibility>
    )
  }
}

export default withRouteData(withRouter(ComponentExample))
