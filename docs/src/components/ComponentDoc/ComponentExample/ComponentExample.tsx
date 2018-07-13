import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { PureComponent, isValidElement, CSSProperties } from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { renderToStaticMarkup } from 'react-dom/server'
import { html } from 'js-beautify'
import copyToClipboard from 'copy-to-clipboard'
import { Divider, Form, Grid, Menu, Segment, Visibility, SemanticCOLORS } from 'semantic-ui-react'
import { pxToRem } from 'src/lib'
import evalTypeScript from 'docs/src/utils/evalTypeScript'
import { Provider } from 'stardust'

import {
  examplePathToHash,
  getFormattedHash,
  knobsContext,
  repoURL,
  scrollToAnchor,
  variablesContext,
  truncateStyle,
} from 'docs/src/utils'
import Editor from 'docs/src/components/Editor/Editor'
import ComponentControls from '../ComponentControls'
import ComponentExampleTitle from './ComponentExampleTitle'
import ContributionPrompt from '../ContributionPrompt'
import getSourceCodeManager, { ISourceCodeManager, SourceCodeType } from './SourceCodeManager'

export interface IComponentExampleProps extends RouteComponentProps<any, any> {
  title: string
  description: string
  examplePath: string
  suiVersion?: string
}

interface IComponentExampleState {
  knobs: Object
  componentVariables: { [key: string]: Object }
  exampleElement: JSX.Element
  handleMouseLeave: () => void
  handleMouseMove: () => void
  sourceCode: string
  markup: string
  error: string
  showCode: boolean
  showHTML: boolean
  showRtl: boolean
  showVariables: boolean
  isHovering: boolean
  copiedCode: boolean
}

const childrenStyle: CSSProperties = {
  paddingTop: 0,
  maxWidth: pxToRem(500),
}

const errorStyle: CSSProperties = {
  padding: '1em',
  fontSize: pxToRem(9),
  color: '#a33',
  background: '#fff2f2',
}

const controlsWrapperStyle: CSSProperties = {
  minHeight: pxToRem(30),
}

const codeTypeApiButtonLabels: { [key in SourceCodeType]: string } = {
  normal: 'Children API',
  shorthand: 'Shorthand API',
}

/**
 * Renders a `component` and the raw `code` that produced it.
 * Allows toggling the the raw `code` code block.
 */
class ComponentExample extends PureComponent<IComponentExampleProps, IComponentExampleState> {
  private sourceCodeMgr: ISourceCodeManager
  private anchorName: string
  private kebabExamplePath: string
  private KnobsComponent: any
  private ghBugHref: string
  private ghEditHref: string

  public state = { knobs: {} } as IComponentExampleState

  public static contextTypes = {
    onPassed: PropTypes.func,
  }

  public static propTypes = {
    children: PropTypes.node,
    description: PropTypes.node,
    examplePath: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    suiVersion: PropTypes.string,
    title: PropTypes.node,
  }

  public componentWillMount() {
    const { examplePath } = this.props
    this.sourceCodeMgr = getSourceCodeManager(examplePath)
    this.anchorName = examplePathToHash(examplePath)
    const exampleElement = this.renderExampleFromCode(this.sourceCodeMgr.currentCode)

    this.setState({
      exampleElement,
      handleMouseLeave: this.handleMouseLeave,
      handleMouseMove: this.handleMouseMove,
      showCode: this.isActiveHash(),
      sourceCode: this.sourceCodeMgr.currentCode,
      markup: renderToStaticMarkup(exampleElement),
    })
  }

  public componentWillReceiveProps(nextProps: IComponentExampleProps) {
    // deactivate examples when switching from one to the next
    if (
      this.isActiveHash() &&
      this.isActiveState() &&
      this.props.location.hash !== nextProps.location.hash
    ) {
      this.clearActiveState()
    }
  }

  private clearActiveState = () => {
    this.setState({
      showCode: false,
      showHTML: false,
      showRtl: false,
      showVariables: false,
    })
  }

  private isActiveState = () => {
    const { showCode, showHTML, showRtl, showVariables } = this.state

    return showCode || showHTML || showRtl || showVariables
  }

  private isActiveHash = () => this.anchorName === getFormattedHash(this.props.location.hash)

  private updateHash = () => {
    if (this.isActiveState()) this.setHashAndScroll()
    else if (this.isActiveHash()) this.removeHash()
  }

