import * as React from 'react'

import { SemanticTRANSITIONS } from '../../'
import { TransitionPropDuration } from './Transition'

interface WithTransitionOptions {
  visibleProp?: string
}

export type WithTransitionProp = {
  /** Named animation event to used. Must be defined in CSS. */
  animation?: SemanticTRANSITIONS;

  /** A component can animate like jQuery slideUp() and slideDown(). */
  animateHeight?: boolean;

  /** Duration of the CSS transition animation in milliseconds. */
  duration?: number | string | TransitionPropDuration;
}

export interface WithTransitionProps {
  transition?: WithTransitionProp
}

type TransitionedComponent<T> = React.ComponentType<T & WithTransitionProps>

declare function withTransition(
  options?: WithTransitionOptions,
): <T extends {}>(fn: TransitionedComponent<T>) => React.ComponentType<T>

export default withTransition
