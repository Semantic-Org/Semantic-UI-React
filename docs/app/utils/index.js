import _ from 'lodash/fp'

import * as semanticUIReact from 'src'
import { META } from 'src/lib'

export * from './constants'
export * from './docs'
export exampleContext from './exampleContext'
export scrollToAnchor from './scrollToAnchor'

export const parentComponents = _.flow(
  _.filter(META.isParent),
  _.sortBy('_meta.name'),
)(semanticUIReact)
