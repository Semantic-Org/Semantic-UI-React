import * as Babel from '@babel/standalone'
import _ from 'lodash'
import React, { isValidElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

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

/**
 * Renders a component example.
 * @param examplePath
 * @param sourceCode
 */
const renderExampleSourceCode = (examplePath, sourceCode) => {
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
          .split('/')
          .splice(0, 2)
          .join('/')
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
      return {
        error: `Default export is not a valid element. Type:${{}.toString.call(exampleElement)}`,
      }
    }

    return {
      exampleElement,
      error: null,
      htmlMarkup: renderToStaticMarkup(exampleElement),
    }
  } catch (err) {
    return { error: err.toString() }
  }
}

export default renderExampleSourceCode
