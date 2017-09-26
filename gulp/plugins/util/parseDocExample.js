import traverse from 'babel-traverse'
import _ from 'lodash'

import parseBuffer from './parseBuffer'

/**
 * Parses the root view of component examples and builds an object with order of sections.
 *
 * @param {buffer} buffer The content of a view
 * @return {object}
 */
const parseDocExample = (buffer) => {
  const ast = parseBuffer(buffer)
  const sections = {}
  let position = 0

  traverse(ast, {
    ImportDeclaration: (path) => {
      const specifier = _.first(path.get('specifiers'))

      if (!specifier.isImportDefaultSpecifier()) return

      const name = _.get(specifier, 'node.local.name')
      const source = _.get(path, 'node.source.value')

      if (_.startsWith(source, './')) sections[name] = {}
    },
    JSXIdentifier: (path) => {
      const name = _.get(path, 'node.name')

      if (_.has(sections, name)) {
        position += 1
        sections[name] = { position }
      }
    },
  })

  return sections
}

export default parseDocExample
