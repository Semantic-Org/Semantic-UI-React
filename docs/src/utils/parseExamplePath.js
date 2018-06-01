/**
 * Return a dictionary of the parts of a component example file path.
 *
 * @param {string} examplePath - A component example's file path.
 * @returns {{
 *   type: string,
 *   displayName: string,
 *   section: string,
 *   exampleName: string
 * }}
 */
const parseExamplePath = (examplePath) => {
  const [type, displayName, section, exampleName] = examplePath.split('/').slice(-4)

  return { type: type.replace(/s$/, ''), displayName, section, exampleName }
}

export default parseExamplePath
