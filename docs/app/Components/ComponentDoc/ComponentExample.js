import * as Babel from 'babel-standalone'
import _ from 'lodash'
import React, { Component, createElement, isValidElement, PropTypes } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { html } from 'js-beautify'

import { exampleContext } from 'docs/app/utils'
import { Label, Divider, Grid, Icon, Header } from 'src'
import Editor from 'docs/app/Components/Editor/Editor'
import babelrc from '.babelrc'

const babelConfig = {
  presets: [...babelrc.presets],
}

const showCodeStyle = {
  position: 'absolute',
  textAlign: 'right',
  top: '1rem',
  right: '1rem',
}

const codeIconStyle = {
  fontWeight: 'bold',
}

const titleStyle = {
  margin: 0,
}

const headerColumnStyle = {
  // provide room for absolutely positions toggle code icons
  minHeight: '4em',
  paddingRight: '7em',
}

const childrenStyle = {
  paddingTop: 0,
}

const renderedExampleStyle = {
  paddingTop: 0,
  paddingBottom: 0,
}

const errorStyle = {
  padding: '1em',
  fontSize: '0.9rem',
  color: '#a33',
  background: '#fff2f2',
}

/**
 * Renders a `component` and the raw `code` that produced it.
 * Allows toggling the the raw `code` code block.
 */
export default class ComponentExample extends Component {
  static propTypes = {
    children: PropTypes.node,
    description: PropTypes.node,
    examplePath: PropTypes.string.isRequired,
    title: PropTypes.node,
  }

  componentWillMount() {
    const { title } = this.props
    const sourceCode = this.getOriginalSourceCode()

    // show code for direct links to examples
    const active = title && _.kebabCase(title) === location.hash.replace('#', '')
    const exampleElement = this.renderOriginalExample()
    const staticMarkup = renderToStaticMarkup(exampleElement)

    this.setState({
      exampleElement,
      showCode: active,
      showHTML: active,
      sourceCode,
      staticMarkup,
    })
  }

  resetEditor = () => {
    const sourceCode = this.getOriginalSourceCode()
    this.setState({ sourceCode })
    this.renderSourceCode()
  }

  getOriginalSourceCode = () => {
    const { examplePath } = this.props
    return require(`!raw!docs/app/Examples/${examplePath}`)
  }

  getKebabExamplePath = () => _.kebabCase(this.props.examplePath)

  toggleShowCode = () => this.setState({ showCode: !this.state.showCode })

  toggleShowHTML = () => this.setState({ showHTML: !this.state.showHTML })

  renderError = _.debounce((error) => {
    this.setState({ error })
  }, 800)

  renderOriginalExample = () => {
    const { examplePath } = this.props
    return createElement(exampleContext(`./${examplePath}.js`).default)
  }

