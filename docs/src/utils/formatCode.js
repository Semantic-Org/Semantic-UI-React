import prettier from 'prettier/standalone'
import prettierConfig from '../../../.prettierrc.json'

delete prettierConfig.$schema
delete prettierConfig.overrides

const formatCode = (code) => {
  if (!code) return ''

  const formatted = prettier.format(code, {
    ...prettierConfig,
    parser: 'babylon',
    plugins: window.prettierPlugins,
  })

  return formatted
    .replace(/^;</, '<') // remove beginning comma in JSX/HTML
    .replace(/="([\s\S]*?)?"/gm, "='$1'") // single quote JSX
}

export default formatCode
