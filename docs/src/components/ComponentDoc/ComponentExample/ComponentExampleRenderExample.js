import * as Babel from '@babel/standalone'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { createElement, PureComponent, isValidElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { updateForKeys } from 'docs/src/hoc'

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

class ComponentExampleRenderExample extends PureComponent {
  static propTypes = {
    exampleHash: PropTypes.string.isRequired,
    examplePath: PropTypes.string.isRequired,
    onRenderCode: PropTypes.func.isRequired,
    sourceCode: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    const exampleComponent = require(`docs/src/examples/${props.examplePath}`).default

    this.state = { exampleElement: createElement(exampleComponent) }
  }

  componentWillReceiveProps({ sourceCode }) {
    this.renderSourceCode(sourceCode)
  }

  renderError = _.debounce((error) => {
    this.setState({ error })
  }, 800)

  renderSourceCode = _.debounce((sourceCode) => {
    const { examplePath } = this.props
    // Heads Up!
    //
    // These are used in the code editor scope when rewriting imports to const statements
    // We use require() to preserve variable names
    // Webpack rewrites import names
    /* eslint-disable no-unused-vars */
    const FAKER = require('faker')
    const LODASH = require('lodash')
    const REACT = require('react')
    const SEMANTIC_UI_REACT = require('semantic-ui-react')
    let WIREFRAME
    let COMMON
    /* eslint-enable no-unused-vars */

    // Should use an AST transform here... oh well :/
    // Rewrite the example file into an IIFE that returns a component
    // which can be rendered in this ComponentExample's render() method

    // rewrite imports to const statements against the UPPERCASE module names
    const imports = _
      .get(/(^[\s\S])*import[\s\S]*from[\s\S]*['"]\n/.exec(sourceCode), '[0]', '')
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
        } else if (module === 'WIREFRAME') {
          WIREFRAME = require('docs/src/examples/behaviors/Visibility/Wireframe').default
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

    const body = _
      .get(/(export\sdefault\sclass|const|class\s\S*\sextends)[\s\S]*/.exec(sourceCode), '[0]', '')
      .replace(/export\s+default\s+(?!class|function)\w+([\s\n]+)?/, '') // remove `export default Foo` statements
      .replace(/export\s+default\s+/, '') // remove `export default ...`

    const IIFE = `(function() {\n${imports}${body}return ${defaultExport}\n}())`

    try {
      const { code } = Babel.transform(IIFE, babelConfig)
      const Example = eval(code) // eslint-disable-line no-eval
      const exampleElement = _.isFunction(Example) ? <Example /> : Example

      if (!isValidElement(exampleElement)) {
        this.renderError(
          `Default export is not a valid element. Type:${{}.toString.call(exampleElement)}`,
        )
      } else {
        // immediately render a null error
        // but also ensure the last debounced error call is a null error
        this.renderError(null)
        this.setState({
          exampleElement,
          error: null,
          markup: renderToStaticMarkup(exampleElement),
        })
      }
    } catch (err) {
      this.renderError(err.message)
    }
  }, 100)

  render() {
    const { exampleHash } = this.props
    const { exampleElement } = this.state

    return <div className={exampleHash}>{exampleElement}</div>
  }
}

export default updateForKeys(['sourceCode'])(ComponentExampleRenderExample)
