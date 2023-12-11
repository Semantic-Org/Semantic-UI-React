const { execSync } = require('child_process')
const { readFile, writeFile } = require('fs/promises')

async function defaultProps(code) {
  const lines = code.split('\n')
  const defaultPropsBeginIndex = lines.findIndex((line) => line.includes('.defaultProps = {'))
  const defaultPropsEndIndex =
    lines.slice(defaultPropsBeginIndex).findIndex((line) => line === '}') + defaultPropsBeginIndex
  const componentName = lines[defaultPropsBeginIndex].match(/^(\S+)\.defaultProps/)[1]
  if (!componentName) {
    return code
  }
  lines[defaultPropsBeginIndex] = lines[defaultPropsBeginIndex].replace(
    /^\S+\.defaultProps\s+=/,
    'function getDefaultProps() { return',
  )
  lines[defaultPropsEndIndex] = '}}'
  const functionExpressionIndex = lines.findIndex(
    (line) => line.startsWith(`const ${componentName} =`) && line.includes('forwardRef(function'),
  )
  if (functionExpressionIndex === -1) {
    return code
  }
  lines[functionExpressionIndex] = lines[functionExpressionIndex].replace('props', 'partialProps')
  lines.splice(
    functionExpressionIndex + 1,
    0,
    `const props = defaults(partialProps, getDefaultProps())`,
  )
  lines.unshift('import { defaults } from "lodash"')
  const result = lines.join('\n')
  return result
}

;(async function main() {
  // const paths = ['./src/collections/Message/MessageItem.js']
  const paths = execSync('git ls-files | grep -P js$ | xargs grep -lF ".defaultProps ="')
    .toString()
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line)
  const results = await Promise.all(
    paths.map((path) =>
      Promise.resolve()
        .then(() => readFile(path, 'utf8'))
        .then(defaultProps)
        .then((code) => writeFile(path, code, 'utf8'))
        .then(() => {})
        .catch((error) => ({ path, error })),
    ),
  )
  const errorResutls = results.filter((payload) => payload).filter(({ error }) => error)
  if (errorResutls.length) {
    // eslint-disable-next-line no-console
    console.error(errorResutls)
  }
  execSync(`prettier --write ${paths.join(' ')}`)
})()
