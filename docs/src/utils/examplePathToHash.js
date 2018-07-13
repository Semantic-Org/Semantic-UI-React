import _ from 'lodash/fp'
import parseExamplePath from './parseExamplePath'

/**
 * Creates a short hash path from an example filename.
 *
 * Typical Hash structure   ${pathname}-${section}-${exampleName}
 * shorten to new structure ${section} -          -${exampleName without "component-example"}
 * @param {string} examplePath
 */
const examplePathToHash = (examplePath) => {
  const { displayName, section, exampleName } = parseExamplePath(examplePath)

  // ButtonExample => Button
  // ButtonExampleButton => Button
  // ButtonExampleActive => Active
  const shortExampleName = exampleName.replace(`${displayName}Example`, '').replace('.js', '')

  return _.kebabCase(`${section}-${shortExampleName || displayName}`)
}

export default examplePathToHash
