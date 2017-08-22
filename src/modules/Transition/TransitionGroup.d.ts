import * as React from 'react';

import { SemanticTRANSITIONS } from '../../';
import { TransitionPropDuration } from './Transition';

export interface TransitionGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Named animation event to used. Must be defined in CSS. */
  animation?: SemanticTRANSITIONS;

  /** Primary content. */
  children?: React.ReactNode;

  /** Duration of the CSS transition animation in milliseconds. */
  duration?: number | string | TransitionPropDuration;
}

interface TransitionGroupComponent extends React.ComponentClass<TransitionGroupProps> {
}

declare const TransitionGroup: TransitionGroupComponent;

export default TransitionGroup;
