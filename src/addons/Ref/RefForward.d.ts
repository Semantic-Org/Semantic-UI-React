import * as React from 'react'

export interface RefForwardProps extends StrictRefForwardProps {
  [key: string]: any
}

export interface StrictRefForwardProps {
  /** Primary content. */
  children?: React.ReactElement<any>

  /**
   * Called when a child component will be mounted or updated.
   *
   * @param {HTMLElement} node - Referred node.
   */
  innerRef?: React.Ref<any>
}

declare class RefForward extends React.Component<RefForwardProps, {}> {}

export default RefForward
