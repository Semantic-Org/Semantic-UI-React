import { utils } from 'react-docgen'
import recast from 'recast'

const { match, resolveToValue } = utils

const interopRequireDefault = obj => {
  return obj && obj.__esModule ? obj : { default: obj }
}

const match2 = interopRequireDefault(match)
const resolveToValue2 = interopRequireDefault(resolveToValue)

const types = recast.types.namedTypes

const isRenderComponentMethod = node => {
  const isProperty = node.type === 'ClassProperty'
  return (
    (types.MethodDefinition.check(node) || isProperty) &&
    !node.computed &&
    !node.static &&
    (node.kind === '' || node.kind === 'method' || isProperty) &&
    node.key.name === 'renderComponent'
  )
}

/**
 * Returns `true` if the path represents a class definition which either
 * extends the UIComponent class or implements a `renderComponent()` method.
 */
const isUIComponentClass = path => {
  const node = path.node
  if (!types.ClassDeclaration.check(node) && !types.ClassExpression.check(node)) {
    return false
  }

  // renderComponent method
  if (node.body.body.some(isRenderComponentMethod)) {
    return true
  }
  // extends UIComponent?
  if (!node.superClass) {
    return false
  }

  const superClass = resolveToValue2.default(path.get('superClass'))

  return !!(superClass && match2.default(superClass.node, { property: { name: 'UIComponent' } }))
}

export default isUIComponentClass
