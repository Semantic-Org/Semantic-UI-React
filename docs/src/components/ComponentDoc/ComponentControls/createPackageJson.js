import * as _ from 'lodash'
import { externals } from 'docs/src/components/ComponentDoc/ExampleEditor/renderConfig'

const name = 'semantic-ui-example'
const description = 'An exported example from Semantic UI React, https://react.semantic-ui.com/'

function createDependencies(code) {
  // Will include only required packages intentionally like "react" or required by a current example
  const filteredPackages = _.pickBy(
    externals,
    (declaration, importName) =>
      declaration.required || new RegExp(`from ['|"]${importName}['|"]`).exec(code),
  )

  return {
    ..._.mapValues(filteredPackages, (pkg) => pkg.version),
    // required to enable all features due old templates in https://github.com/codesandbox/codesandbox-importers
    // https://github.com/microsoft/fluent-ui-react/issues/1519
    'react-scripts': 'latest',
  }
}

const createPackageJson = (code) => ({
  content: JSON.stringify(
    {
      name,
      version: '1.0.0',
      description,
      main: 'index.js',
      dependencies: createDependencies(code),
    },
    null,
    2,
  ),
})

export default createPackageJson
