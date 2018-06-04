import _ from 'lodash/fp'

/**
 * Creates a short hash path from an example filename.
 *
 * Typical Hash structure   ${pathname}-${section}-${exampleName}
 * shorten to new structure ${section} -          -${exampleName without "component-example"}
 * @param {string} examplePath
 */
const examplePathToHash = (examplePath) => {
  const hashParts = examplePath.split('/').filter(part => part !== '.')

  if (!hashParts.length) return examplePath

  // eslint-disable-next-line no-unused-vars
  const [type, componentName, section, exampleName] = hashParts

  // ButtonExample => Button
  // ButtonExampleButton => Button
  // ButtonExampleActive => Active
  const shortExampleName = exampleName.replace(`${componentName}Example`, '').replace('.js', '')

  return _.kebabCase(`${section}-${shortExampleName || componentName}`)
}

export default examplePathToHash
