import _ from 'lodash/fp'

/**
 * Creates a short hash path from an example file pathname.
 *
 * Typical Hash structure   ${pathname}-${section}-${exampleName}
 * shorten to new structure ${section} -          -${exampleName without "component-example"}
 * @param {string} str
 */
const createComponentHash = (str) => {
  const hashParts = str.split('/')
  if (hashParts.length) {
    // get path name
    const componentName = hashParts[1]
    // get shortenHash
    const newHash = hashParts.splice(2)
    // compress example name
    newHash[newHash.length - 1] = newHash[newHash.length - 1].replace(
      new RegExp(`${componentName}Example`, 'i'),
      '',
    )
    return _.kebabCase(newHash.join(' '))
  }
  return str
}

export default createComponentHash
