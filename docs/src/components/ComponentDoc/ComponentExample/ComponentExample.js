import * as Babel from '@babel/standalone'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { PureComponent, isValidElement } from 'react'
import { withRouter } from 'react-router'
import { renderToStaticMarkup } from 'react-dom/server'
import { html } from 'js-beautify'
import copyToClipboard from 'copy-to-clipboard'
import { Divider, Form, Grid, Menu, Segment, Visibility } from 'semantic-ui-react'
import { rem } from 'src/lib'

import { Provider } from 'stardust'

import {
  exampleContext,
  examplePathToHash,
  getFormattedHash,
  knobsContext,
  repoURL,
  scrollToAnchor,
  variablesContext,
} from 'docs/src/utils'
import Editor from 'docs/src/components/Editor/Editor'
import ComponentControls from '../ComponentControls'
import ComponentExampleTitle from './ComponentExampleTitle'

const babelConfig = {
  presets: [
    [
      'env',
      {
        targets: {
          browsers: ['last 4 versions', 'not dead'],
        },
      },
    ],
    'react',
    ['stage-1', { decoratorsLegacy: true }],
  ],
}

const childrenStyle = {
  paddingTop: 0,
  maxWidth: rem(50),
}

const errorStyle = {
  padding: '1em',
  fontSize: rem(0.9),
  color: '#a33',
  background: '#fff2f2',
}

const controlsWrapperStyle = {
  minHeight: rem(3),
}

/**
 * Renders a `component` and the raw `code` that produced it.
 * Allows toggling the the raw `code` code block.
 */
class ComponentExample extends PureComponent {
  state = { knobs: {} }

  static contextTypes = {
    onPassed: PropTypes.func,
  }

  static propTypes = {
    children: PropTypes.node,
    description: PropTypes.node,
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

    const exampleElement = this.renderOriginalExample()

    this.setState({
      exampleElement,
      handleMouseLeave: this.handleMouseLeave,
      handleMouseMove: this.handleMouseMove,
      showCode: this.isActiveHash(),
      sourceCode: this.getOriginalSourceCode(),
      markup: renderToStaticMarkup(exampleElement),
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
      showRtl: false,
      showVariables: false,
    })
  }