  private setHashAndScroll = () => {
    const { history, location } = this.props

    history.replace(`${location.pathname}#${this.anchorName}`)
    scrollToAnchor()
  }

  private removeHash = () => {
    const { history, location } = this.props

    history.replace(location.pathname)

    this.clearActiveState()
  }

  private handleDirectLinkClick = () => {
    this.setHashAndScroll()
    copyToClipboard(window.location.href)
  }

  private handleMouseLeave = () => {
    this.setState({
      isHovering: false,
      handleMouseLeave: null,
      handleMouseMove: this.handleMouseMove,
    })
  }

  private handleMouseMove = () => {
    this.setState({
      isHovering: true,
      handleMouseLeave: this.handleMouseLeave,
      handleMouseMove: null,
    })
  }

  private handleShowCodeClick = e => {
    e.preventDefault()

    const { showCode } = this.state

    this.setState({ showCode: !showCode }, this.updateHash)
  }

  private handleShowHTMLClick = e => {
    e.preventDefault()

    const { showHTML } = this.state

    this.setState({ showHTML: !showHTML }, this.updateHash)
  }

  private handleShowRtlClick = e => {
    e.preventDefault()

    const { showRtl } = this.state

    this.setState({ showRtl: !showRtl }, () => {
      this.renderSourceCode()
    })
  }

  private handleShowVariablesClick = e => {
    e.preventDefault()

    const { showVariables } = this.state

    this.setState({ showVariables: !showVariables }, this.updateHash)
  }

  private handlePass = () => {
    const { title } = this.props

    if (title) _.invoke(this.context, 'onPassed', null, this.props)
  }

  private copyJSX = () => {
    copyToClipboard(this.state.sourceCode)
    this.setState({ copiedCode: true })
    setTimeout(() => this.setState({ copiedCode: false }), 1000)
  }

  private resetJSX = () => {
    if (this.sourceCodeMgr.originalCodeHasChanged && confirm('Lose your changes?')) {
      this.sourceCodeMgr.resetToOriginalCode()
      this.updateAndRenderSourceCode()
    }
  }

  private getKnobsFilename = () => `./${this.props.examplePath}.knobs.tsx`

  private getKebabExamplePath = () => {
    if (!this.kebabExamplePath) this.kebabExamplePath = _.kebabCase(this.props.examplePath)

    return this.kebabExamplePath
  }

  private hasKnobs = () => _.includes(knobsContext.keys(), this.getKnobsFilename())

  private renderError = _.debounce(error => {
    this.setState({ error })
  }, 800)

  private renderExampleFromCode = (code: string): JSX.Element => {
    const Example = code != null ? evalTypeScript(code) : this.renderMissingExample()
    return _.isFunction(Example) ? this.renderWithProvider(Example) : Example
  }

  private renderMissingExample = (): JSX.Element => {
    const missingExamplePath = `./docs/src/examples/${this.sourceCodeMgr.currentPath}.tsx`
    return (
      <ContributionPrompt>
        <div style={truncateStyle}>
          Looks like we're missing <code title={missingExamplePath}>{missingExamplePath}</code>{' '}
          example.
        </div>
      </ContributionPrompt>
    )
  }

  private renderSourceCode = _.debounce(() => {
    try {
      const exampleElement = this.renderExampleFromCode(this.state.sourceCode)

      if (!isValidElement(exampleElement)) {
        this.renderError(
          `Default export is not a valid element. Type:${{}.toString.call(exampleElement)}`,
        )
      } else {
        // immediately render a null error
        // but also ensure the last debounced error call is a null error
        const error = null
        this.renderError(error)
        this.setState({
          error,
          exampleElement,
          markup: renderToStaticMarkup(exampleElement),
        })
      }
    } catch (err) {
      this.renderError(err.message)
    }
  }, 250)

  private handleKnobChange = knobs => {
    this.setState(
      prevState => ({
        knobs: {
          ...prevState.knobs,
          ...knobs,
        },
      }),
      this.renderSourceCode,
    )
  }

  private getKnobsComponent = () => {
    if (typeof this.KnobsComponent !== 'undefined') {
      return this.KnobsComponent
    }

    this.KnobsComponent = this.hasKnobs() ? knobsContext(this.getKnobsFilename()).default : null

    return this.KnobsComponent
  }

