import prettier from 'prettier/standalone'
import prettierConfig from '../../../.prettierrc.json'

const { printWidth } = prettierConfig.overrides.find(
  ({ files }) => files === 'docs/src/examples/**/*.js',
).options

delete prettierConfig.$schema
delete prettierConfig.overrides

// Heads up!
// Please use this function directly and don't reexport it in utils.
// https://github.com/prettier/prettier/issues/4959

const formatCode = (code, parser = 'babylon') => {
  if (!code) return ''

  const formatted = prettier.format(code, {
    ...prettierConfig,
    printWidth,
    parser,
    plugins: window.prettierPlugins,
  })

  return formatted.replace(/^;</, '<') // remove beginning comma in JSX/HTML
}

export default formatCode
