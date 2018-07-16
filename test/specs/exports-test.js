import fs from 'fs'
import _ from 'lodash'
import path from 'path'

import * as semanticUIReact from 'src/index.js'
import { componentInfo } from 'test/utils'
import config from '../../config'

const components = fs
  .readdirSync(config.paths.docsSrc('componentInfo'))
  .map(file => componentInfo(path.basename(file, '.info.json')))

describe('exports', () => {
  _.forEach(components, (component) => {
    describe(component.displayName, () => {
      // ----------------------------------------
      // Is exported or private
      // ----------------------------------------
      // detect components like: semanticUIReact.H1
      const isTopLevelAPIProp = _.has(semanticUIReact, component.constructorName)

      // find the apiPath in the semanticUIReact object
      const foundAsSubcomponent = _.isFunction(_.get(semanticUIReact, component.apiPath))

      // require all components to be exported at the top level
      it('is exported at the top level', () => {
        expect(isTopLevelAPIProp).toBeTruthy()
      })

      if (component.isChild) {
        it('is a static component on its parent', () => {
          expect(foundAsSubcomponent).toBeTruthy()
        })
      }
    })
  })
})
