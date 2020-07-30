import prettier from 'prettier/standalone'
import babel from 'prettier/parser-babel'

import prettierConfig from '../../../.prettierrc.json'
import isBrowser from '../../../src/lib/isBrowser'

const { printWidth } = prettierConfig.overrides.find(
  ({ files }) => files === 'docs/src/examples/**/*.js',
).options

delete prettierConfig.$schema
delete prettierConfig.overrides

// Heads up!
// Please use this function directly and don't reexport it in utils.
// https://github.com/prettier/prettier/issues/4959

const formatCode = isBrowser()
  ? (code, parser = 'babel') => {
      if (!code) return ''

      const formatted = prettier.format(code, {
        ...prettierConfig,
        printWidth,
        parser,
        plugins: { babel },
      })

      return formatted.replace(/^;</, '<') // remove beginning semi in JSX/HTML
    }
  : (x) => x

export default formatCode
