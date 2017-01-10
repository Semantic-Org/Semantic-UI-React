import { SemanticTEXTALIGNMENTS } from '../..';
import * as React from 'react';

// Container
// ----------------------------------
interface ContainerProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode,

  /** Additional classes. */
  className?: string;

  /** Container has no maximum with */
  fluid?: boolean,

  /** Reduce maximum width to more naturally accommodate text */
  text?: boolean,

  /** Describes how the text inside this component should be aligned. */
  textAlign?: SemanticTEXTALIGNMENTS,
}
export class Container extends React.Component<ContainerProps, void> {
}
