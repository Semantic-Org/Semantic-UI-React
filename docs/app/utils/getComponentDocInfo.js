import _ from 'lodash'
import docgenInfo from '../docgenInfo.json'

/**
 * This util extracts and formats a doc object from docgenInfo.json for a single `component` and merges it with
 * the component's meta information.
 * @param {string} meta Stardust component _meta object.
 * @returns {{}} Documentation object.
 */
export default (meta) => {
  const docPath = _.find(_.keys(docgenInfo), path => path.includes(`/${meta.name}.js`))
  const definition = docgenInfo[docPath]

  return {
    name: meta.name,
    path: docPath,
    parent: meta.parent,
    type: meta.type,
    docBlock: definition.docBlock,
    props: definition.props,
  }
}
