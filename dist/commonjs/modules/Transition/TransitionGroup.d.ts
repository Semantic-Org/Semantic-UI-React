import * as React from 'react'

import { SemanticTRANSITIONS } from '../../generic'
import { TransitionPropDuration } from './Transition'

export interface TransitionGroupProps extends StrictTransitionGroupProps {
  [key: string]: any
}

export interface StrictTransitionGroupProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Named animation event to used. Must be defined in CSS. */
  animation?: SemanticTRANSITIONS | string

  /** Primary content. */
  children?: React.ReactNode

  /** Whether it is directional animation event or not. Use it only for custom transitions. */
  directional?: boolean

  /** Duration of the CSS transition animation in milliseconds. */
  duration?: number | string | TransitionPropDuration
}

interface TransitionGroupComponent extends React.ComponentClass<TransitionGroupProps> {}

declare const TransitionGroup: TransitionGroupComponent

export default TransitionGroup
