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
  const section = {
    examples: [],
  }
  const position = 0

  traverse(ast, {
    JSXOpeningElement: (path) => {
      const attrs = _.map(_.get(path, 'node.attributes'), a => ({
        name: _.get(a, 'name.name'),
        value: _.get(a, 'value.value'),
      }))
      const name = _.get(path, 'node.name.name')

      if (name === 'ExampleSection') {
        const title = _.find(attrs, { name: 'title' })
        section.name = title.name
        return
      }

      if (name === 'ComponentExample') {
        const title = _.find(attrs, { name: 'title' })
        if (title) {
          const examplePath = _.find(attrs, { name: 'examplePath' }).value

          section.examples.push({ title: title.value, path: examplePath })
        }
      }
    },
  })

  return section
}
