import _ from 'lodash'
import { types } from 'recast'
import { utils } from 'react-docgen'

const { namedTypes } = types
const { getMemberValuePath, getPropertyName, getPropType, resolveToValue } = utils

const getObjectName = (path) => `${_.get(path, 'object.name')}.${_.get(path, 'property.name')}`

const getArgumentValue = (path) => {
  if (namedTypes.Identifier.check(path)) return path.name
  if (namedTypes.MemberExpression.check(path)) return getObjectName(path)

  throw new Error('Unsupported value')
}

const isMeanableMember = (path) => {
  if (namedTypes.CallExpression.check(path.node)) {
    const callee = path.get('callee')
    const typeName = getObjectName(callee.value)

    return typeName.startsWith('PropTypes')
  }

  return !!namedTypes.MemberExpression.check(path.node)
}

const amendPropTypes = (documentation, path) => {
  if (!namedTypes.ObjectExpression.check(path.node)) return

  path.get('properties').each((propertyPath) => {
    const propertyName = getPropertyName(propertyPath)
    const propDescriptor = documentation.getPropDescriptor(propertyName)
    const valuePath = propertyPath.get('value')

    if (!namedTypes.CallExpression.check(valuePath.node)) return

    const argumentPath = valuePath.get('arguments').value[0]

    const calleePath = valuePath.get('callee').node
    const objectName = getObjectName(calleePath)

    if (objectName === 'customPropTypes.onlyProp' || objectName === 'customPropTypes.suggest') {
      propDescriptor.type = {
        name: 'enum',
        value: getArgumentValue(argumentPath),
      }

      return
    }

    if (objectName === 'customPropTypes.every') {
      const elements = valuePath.get('arguments', 0, 'elements')
      const parsedTypes = []

      for (let i = 0; i < elements.value.length; i += 1) {
        const element = elements.get(i)

        if (isMeanableMember(element)) {
          parsedTypes.push(getPropType(element))
        }
      }

      propDescriptor.type = {
        name: 'union',
        value: parsedTypes,
      }
    }
  })
}

const parserCustomHandler = (documentation, path) => {
  let propTypesPath = getMemberValuePath(path, 'propTypes')
  if (!propTypesPath) return

  propTypesPath = resolveToValue(propTypesPath)
  if (!propTypesPath) return

  amendPropTypes(documentation, propTypesPath)
}

export default parserCustomHandler
