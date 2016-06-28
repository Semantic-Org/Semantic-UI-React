import _ from 'lodash'
import docgenInfo from '../docgenInfo.json'

/**
 * This util extracts and formats a doc object from docgenInfo.json for a single `component`.
 * @param {string} _meta Stardust component _meta object.
 * @returns {{}} Documentation object.
 */
export default (_meta) => {
  const docPath = _.find(_.keys(docgenInfo), path => {
    const re = new RegExp(`${_meta.name}.js$`)
    return re.test(path)
  })
  const docgen = docgenInfo[docPath]

  return { docPath, docgen }
}
