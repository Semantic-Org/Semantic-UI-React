import makeDebugger from './makeDebugger'

export AutoControlledComponent from './AutoControlledComponent'
export { getChildMapping, mergeChildMappings } from './childMapping'
export * as childrenUtils from './childrenUtils'

export {
  useKeyOnly,
  useKeyOrValueAndKey,
  useValueAndKey,
  useMultipleProp,
  useTextAlignProp,
  useVerticalAlignProp,
  useWidthProp,
} from './classNameBuilders'

export * as customPropTypes from './customPropTypes'
export eventStack from './eventStack'

export * from './factories'
export getUnhandledProps from './getUnhandledProps'
export getElementType from './getElementType'

export {
  htmlInputAttrs,
  htmlInputEvents,
  htmlInputProps,
  htmlImageProps,
  partitionHTMLProps,
} from './htmlPropsUtils'

export isBrowser from './isBrowser'
export doesNodeContainClick from './doesNodeContainClick'
export leven from './leven'
export createPaginationItems from './createPaginationItems'
export * as SUI from './SUI'

export { numberToWordMap, numberToWord } from './numberToWord'
export normalizeOffset from './normalizeOffset'
export normalizeTransitionDuration from './normalizeTransitionDuration'
export objectDiff from './objectDiff'
export { handleRef, isRefObject } from './refUtils'

// Heads up! We import/export for this module to safely remove it with "babel-plugin-filter-imports"
export { makeDebugger }
