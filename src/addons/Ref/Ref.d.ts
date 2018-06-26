import * as React from 'react'

export interface RefProps {
  [key: string]: any

  /** Primary content. */
  children?: React.ReactNode

  /**
   * Called when componentDidMount.
   *
   * @param {HTMLElement} node - Referred node.
   */
  innerRef?: (node: HTMLElement) => void
}

declare class Ref extends React.Component<RefProps, {}> {}

export default Ref
