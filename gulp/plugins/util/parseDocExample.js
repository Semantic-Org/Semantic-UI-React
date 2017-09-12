import _ from 'lodash'
import { parse } from 'babylon'
import traverse from 'babel-traverse'


export default (buffer) => {
  const ast = parse(buffer.toString(), {
    sourceType: 'module',
    plugins: [
      'classProperties',
      'jsx',
    ],
  })
  const sections = {}

  traverse(ast, {
    ImportDeclaration: (path) => {
      const specifier = _.first(path.get('specifiers'))

      if (!specifier.isImportDefaultSpecifier()) return

      const name = _.get(specifier, 'node.local.name')
      const source = _.get(path, 'node.source.value')

      if (_.startsWith(source, './')) {
        sections[name] = {
          name,
        }
      }
    },
  })

  return sections
}
