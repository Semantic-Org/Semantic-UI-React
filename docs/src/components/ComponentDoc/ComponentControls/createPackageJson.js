import * as _ from 'lodash'
import { externals } from 'docs/src/components/ComponentDoc/ExampleEditor/renderConfig'

const name = 'semantic-ui-example'
const description = 'An exported example from Semantic UI React, https://react.semantic-ui.com/'
const dependencies = {
  ..._.mapValues(externals, () => 'latest'),
  // required to enable all features due old templates in https://github.com/codesandbox/codesandbox-importers
  'react-scripts': 'latest',
}

const createPackageJson = () => ({
  content: JSON.stringify(
    {
      name,
      version: '1.0.0',
      description,
      main: 'index.js',
      dependencies,
    },
    null,
    2,
  ),
})

export default createPackageJson
