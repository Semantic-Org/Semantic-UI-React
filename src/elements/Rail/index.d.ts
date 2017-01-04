import { SemanticFLOATS, SemanticSIZES } from '../..';
import * as React from 'react';

interface RailProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A rail can appear attached to the main viewport. */
  attached?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A rail can appear closer to the main viewport. */
  close?: boolean | 'very';

  /** A rail can create a division between itself and a container. */
  dividing?: boolean;

  /** A rail can attach itself to the inside of a container. */
  internal?: boolean;

  /** A rail can be presented on the left or right side of a container. */
  position: SemanticFLOATS;

  // TODO(zuko): this should not support 'medium' from SemanticSize
  /** A rail can have different sizes. */
  size?: SemanticSIZES,
}
export class Rail extends React.Component<RailProps, void> {
}
