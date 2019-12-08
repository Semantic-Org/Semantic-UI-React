import _ from 'lodash'
import traverse from '@babel/traverse'

import parseBuffer from './parseBuffer'

const getJSXAttributes = (jsxPath) =>
  _.map(_.get(jsxPath, 'node.attributes'), (attr) => ({
    name: _.get(attr, 'name.name'),
    value: _.get(attr, 'value.value'),
  }))

const getAttributeValue = (attributes, name) => _.get(_.find(attributes, { name }), 'value')

/**
 * Parses the section view of component examples and builds an object with examples titles and paths.
 *
 * @param {buffer} buffer The content of a view
 * @return {object}
 */
const parseDocSection = (buffer) => {
  const ast = parseBuffer(buffer)
  const examples = []
  let sectionName

  traverse(ast, {
    JSXOpeningElement: (path) => {
      const attributes = getJSXAttributes(path)
      const name = _.get(path, 'node.name.name')

      const title = getAttributeValue(attributes, 'title')
      const examplePath = getAttributeValue(attributes, 'examplePath')

      if (name === 'ExampleSection') {
        sectionName = title
        return
      }

      if (name === 'ComponentExample' && title) {
        examples.push({ title, examplePath })
      }
    },
  })

  return { examples, sectionName }
}

export default parseDocSection
