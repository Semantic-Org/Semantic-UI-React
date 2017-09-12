import _ from 'lodash/fp'

import docInfo from 'docs/app/docgenInfo.json'
import * as semanticUIReact from 'src'
import { repoURL } from './constants'

const docPaths = _.keys(docInfo)

/**
 * Get a path of the passed component in the generated doc definitions.
 *
 * @param {string} componentName A name of component.
 * @return {string}
 */
export const getDocPath = componentName => _.find(
  path => new RegExp(`${__PATH_SEP__}${componentName}.js$`).test(path),
  docPaths,
)

/**
 * Get generated doc definitions of the passed component.
 *
 * @param {string} componentName A name of component.
 * @return {object}
 */
export const getDocInfo = componentName => _.get(getDocPath(componentName), docInfo)

/**
 * Get props definitions of the passed component from the generated doc definitions.
 *
 * @param {string} componentName A name of component.
 * @return {array}
 */
export const getDocProps = componentName => _.get('props', getDocInfo(componentName))

/**
 * Get a component description of the passed component from the generated doc definitions.
 *
 * @param {string} componentName A name of component.
 * @return {array} An array of lines that represents the description.
 */
export const getDocDescription = componentName => _.get('docBlock.description', getDocInfo(componentName))

/**
 * Get subcomponents of the passed component.
 *
 * @param {string} componentName A name of component.
 * @return {array} An array of subcomponent names.
 */
export const getDocSubComponents = componentName => _.map(
  '_meta.name',
  _.filter(component => _.get('_meta.parent', component) === componentName, semanticUIReact),
)

/**
 * Get POSIX path no matter the OS path separator, use '/'.
 *
 * @param {string} componentName A name of component.
 * @return {string}
 */
export const getPosixPath = componentName => getDocPath(componentName)
  .replace(new RegExp(_.escapeRegExp(__PATH_SEP__), 'g'), '/')

/**
 * Get link to the source on Github of passed component.
 *
 * @param {string} componentName A name of component.
 * @return {string}
 */
export const getDocGithubSourceUrl = componentName => `${repoURL}/blob/master/${getPosixPath(componentName)}`

/**
 * Get link to the Semantic UI Docs of the passed component.
 *
 * @param {string} componentName A name of component.
 * @param {string} type A type of a component.
 * @return {string}
 */
export const getDocSemanticUiUrl = (componentName, type) => `https://semantic-ui.com/${type}s/${componentName}`
  .toLowerCase()

/**
 * Get items that marked as @see in component doc.
 *
 * @param {string} componentName A name of component.
 * @return {array} Returns an array of objects that contain info about a related component.
 */
export const getDocSeeItems = componentName => _.map(({ description }) => {
  const seeMeta = _.get('_meta', semanticUIReact[description])

  if (!seeMeta) return null
  const { type, name } = seeMeta

  return { description, name, type }
}, _.filter(['title', 'see'], _.get('docBlock.tags', getDocInfo(componentName))))
