import * as React from 'react';
import { SemanticFLOATS, SemanticVERTICALALIGNMENTS } from '../..';

export interface ListContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for ListDescription. */
  description?: any;

  /** An list content can be floated left or right. */
  floated?: SemanticFLOATS;

  /** Shorthand for ListHeader. */
  header?: any;

  /** An element inside a list can be vertically aligned. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

declare const ListContent: React.StatelessComponent<ListContentProps>;

export default ListContent;
