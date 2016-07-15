import _ from 'lodash'
import docgenInfo from '../docgenInfo.json'

export const typeOrder = [
  'element',
  'collection',
  'view',
  'module',
  'addon',
]

/**
 * This util extracts and formats a doc object from docgenInfo.json for a single `component`.
 * @param {string} _meta Stardust component _meta object.
 * @returns {{}} Documentation object.
 */
export const (_meta) => {
  const docPath = _.find(_.keys(docgenInfo), path => {
    const re = new RegExp(`${_meta.name}.js$`)
    return re.test(path)
  })
  const docgen = docgenInfo[docPath]

  return { docPath, docgen }
}

/**
 * Get the Webpack Context for all doc site examples.
 */
export const require.context('docs/app/Examples/', true, /\.js$/)
