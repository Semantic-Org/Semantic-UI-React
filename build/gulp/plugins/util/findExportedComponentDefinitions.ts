import { utils } from 'react-docgen'
import isUIComponentClass from './isUIComponentClass'

const {
  isExportsOrModuleAssignment,
  isReactComponentClass,
  isReactCreateClassCall,
  isStatelessComponent,
  normalizeClassDefinition,
  resolveExportDeclaration,
  resolveToValue,
  resolveHOC,
} = utils

const interopRequireDefault = obj => {
  return obj && obj.__esModule ? obj : { default: obj }
}

const isExportsOrModuleAssignment2 = interopRequireDefault(isExportsOrModuleAssignment)
const isReactComponentClass2 = interopRequireDefault(isReactComponentClass)
const isReactCreateClassCall2 = interopRequireDefault(isReactCreateClassCall)
const isStatelessComponent2 = interopRequireDefault(isStatelessComponent)
const normalizeClassDefinition2 = interopRequireDefault(normalizeClassDefinition)
const resolveExportDeclaration2 = interopRequireDefault(resolveExportDeclaration)
const resolveToValue2 = interopRequireDefault(resolveToValue)
const resolveHOC2 = interopRequireDefault(resolveHOC)

/*
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 *
 */

function ignore() {
  return false
}

function resolveDefinition(definition, types) {
  if (isUIComponentClass(definition) || isReactComponentClass2.default(definition)) {
    normalizeClassDefinition2.default(definition)
    return definition
  }
  if (isReactCreateClassCall2.default(definition)) {
    // return argument
    const resolvedPath = resolveToValue2.default(definition.get('arguments', 0))
    if (types.ObjectExpression.check(resolvedPath.node)) {
      return resolvedPath
    }
  } else if (isStatelessComponent2.default(definition)) {
    return definition
  }
  return null
}

function isComponentDefinition(path) {
  return (
    isUIComponentClass(path) ||
    isReactCreateClassCall2.default(path) ||
    isReactComponentClass2.default(path) ||
    isStatelessComponent2.default(path)
  )
}

/**
 * Given an AST, this function tries to find the exported component definitions.
 *
 * The component definitions are either the ObjectExpression passed to
 * `React.createClass` or a `class` definition extending `React.Component` or
 * having a `render()` method.
 *
 * If a definition is part of the following statements, it is considered to be
 * exported:
 *
 * modules.exports = Definition;
 * exports.foo = Definition;
 * export default Definition;
 * export const Definition = ...;
 */
function findExportedComponentDefinitions(ast, recast) {
  const types = recast.types.namedTypes
  const components = []

  function exportDeclaration(path) {
    const definitions = resolveExportDeclaration2
      .default(path, types)
      .reduce((acc, definition) => {
        if (isComponentDefinition(definition)) {
          acc.push(definition)
        } else {
          const resolved = resolveToValue2.default(resolveHOC2.default(definition))
          if (isComponentDefinition(resolved)) {
            acc.push(resolved)
          }
        }
        return acc
      }, [])
      .map(definition => {
        return resolveDefinition(definition, types)
      })

    if (definitions.length === 0) {
      return false
    }
    definitions.forEach(definition => {
      if (definition && components.indexOf(definition) === -1) {
        components.push(definition)
      }
    })
    return false
  }

  recast.visit(ast, {
    visitFunctionDeclaration: ignore,
    visitFunctionExpression: ignore,
    visitClassDeclaration: ignore,
    visitClassExpression: ignore,
    visitIfStatement: ignore,
    visitWithStatement: ignore,
    visitSwitchStatement: ignore,
    visitCatchCause: ignore,
    visitWhileStatement: ignore,
    visitDoWhileStatement: ignore,
    visitForStatement: ignore,
    visitForInStatement: ignore,

    visitExportDeclaration: exportDeclaration,
    visitExportNamedDeclaration: exportDeclaration,
    visitExportDefaultDeclaration: exportDeclaration,

    visitAssignmentExpression: function visitAssignmentExpression(pathParam) {
      let path = pathParam
      // Ignore anything that is not `exports.X = ...;` or
      // `module.exports = ...;`
      if (!isExportsOrModuleAssignment2.default(path)) {
        return false
      }
      // Resolve the value of the right hand side. It should resolve to a call
      // expression, something like React.createClass
      path = resolveToValue2.default(path.get('right'))
      if (!isComponentDefinition(path)) {
        path = resolveToValue2.default((resolveHOC2.default && resolveHOC2.default(path)) || path)
        if (!isComponentDefinition(path)) {
          return false
        }
      }
      const definition = resolveDefinition(path, types)
      if (definition && components.indexOf(definition) === -1) {
        components.push(definition)
      }
      return false
    },
  })

  return components
}

export default findExportedComponentDefinitions
