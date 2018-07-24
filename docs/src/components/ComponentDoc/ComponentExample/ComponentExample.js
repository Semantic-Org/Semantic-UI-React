import copyToClipboard from 'copy-to-clipboard'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { withRouteData, withRouter } from 'react-static'
import { Grid, Visibility } from 'semantic-ui-react'

import { examplePathToHash, getFormattedHash, repoURL, scrollToAnchor } from 'docs/src/utils'
import CarbonAdNative from 'docs/src/components/CarbonAd/CarbonAdNative'

import ComponentControls from '../ComponentControls'
import ComponentExampleRenderExample from './ComponentExampleRenderExample'
import ComponentExampleRenderHtml from './ComponentExampleRenderHtml'
import ComponentExampleTitle from './ComponentExampleTitle'
import renderExampleSourceCode from './renderExampleSourceCode'

const childrenStyle = {
  paddingTop: 0,
  maxWidth: '50rem',
}

const renderedExampleStyle = {
  padding: '2rem',
}

const editorStyle = {
  padding: 0,
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

    const sourceCode = this.getOriginalSourceCode()

    const { error, exampleElement, htmlMarkup } = renderExampleSourceCode(examplePath, sourceCode)

    this.setState({
      handleMouseLeave: this.handleMouseLeave,
      handleMouseMove: this.handleMouseMove,
      showCode: this.isActiveHash(),
      error,
      htmlMarkup,
      exampleElement,
      sourceCode,
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

  isActiveHash = () => {
    const { exampleKeys, location } = this.props
    return this.anchorName === getFormattedHash(exampleKeys, location.hash)
  }

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

  getGithubEditHref = () => {
    const { examplePath } = this.props

    // get component name from file path:
    // elements/Button/Types/ButtonButtonExample
    const pathParts = examplePath.split(__PATH_SEP__)
    const filename = pathParts[pathParts.length - 1]

    return [
      `${repoURL}/edit/master/docs/src/examples/${examplePath}.js`,
      `?message=docs(${filename}): your description`,
    ].join('')
  }

  getKebabExamplePath = () => {
    if (!this.kebabExamplePath) this.kebabExamplePath = _.kebabCase(this.props.examplePath)

    return this.kebabExamplePath
  }

  getOriginalSourceCode = () => {
    const { examplePath, exampleSources } = this.props
    return exampleSources[examplePath]
  }

  handleChangeCode = _.debounce((sourceCode) => {
    const { examplePath } = this.props
    const { error, htmlMarkup, exampleElement } = renderExampleSourceCode(examplePath, sourceCode)

    const newState = { error, sourceCode }

    // preserve the last good render if there is an error
    if (!error) {
      newState.htmlMarkup = htmlMarkup
      newState.exampleElement = exampleElement
    }

    this.setState(newState)
  }, 30)

  render() {
    const { children, description, examplePath, suiVersion, title } = this.props
    const {
      error,
      exampleElement,
      handleMouseLeave,
      handleMouseMove,
      htmlMarkup,
      isHovering,
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
        <div id={this.anchorName} style={{ paddingTop: '1rem' }}>
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
              {exampleElement}
            </Grid.Column>
            {(showCode || showHTML) && (
              <Grid.Column width={16} style={editorStyle}>
                {showCode && (
                  <ComponentExampleRenderExample
                    editorId={`${this.getKebabExamplePath()}-jsx`}
                    githubEditHref={this.getGithubEditHref()}
                    originalValue={this.getOriginalSourceCode()}
                    value={sourceCode}
                    error={error}
                    onChange={this.handleChangeCode}
                  />
                )}
                {showHTML && (
                  <ComponentExampleRenderHtml
                    editorId={`${this.getKebabExamplePath()}-html`}
                    value={htmlMarkup}
                  />
                )}
              </Grid.Column>
            )}
            {isActive && !error && <CarbonAdNative inverted={this.isActiveState()} />}
          </Grid>
        </div>
      </Visibility>
    )
  }
}

export default withRouteData(withRouter(ComponentExample))