  isActiveState = () => {
    const { showCode, showHTML, showRtl, showVariables } = this.state

    return showCode || showHTML || showRtl || showVariables
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
    copyToClipboard(window.location.href)
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

  handleShowRtlClick = (e) => {
    e.preventDefault()

    const { showRtl } = this.state

    this.setState({ showRtl: !showRtl }, () => {
      this.updateHash()
      this.renderSourceCode()
    })
  }

  handleShowVariablesClick = (e) => {
    e.preventDefault()

    const { showVariables } = this.state

    this.setState({ showVariables: !showVariables }, this.updateHash)
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
    const { sourceCode } = this.state
    const original = this.getOriginalSourceCode()
    // eslint-disable-next-line no-alert
    if (sourceCode !== original && confirm('Lose your changes?')) {
      this.setState({ sourceCode: original })
      this.renderSourceCode()
    }
  }

  getOriginalSourceCode = () => {
    const { examplePath } = this.props

    if (!this.sourceCode) this.sourceCode = require(`!raw-loader!../../../examples/${examplePath}`)

    return this.sourceCode
  }

  getKnobsFilename = () => `./${this.props.examplePath}.knobs.js`

  getKebabExamplePath = () => {
    if (!this.kebabExamplePath) this.kebabExamplePath = _.kebabCase(this.props.examplePath)

    return this.kebabExamplePath
  }

  hasKnobs = () => _.includes(knobsContext.keys(), this.getKnobsFilename())

  renderError = _.debounce((error) => {
    this.setState({ error })
  }, 800)

  renderOriginalExample = () => {
    const { examplePath } = this.props
    const ExampleComponent = exampleContext(`./${examplePath}.js`).default
    return this.renderWithProvider(ExampleComponent)
  }

  renderSourceCode = _.debounce(() => {
    const { examplePath } = this.props
    const { sourceCode } = this.state
    // Heads Up!
    //
    // These are used in the code editor scope when rewriting imports to const statements
    // We use require() to preserve variable names
    // Webpack rewrites import names
    /* eslint-disable no-unused-vars */
    const FAKER = require('faker')
    const LODASH = require('lodash')
    const REACT = require('react')
    const STARDUST = require('stardust')
    let WIREFRAME
    let COMMON
    /* eslint-enable no-unused-vars */

    // Should use an AST transform here... oh well :/
    // Rewrite the example file into an IIFE that returns a component
    // which can be rendered in this ComponentExample's render() method

    // rewrite imports to const statements against the UPPERCASE module names
    const imports = _.get(/(^[\s\S])*import[\s\S]*from[\s\S]*['"]\n/.exec(sourceCode), '[0]', '')
      .replace(/[\s\n]+/g, ' ') // normalize spaces and make one line
      .replace(/ import/g, '\nimport') // one import per line
      .split('\n') // split lines
      .filter(Boolean) // remove empty lines
      .map((l) => {
        // rewrite imports to const statements
        const [defaultImport, destructuredImports, _module] = _.tail(
          /import\s+([\w]+)?(?:\s*,\s*)?({[\s\w,]+})?\s+from\s+['"](?:.*\/)?([\w\-_]+)['"]/.exec(l),
        )

        const module = _.snakeCase(_module).toUpperCase()

        if (module === 'COMMON') {
          const componentPath = examplePath
            .split(__PATH_SEP__)
            .splice(0, 2)
            .join(__PATH_SEP__)
          COMMON = require(`docs/src/examples/${componentPath}/common`)
        }

        const constStatements = []
        if (defaultImport) constStatements.push(`const ${defaultImport} = ${module}`)
        if (destructuredImports) constStatements.push(`const ${destructuredImports} = ${module}`)
        constStatements.push('\n')

        return constStatements.join('\n')
      })
      .join('\n')

    // capture the default export so we can return it from the IIFE
    const defaultExport = _.get(
      /export\s+default\s+(?:class|function)?(?:\s+)?(\w+)/.exec(sourceCode),
      '[1]',
    )

    const body = _.get(
      /(export\sdefault\sclass|const|class\s\S*\sextends)[\s\S]*/.exec(sourceCode),
      '[0]',
      '',
    )
      .replace(/export\s+default\s+(?!class|function)\w+([\s\n]+)?/, '') // remove `export default Foo` statements
      .replace(/export\s+default\s+/, '') // remove `export default ...`

    const IIFE = `(function() {\n${imports}${body}return ${defaultExport}\n}())`

    try {
      const { code } = Babel.transform(IIFE, babelConfig)
      const Example = eval(code) // eslint-disable-line no-eval
      const exampleElement = _.isFunction(Example) ? this.renderWithProvider(Example) : Example

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
  }, 100)

  handleKnobChange = (knobs) => {
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

  getKnobsComponent = () => {
    if (typeof this.KnobsComponent !== 'undefined') {
      return this.KnobsComponent
    }

    this.KnobsComponent = this.hasKnobs() ? knobsContext(this.getKnobsFilename()).default : null

    return this.KnobsComponent
  }

  getKnobsValue = () => {
    const Knobs = this.getKnobsComponent()

    return Knobs ? { ...Knobs.defaultProps, ...this.state.knobs } : null
  }

  renderKnobs = () => {
    const Knobs = this.getKnobsComponent()

    return Knobs ? <Knobs {...this.getKnobsValue()} onKnobChange={this.handleKnobChange} /> : null
  }

  getComponentName = () => this.props.examplePath.split('/')[1]

  renderWithProvider = ExampleComponent => (
    <Provider componentVariables={this.state.componentVariables} rtl={this.state.showRtl}>
      <ExampleComponent knobs={this.getKnobsValue()} />
    </Provider>
  )

  handleChangeCode = (sourceCode) => {
    this.setState({ sourceCode }, this.renderSourceCode)
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

  renderHTML = () => {
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
          mode='html'
          value={beautifiedHTML}
          readOnly
        />
      </div>
    )
  }

  renderVariables = () => {
    const { showVariables } = this.state
    if (!showVariables) return

    const name = this.getComponentName()

    return (
      <div>
        <Divider horizontal>{_.startCase(name).replace(/ /g, '')} Variables</Divider>
        <Provider.Consumer>
          {({ siteVariables }) => {
            const variablesFilename = `./${name}/${_.camelCase(name)}Variables.js`
            const hasVariablesFile = _.includes(variablesContext.keys(), variablesFilename)

            if (!hasVariablesFile) {
              return (
                <Segment size='small' secondary basic>
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
        </Provider.Consumer>
      </div>
    )
  }

  handleVariableChange = (component, variable) => (e, { value }) => {
    this.setState(
      _.merge(this.state, {
        componentVariables: {
          [component]: { [variable]: value },
        },
      }),
      this.renderSourceCode,
    )
  }

  render() {
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
      ...(isActive
        ? {
          background: '#fff',
          boxShadow: '0 0 30px #ccc',
        }
        : isHovering && {
          background: '#fff',
          boxShadow: '0 0 10px #ccc',
          zIndex: 1,
        }),
    }

    const knobs = this.renderKnobs()

    return (
      <Visibility once={false} onTopPassed={this.handlePass} onTopPassedReverse={this.handlePass}>
        <Grid
          className='docs-example'
          padded='vertically'
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
            <Grid.Column textAlign='right' width={4} style={controlsWrapperStyle}>
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
      </Visibility>
    )
  }
}

export default withRouter(ComponentExample)
