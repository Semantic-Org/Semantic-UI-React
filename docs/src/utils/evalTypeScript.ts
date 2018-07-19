import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Stardust from '@stardust-ui/react'
import * as _ from 'lodash'
import * as ts from 'typescript'

/**
 * Converts import statement to expression by converting the module name in
 * upper snake case and declaring variables for the named bindings. The relative
 * imports have special converting strategy.
 *
 * import * as React from "react"; => const React = REACT;
 * import { Component1, Component2 } from "module"; => const {Component1, Component2} = MODULE;
 */
export const convertImportStatementToExpression = (node: ts.ImportDeclaration) => {
  const MODULE = _.snakeCase((node.moduleSpecifier as ts.Identifier).text).toUpperCase()
  return _.cond([
    // import * as React from 'react' => const React = REACT
    [
      ts.isNamespaceImport,
      namedBindings => {
        return `\nconst ${namedBindings.name.escapedText} = ${MODULE};\n`
      },
    ],

    // import { Component1, Component2 } from "module"; => const {Component1, Component2} = MODULE;
    [
      ts.isNamedImports,
      namedBindings => {
        const imports = namedBindings.elements.map(item => item.name.escapedText)
        return `const {${imports.join()}} = ${MODULE};\n`
      },
    ],
  ])(node.importClause.namedBindings)
}

/**
 * Transpiles TypeScript to executable JavaScript.
 */
const transpileTypeScript = (sourceCode): string => {
  // TODO(zuko): remove this once we get rid of synthetic default imports
  sourceCode = sourceCode.replace(/import (\w+)/g, 'import * as $1') // tslint:disable-line

  const inMemorySourceFile = ts.createSourceFile(
    'example.ts',
    sourceCode,
    ts.ScriptTarget.Latest,
    false,
  )

  let transformedCode = sourceCode
  ts.forEachChild(inMemorySourceFile, (node: ts.Node) => {
    let replacementCode
    switch (node.kind) {
      case ts.SyntaxKind.ImportDeclaration:
        replacementCode = convertImportStatementToExpression(node as ts.ImportDeclaration)
        transformedCode = transformedCode.replace(
          sourceCode.substr(node.pos, node.end - node.pos),
          replacementCode,
        )
        break
      case ts.SyntaxKind.ExportAssignment:
        replacementCode = `return ${(node as any).expression.escapedText}`
        transformedCode = transformedCode.replace(
          sourceCode.substr(node.pos, node.end - node.pos),
          replacementCode,
        )
        break
    }
  })

  const IIFE = `;(function () { ${transformedCode} })()`
  return ts.transpile(IIFE, {
    jsx: ts.JsxEmit.React,
    module: ts.ModuleKind.CommonJS,
    allowSyntheticDefaultImports: true,
  })
}

interface IExecutionSandboxGlobals {
  REACT: any
  REACT_DOM: any
  STARDUST_UI_REACT: any
  LODASH: any
}
/**
 * Executes JavaScript code within our sandbox. Returns the result of the
 * last evaluated expression.
 */
const execute = (
  code,
  { REACT, REACT_DOM, STARDUST_UI_REACT, LODASH }: IExecutionSandboxGlobals,
) => {
  return eval(code) // tslint:disable-line
}

/**
 * Evaluates TypeScript source code by transpiling it to JavaScript and then
 * executing it within our sandbox, which provides a suite of global variables.
 */
const evalTypeScript = (sourceCode): any => {
  const transpiledCode = transpileTypeScript(sourceCode)
  return execute(transpiledCode, {
    REACT: React,
    REACT_DOM: ReactDOM,
    STARDUST_UI_REACT: Stardust,
    LODASH: _,
  })
}

export default evalTypeScript