  renderSourceCode = _.debounce(() => {
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
    /* eslint-enable no-unused-vars */

    // Should use an AST transform here... oh well :/
    // Rewrite the example file into an IIFE that returns a component
    // which can be rendered in this ComponentExample's render() method

    // rewrite imports to const statements against the UPPERCASE module names
    const imports = _.get(/(import[\s\S]*from[\s\S]*['"]\n)/.exec(sourceCode), '[1]', '')
      .replace(/[\s\n]+/g, ' ')   // normalize spaces and make one line
      .replace(/'\s+/g, "'\n")    // one import per line
      .replace(/, }/g, ' }')      // remove trailing destructured commas
      .split('\n')
      .map(l => {
        const defaultImport = _.get(/import\s+(\w+)/.exec(l), '[1]')
        const destructuredImports = _.get(/import.*({[\s\w,}]+)\s+from/.exec(l), '[1]')
        const module = _.get(/import.*from.*'(.*)'/.exec(l), '[1]', '').toUpperCase()

        return _.compact([
          defaultImport && `const ${defaultImport} = ${module}`,
          destructuredImports && `const ${destructuredImports} = ${module}`,
        ]).join('\n')
      })
      .join('\n')

    // capture the default export so we can return it from the IIFE
    const defaultExport = _.get(/export\s+default\s+(?:class|function)?(?:\s+)?(\w+)/.exec(sourceCode), '[1]')

    // consider everything after the imports to be the body
    // remove `export` statements except `export default class|function`
    const body = _.get(/import[\s\S]*from '\w+'([\s\S]*)/.exec(sourceCode), '[1]', '')
      .replace(/export\s+default\s+\w+([\s\n]+)?/, '')  // remove `export default Foo` statements (lines)
      .replace(/export\s+default\s+/, '')             // remove `export default`

    const IIFE = `(function() {\n${imports}${body}return ${defaultExport}\n}())`

    try {
      const { code } = Babel.transform(IIFE, babelConfig)
      const Example = eval(code) // eslint-disable-line no-eval
      const exampleElement = _.isFunction(Example) ? <Example /> : Example

      if (!isValidElement(exampleElement)) {
        this.renderError('Default export is not a valid element. Type:' + {}.toString.call(exampleElement))
      } else {
        // immediately render a null error
        // but also ensure the last debounced error call is a null error
        const error = null
        this.renderError(error)
        this.setState({
          error,
          exampleElement,
          staticMarkup: renderToStaticMarkup(exampleElement),
        })
      }
    } catch (err) {
      this.renderError(err.message)
    }
  }, 100)

  handleChangeCode = (sourceCode) => {
    this.setState({ sourceCode })
    this.renderSourceCode()
  }

  renderCode = () => {
    const { error, showCode, sourceCode } = this.state
    if (!showCode) return

    const style = {}
    if (error) {
      style.boxShadow = `inset 0 0 0 1em ${errorStyle.background}`
    }

    return (
      <Grid.Column style={style}>
        <Divider horizontal>
          <Label
            as='a'
            basic
            horizontal
            color={error ? 'red' : 'green'}
            icon='refresh'
            content={error ? 'See Error' : 'JSX'}
            onClick={this.resetEditor}
          />
        </Divider>
        <Editor
          id={`${this.getKebabExamplePath()}-jsx`}
          value={sourceCode}
          onChange={this.handleChangeCode}
        />
        {error && (
          <pre style={errorStyle}>{error}</pre>
        )}
      </Grid.Column>
    )
  }

  renderHTML = () => {
    const { showHTML, staticMarkup } = this.state
    if (!showHTML) return

    // add new lines between almost all adjacent elements
    // moves inline elements to their own line
    const preFormattedHTML = staticMarkup
      .replace(/><(?!\/i|\/label|\/span|option)/g, '>\n<')

    const beautifiedHTML = html(preFormattedHTML, {
      indent_size: 2,
      indent_char: ' ',
      wrap_attributes: 'auto',
      wrap_attributes_indent_size: 2,
      end_with_newline: false,
    })

    return (
      <Grid.Column>
        <Divider horizontal>Rendered HTML</Divider>
        <Editor id={`${this.getKebabExamplePath()}-html`} mode='html' value={beautifiedHTML} readOnly />
      </Grid.Column>
    )
  }

  render() {
    const { children, description, title } = this.props
    const { exampleElement, showCode, showHTML } = this.state
    const active = showCode || showHTML

    const style = { marginBottom: '4em', transition: 'box-shadow 0 ease-out' }
    if (active) {
      style.transitionDuration = '0.2s'
      style.boxShadow = '0 0 30px #ccc'
    }

    return (
      <Grid style={style} divided={active} columns='1'>
        <Grid.Column style={headerColumnStyle}>
          {title && <Header as='h3' style={titleStyle}>{title}</Header>}
          {description && <p>{description}</p>}
          <div style={showCodeStyle}>
            <Icon
              link
              bordered
              name='code'
              color={showCode ? 'green' : 'grey'}
              onClick={this.toggleShowCode}
              style={codeIconStyle}
            />
            <Icon
              link
              bordered
              name='html5'
              color={showHTML ? 'green' : 'grey'}
              onClick={this.toggleShowHTML}
            />
          </div>
        </Grid.Column>
        {children && (
          <Grid.Column style={childrenStyle}>
            {children}
          </Grid.Column>
        )}
        <Grid.Column
          className={`rendered-example ${this.getKebabExamplePath()}`}
          style={renderedExampleStyle}
        >
          {exampleElement}
        </Grid.Column>
        {this.renderCode()}
        {this.renderHTML()}
      </Grid>
    )
  }
}
