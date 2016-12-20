import _ from 'lodash/fp'
import * as semanticUIReact from 'src'
import { META } from 'src/lib'

export const typeOrder = [
  META.TYPES.ELEMENT,
  META.TYPES.COLLECTION,
  META.TYPES.VIEW,
  META.TYPES.MODULE,
  META.TYPES.ADDON,
]

export const parentComponents = _.flow(
  _.filter(META.isParent),
  _.sortBy('_meta.name')
)(semanticUIReact)

/**
 * Get the Webpack Context for all doc site examples.
 */
export const exampleContext = require.context('docs/app/Examples/', true, /(\w+Example\w*|index)\.js$/)

export const repoURL = 'https://github.com/Semantic-Org/Semantic-UI-React'
export const semanticUIDocsURL = 'http://semantic-ui.com/'
export const semanticUIRepoURL = 'https://github.com/Semantic-Org/Semantic-UI'
export const semanticUICSSRepoURL = 'https://github.com/Semantic-Org/Semantic-UI-CSS'
