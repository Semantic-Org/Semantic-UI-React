import * as React from 'react';

export interface RefProps {
  [key: string]: any;

  /** Primary content. */
  children: React.ReactNode;

  /**
   * Called when componentDidMount.
   *
   * @param {HTMLElement} node - Referred node.
   */
  innerRef: (node: HTMLElement) => void;
}

type withRefComponent = <P>(component: React.ReactType) => React.StatelessComponent<P>;

declare const Ref: React.ComponentClass<RefProps>;

export default Ref;
export const withRef: withRefComponent;
