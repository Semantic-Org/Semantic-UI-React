import _ from 'lodash/fp'

/**
 * Creates a short hash path from an example filename.
 *
 * Typical Hash structure   ${pathname}-${section}-${exampleName}
 * shorten to new structure ${section} -          -${exampleName without "component-example"}
 * @param {string} examplePath
 */
const examplePathToHash = (examplePath) => {
  const hashParts = examplePath.split('/')

  if (!hashParts.length) return examplePath

  // eslint-disable-next-line no-unused-vars
  const [componentName, section, exampleName] = hashParts.slice(1)

  // ButtonExampleActive => Active
  // PopupExample => Popup
  const shortExampleName = exampleName.replace(`${componentName}Example`, '') || componentName

  return _.kebabCase(`${section}-${shortExampleName}`)
}

export default examplePathToHash
