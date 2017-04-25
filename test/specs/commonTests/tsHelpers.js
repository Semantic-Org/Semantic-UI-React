import _ from 'lodash'
import {
  createSourceFile,
  forEachChild,
  ScriptTarget,
  SyntaxKind,
} from 'typescript'

const isInterface = ({ kind }) => kind === SyntaxKind.InterfaceDeclaration

const isExportModifier = ({ kind }) => kind === SyntaxKind.ExportKeyword

const isPropertySignature = ({ kind }) => kind === SyntaxKind.PropertySignature

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

export const requireTs = tsPath => {
  try {
    return require(`!raw-loader!../../../src/${tsPath}`)
  } catch (e) {
    return false
  }
}