  private getKnobsValue = () => {
    const Knobs = this.getKnobsComponent()

    return Knobs ? { ...Knobs.defaultProps, ...this.state.knobs } : null
  }

  private renderKnobs = () => {
    const Knobs = this.getKnobsComponent()

    return Knobs ? <Knobs {...this.getKnobsValue()} onKnobChange={this.handleKnobChange} /> : null
  }

  private getComponentName = () => this.props.examplePath.split('/')[1]

  private renderWithProvider(ExampleComponent) {
    return (
      <Provider componentVariables={this.state.componentVariables} rtl={this.state.showRtl}>
        <ExampleComponent knobs={this.getKnobsValue()} />
      </Provider>
    )
  }

  private handleChangeCode = (sourceCode: string) => {
    this.sourceCodeMgr.currentCode = sourceCode
    this.updateAndRenderSourceCode()
  }

  private updateAndRenderSourceCode = () => {
    this.setState({ sourceCode: this.sourceCodeMgr.currentCode }, this.renderSourceCode)
  }

  private setGitHubHrefs = () => {
    const currentCodePath = this.sourceCodeMgr.currentPath

    if (this.ghEditHref && this.ghBugHref) return

    // get component name from file path:
    // elements/Button/Types/ButtonButtonExample
    const pathParts = currentCodePath.split(__PATH_SEP__)
    const filename = pathParts[pathParts.length - 1]

    this.ghEditHref = [
      `${repoURL}/edit/master/docs/src/examples/${currentCodePath}.tsx`,
      `?message=docs(${filename}): your description`,
    ].join('')
  }

  private setApiCodeType = (codeType: SourceCodeType) => {
    this.sourceCodeMgr.codeType = codeType
    this.updateAndRenderSourceCode()
  }

  private renderApiCodeMenu = (color: SemanticCOLORS): JSX.Element => {
    const menuItems = [SourceCodeType.shorthand, SourceCodeType.normal].map(codeType => {
      const active = !!this.state.error || this.sourceCodeMgr.codeType === codeType
      // we disable the menu button for Children API in case we don't have the example for it
      const disabled =
        codeType === SourceCodeType.normal && !this.sourceCodeMgr.isCodeValidForType(codeType)

      return {
        active,
        disabled,
        key: codeType,
        icon: 'code',
        color: active ? 'green' : color,
        onClick: this.setApiCodeType.bind(this, codeType),
        content: codeTypeApiButtonLabels[codeType],
      }
    })

    return (
      <Divider horizontal style={{ marginBottom: 0 } as CSSProperties}>
        <Menu size="small" items={menuItems} />
      </Divider>
    )
  }

  private renderCodeEditorMenu = (color: SemanticCOLORS): JSX.Element => {
    const { copiedCode, error } = this.state
    const codeHasChanged = this.sourceCodeMgr.originalCodeHasChanged

    return (
      <Menu size="small" text widths="8" style={{ margin: '0' }}>
        <Menu.Item
          active={copiedCode || !!error} // to show the color
          color={copiedCode ? 'green' : color}
          icon={!copiedCode && 'copy'}
          content={copiedCode ? 'Copied!' : 'Copy'}
          onClick={this.copyJSX}
        />
        <Menu.Item
          active={codeHasChanged}
          color={codeHasChanged ? 'red' : color}
          icon="refresh"
          content="Reset"
          onClick={this.resetJSX}
        />
        <Menu.Item
          active={!!error} // to show the color
          color={color}
          icon="github"
          content="Edit"
          href={this.ghEditHref}
          target="_blank"
        />
      </Menu>
    )
  }

  private renderJSX = () => {
    const { error, showCode, sourceCode } = this.state
    if (!showCode) return

    const color = error ? 'red' : 'black'
    const jsxStyle: CSSProperties = {
      width: '100%',
      ...(error && {
        boxShadow: `inset 0 0 0 1em ${errorStyle.background}`,
      }),
    }

    this.setGitHubHrefs()

    return (
      <div style={jsxStyle}>
        {/* Copy|Reset|Edit menu */}
        {this.renderApiCodeMenu(color)}

        {/* Code Editor */}
        {sourceCode != null && (
          <div>
            {this.renderCodeEditorMenu(color)}
            <Editor
              id={`${this.getKebabExamplePath()}-jsx`}
              value={sourceCode}
              onChange={this.handleChangeCode}
            />
          </div>
        )}

        {/* Error */}
        {error && <pre style={errorStyle}>{error}</pre>}
      </div>
    )
  }

