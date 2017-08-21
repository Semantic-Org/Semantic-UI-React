import _ from 'lodash/fp'
import * as semanticUIReact from 'src'
import { META } from 'src/lib'

export const typeOrder = [
  META.TYPES.ELEMENT,
  META.TYPES.COLLECTION,
  META.TYPES.VIEW,
  META.TYPES.MODULE,
  META.TYPES.BEHAVIOR,
  META.TYPES.ADDON,
]

export const parentComponents = _.flow(
  _.filter(META.isParent),
  _.sortBy('_meta.name'),
)(semanticUIReact)

const mathSign = Math.sign || function (x) {
  const val = +x

  if (val === 0 || isNaN(val)) return val
  return val > 0 ? 1 : -1
}

/**
 * Get the Webpack Context for all doc site examples.
 */
export const exampleContext = require.context('docs/app/Examples/', true, /(\w+Example\w*|index)\.js$/)

export const repoURL = 'https://github.com/Semantic-Org/Semantic-UI-React'
export const semanticUIDocsURL = 'https://semantic-ui.com/'
export const semanticUIRepoURL = 'https://github.com/Semantic-Org/Semantic-UI'
export const semanticUICSSRepoURL = 'https://github.com/Semantic-Org/Semantic-UI-CSS'

export const scrollToAnchor = () => {
  const anchor = location.hash && document.querySelector(location.hash)
  const offsetY = window.scrollY || window.pageYOffset

  // no scroll to target, stop
  if (!anchor) return

  const elementTop = Math.round(anchor.getBoundingClientRect().top)

  // scrolled to element, stop
  if (elementTop === 0) return

  // hit max scroll boundaries, stop
  const isScrolledToTop = offsetY === 0
  const isScrolledToBottom = offsetY + document.body.clientHeight === document.body.scrollHeight
  const scrollStep = Math.ceil((Math.abs(elementTop / 8))) * mathSign(elementTop)

  if ((isScrolledToBottom && scrollStep > 0) || (isScrolledToTop && scrollStep < 0)) return

  // more scrolling to do!
  scrollBy(0, scrollStep)
  requestAnimationFrame(scrollToAnchor)
}
