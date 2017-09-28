import _ from 'lodash/fp'

import * as semanticUIReact from 'src'
import { META } from 'src/lib'

export * from './constants'
export getComponentGroup from './getComponentGroup'
export getSeeItems from './getSeeItems'
export scrollToAnchor from './scrollToAnchor'

/**
 * Get the Webpack Context for all doc site examples.
 */
export const exampleContext = require.context('docs/app/Examples/', true, /(\w+Example\w*|index)\.js$/)

export const parentComponents = _.flow(
  _.filter(META.isParent),
  _.sortBy('_meta.name'),
)(semanticUIReact)
