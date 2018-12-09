import copyToClipboard from 'copy-to-clipboard'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { withRouteData, withRouter } from 'react-static'
import { Grid, Visibility } from 'semantic-ui-react'

import { examplePathToHash, getFormattedHash, repoURL, scrollToAnchor } from 'docs/src/utils'
import CarbonAdNative from 'docs/src/components/CarbonAd/CarbonAdNative'

import ComponentControls from '../ComponentControls'
import ComponentExampleRenderEditor from './ComponentExampleRenderEditor'
import ComponentExampleRenderHtml from './ComponentExampleRenderHtml'
import ComponentExampleRenderSource from './ComponentExampleRenderSource'
import ComponentExampleTitle from './ComponentExampleTitle'

const childrenStyle = {
  paddingBottom: 0,
  paddingTop: 0,
  maxWidth: '50rem',
}

const renderedExampleStyle = {
  padding: '2rem',
}

const editorStyle = {
  padding: 0,
}

const componentControlsStyle = {
  flex: '0 0 auto',
  width: 'auto',
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
    displayName: PropTypes.string.isRequired,
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
    const { examplePath, exampleSources, location } = nextProps
    const nextSourceCode = exampleSources[examplePath]

    // deactivate examples when switching from one to the next
    if (this.isActiveHash() && this.isActiveState() && this.props.location.hash !== location.hash) {
      this.clearActiveState()
    }

    // for local environment
    if (process.env.NODE_ENV !== 'production' && this.getOriginalSourceCode() !== nextSourceCode) {
      this.setState({ sourceCode: nextSourceCode })
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
    if (!this.kebabExamplePath) {
      this.kebabExamplePath = _.kebabCase(this.props.examplePath)
    }

    return this.kebabExamplePath
  }

  getOriginalSourceCode = () => {
    const { examplePath, exampleSources } = this.props
    return exampleSources[examplePath]
  }

  handleChangeCode = _.debounce((sourceCode) => {
    this.setState({ sourceCode })
  }, 30)

  handleRenderError = error => this.setState({ error: error.toString() })

  handleRenderSuccess = (error, { markup }) => this.setState({ error, htmlMarkup: markup })

  render() {
    const { children, description, displayName, examplePath, suiVersion, title } = this.props
    const {
      error,
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
                  anchorName={this.anchorName}
                  examplePath={examplePath}
                  onCopyLink={this.handleDirectLinkClick}
                  onShowCode={this.handleShowCodeClick}
                  onShowHTML={this.handleShowHTMLClick}
                  showCode={showCode}
                  showHTML={showHTML}
                />
              </Grid.Column>
            </Grid.Row>

            {children && (
              <Grid.Row columns={1} style={childrenStyle}>
                <Grid.Column>{children}</Grid.Column>
              </Grid.Row>
            )}

            <Grid.Column
              width={16}
              className={`rendered-example ${this.getKebabExamplePath()}`}
              style={renderedExampleStyle}
            >
              <ComponentExampleRenderSource
                displayName={displayName}
                onError={this.handleRenderError}
                onSuccess={this.handleRenderSuccess}
                sourceCode={sourceCode}
              />
            </Grid.Column>
            {(showCode || showHTML) && (
              <Grid.Column width={16} style={editorStyle}>
                {showCode && (
                  <ComponentExampleRenderEditor
                    githubEditHref={this.getGithubEditHref()}
                    originalValue={this.getOriginalSourceCode()}
                    value={sourceCode}
                    error={error}
                    onChange={this.handleChangeCode}
                  />
                )}
                {showHTML && <ComponentExampleRenderHtml value={htmlMarkup} />}
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
