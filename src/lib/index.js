import makeDebugger from './makeDebugger'

export ModernAutoControlledComponent from './ModernAutoControlledComponent'
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
export normalizeTransitionDuration from './normalizeTransitionDuration'
export objectDiff from './objectDiff'
export isRefObject from './isRefObject'

// Heads up! We import/export for this module to safely remove it with "babel-plugin-filter-imports"
export { makeDebugger }

//
// Hooks
//

export useAutoControlledValue from './hooks/useAutoControlledValue'
export useClassNamesOnNode from './hooks/useClassNamesOnNode'
export useEventCallback from './hooks/useEventCallback'
export useForceUpdate from './hooks/useForceUpdate'
export useIsomorphicLayoutEffect from './hooks/useIsomorphicLayoutEffect'
export useMergedRefs, { setRef } from './hooks/useMergedRefs'
export usePrevious from './hooks/usePrevious'
