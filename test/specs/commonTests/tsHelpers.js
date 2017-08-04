import _ from 'lodash'
import {
  createSourceFile,
  forEachChild,
  ScriptTarget,
  SyntaxKind,
} from 'typescript'

const isAnyKeyword = ({ kind }) => kind === SyntaxKind.AnyKeyword
const isIndexSignature = ({ kind }) => kind === SyntaxKind.IndexSignature
const isInterface = ({ kind }) => kind === SyntaxKind.InterfaceDeclaration
const isExportModifier = ({ kind }) => kind === SyntaxKind.ExportKeyword
const isPropertySignature = ({ kind }) => kind === SyntaxKind.PropertySignature
const isStringKeyword = ({ kind }) => kind === SyntaxKind.StringKeyword

const getProps = members => {
  const props = _.filter(members, isPropertySignature)

  return _.map(props, ({ name, questionToken }) => ({
    name: name.text,
    required: !questionToken,
  }))
}

const walkNode = (node, nodes) => forEachChild(node, child => {
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

export const getInterfaces = nodes => {
  const interfaces = _.filter(nodes, isInterface)

  return _.map(interfaces, ({ members, modifiers, name }) => ({
    exported: _.some(modifiers, isExportModifier),
    name: name.text,
    props: getProps(members),
  }))
}

export const hasAnySignature = nodes => {
  const signatures = _.filter(nodes, isIndexSignature)

  return _.some(signatures, ({ parameters, type: rightType }) => {
    const { name: { text }, type } = _.head(parameters)

    return isAnyKeyword(rightType) && isStringKeyword(type) && text === 'key'
  })
}

export const requireTs = tsPath => {
  try {
    return require(`!raw-loader!../../../src/${tsPath}`)
  } catch (e) {
    return false
  }
}
