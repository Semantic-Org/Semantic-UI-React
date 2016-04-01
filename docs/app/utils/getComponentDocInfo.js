import _ from 'lodash'
import docgenInfo from '../docgenInfo.json'

/**
 * This util extracts and formats a doc object from docgenInfo.json for a single `component` and merges it with
 * the component's meta information.
 * @param {string} _meta Stardust component _meta object.
 * @returns {{}} Documentation object.
 */
export default (_meta) => {
  const docPath = _.find(_.keys(docgenInfo), path => path.includes(`/${_meta.name}.js`))
  const definition = docgenInfo[docPath]

  return {
    name: _meta.name,
    path: docPath,
    parent: _meta.parent,
    type: _meta.type,
    docBlock: definition.docBlock,
    props: definition.props,
  }
}
