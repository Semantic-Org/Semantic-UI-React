import _ from 'lodash'
import { createSourceFile, forEachChild, ScriptTarget, SyntaxKind } from 'typescript'

const isAnyKeyword = ({ kind }) => kind === SyntaxKind.AnyKeyword
const isIndexSignature = ({ kind }) => kind === SyntaxKind.IndexSignature
const isInterface = ({ kind }) => kind === SyntaxKind.InterfaceDeclaration
const isExportModifier = ({ kind }) => kind === SyntaxKind.ExportKeyword
const isPropertySignature = ({ kind }) => kind === SyntaxKind.PropertySignature
const isTypeReference = ({ kind }) => kind === SyntaxKind.TypeReference
const isIntersectionType = ({ kind }) => kind === SyntaxKind.IntersectionType
const isShorthandProperty = (node) => {
  if (!isPropertySignature(node) || !isTypeReference(node.type)) return false
  return _.includes(
    ['SemanticShorthandContent', 'SemanticShorthandItem', 'SemanticShorthandCollection'],
    _.get(node, 'type.typeName.text'),
  )
}
const isStringKeyword = ({ kind }) => kind === SyntaxKind.StringKeyword
const isVariableDeclaration = ({ kind }) => kind === SyntaxKind.VariableDeclaration

const getProps = (members) => {
  const props = _.filter(members, isPropertySignature)

  return _.map(props, ({ name, questionToken }) => ({
    name: name.text,
    required: !questionToken,
  }))
}

const getShorthands = (members) => {
  const shorthands = _.filter(members, isShorthandProperty)

  return _.map(shorthands, (shorthand) => ({
    name: _.get(shorthand, 'name.text'),
    type: _.get(shorthand, 'type.typeName.text'),
  }))
}

const walkNode = (node, nodes) =>
  forEachChild(node, (child) => {
    nodes.push(child)
    walkNode(child, nodes)

    return false
  })

export const getNodes = (tsFile, tsContent) => {
  const nodes = []
  const tsSource = createSourceFile(tsFile, tsContent, ScriptTarget.Latest, true)

  walkNode(tsSource, nodes)

  return nodes
}

export const getInterfaces = (nodes) => {
  const interfaces = _.filter(nodes, isInterface)

  return _.map(interfaces, ({ members, modifiers, name }) => ({
    exported: _.some(modifiers, isExportModifier),
    name: name.text,
    props: getProps(members),
    shorthands: getShorthands(members),
  }))
}

export const getComponentType = (nodes, componentName) => {
  return nodes.find((node) => isVariableDeclaration(node) && node.name.text === componentName)
}

export const isForwardRefComponent = (componentType) => {
  if (isIntersectionType(componentType.type)) {
    if (Array.isArray(componentType.type.types)) {
      if (componentType.type.types.length === 2) {
        const [type] = componentType.type.types

        return type.typeName.text === 'ForwardRefComponent'
      }
    }
  }

  if (isTypeReference(componentType.type)) {
    return componentType.type.typeName.text === 'ForwardRefComponent'
  }

  return false
}

export const hasAnySignature = (nodes) => {
  const signatures = _.filter(nodes, isIndexSignature)

  return _.some(signatures, ({ parameters, type: rightType }) => {
    const {
      name: { text },
      type,
    } = _.head(parameters)

    return isAnyKeyword(rightType) && isStringKeyword(type) && text === 'key'
  })
}

export const requireTs = (tsPath) => {
  try {
    return require(`!raw-loader!../../../src/${tsPath}`).default
  } catch (e) {
    return false
  }
}
