import { ReactMouseEvents, SemanticCOUNTRY } from '../..';
import * as React from 'react';

// Flag
// ----------------------------------
interface FlagProps extends ReactMouseEvents<any> {

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /** Flag name, can use the two digit country code, the full name, or a common alias */
  name: SemanticCOUNTRY,
}

export class Flag extends React.Component<FlagProps, void> {
}