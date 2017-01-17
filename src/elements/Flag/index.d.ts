import * as React from 'react';
import { SemanticCOUNTRY } from '../..';

interface FlagProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /** Flag name, can use the two digit country code, the full name, or a common alias. */
  name: SemanticCOUNTRY;
}

export const Flag : React.StatelessComponent<FlagProps>;