  private renderHTML = () => {
    const { showHTML, markup } = this.state
    if (!showHTML) return

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

    return (
      <div>
        <Divider horizontal>Rendered HTML</Divider>
        <Editor
          id={`${this.getKebabExamplePath()}-html`}
          mode="html"
          value={beautifiedHTML}
          readOnly
        />
      </div>
    )
  }

  private renderVariables = () => {
    const { showVariables } = this.state
    if (!showVariables) return

    const name = this.getComponentName()

    return (
      <div>
        <Divider horizontal>{_.startCase(name).replace(/ /g, '')} Variables</Divider>
        <Provider.Consumer
          render={({ siteVariables }) => {
            const variablesFilename = `./${name}/${_.camelCase(name)}Variables.ts`
            const hasVariablesFile = _.includes(variablesContext.keys(), variablesFilename)

            if (!hasVariablesFile) {
              return (
                <Segment size="small" secondary basic>
                  This component has no variables to edit.
                </Segment>
              )
            }

            const variables = variablesContext(variablesFilename).default
            const defaultVariables = variables(siteVariables)

            return (
              <div>
                <Form>
                  <Form.Group inline>
                    {_.map(defaultVariables, (val, key) => (
                      <Form.Input
                        key={key}
                        label={key}
                        defaultValue={val}
                        onChange={this.handleVariableChange(name, key)}
                      />
                    ))}
                  </Form.Group>
                </Form>
              </div>
            )
          }}
        />
      </div>
    )
  }

  private handleVariableChange = (component, variable) => (e, { value }) => {
    this.setState(
      state => ({
        componentVariables: {
          ...state.componentVariables,
          [component]: {
            ...(state.componentVariables && state.componentVariables[component]),
            [variable]: value,
          },
        },
      }),
      this.renderSourceCode,
    )
  }

  public render() {
    const { children, description, examplePath, suiVersion, title } = this.props
    const {
      handleMouseLeave,
      handleMouseMove,
      exampleElement,
      isHovering,
      showCode,
      showHTML,
      showRtl,
      showVariables,
    } = this.state

    const isActive = this.isActiveHash() || this.isActiveState()

    const exampleStyle = {
      position: 'relative',
      transition: 'box-shadow 200ms, background 200ms',
      background: '#fff',
      ...(isActive
        ? {
            boxShadow: '0 0 30px #ccc',
          }
        : isHovering && {
            boxShadow: '0 0 20px #ccc',
            zIndex: 1,
          }),
    }

    const knobs = this.renderKnobs()

    return (
      <Visibility once={false} onTopPassed={this.handlePass} onTopPassedReverse={this.handlePass}>
        <Grid
          className="docs-example"
          padded="vertically"
          id={this.anchorName}
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
            <Grid.Column textAlign="right" width={4} style={controlsWrapperStyle}>
              <ComponentControls
                anchorName={this.anchorName}
                examplePath={examplePath}
                onCopyLink={this.handleDirectLinkClick}
                onShowCode={this.handleShowCodeClick}
                onShowHTML={this.handleShowHTMLClick}
                onShowRtl={this.handleShowRtlClick}
                onShowVariables={this.handleShowVariablesClick}
                showCode={showCode}
                showHTML={showHTML}
                showRtl={showRtl}
                showVariables={showVariables}
                visible={isActive || isHovering}
              />
            </Grid.Column>
          </Grid.Row>

          {children && (
            <Grid.Row columns={1}>
              <Grid.Column style={childrenStyle}>{children}</Grid.Column>
            </Grid.Row>
          )}

          {knobs && (
            <Grid.Row columns={1}>
              <Grid.Column>{knobs}</Grid.Column>
            </Grid.Row>
          )}

          <Grid.Row columns={1}>
            <Grid.Column className={`rendered-example ${this.getKebabExamplePath()}`}>
              <div dir={this.state.showRtl ? 'rtl' : undefined}>{exampleElement}</div>
            </Grid.Column>
            <Grid.Column>
              {this.renderJSX()}
              {this.renderHTML()}
              {this.renderVariables()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider section horizontal />
      </Visibility>
    )
  }
}

export default withRouter(ComponentExample)
