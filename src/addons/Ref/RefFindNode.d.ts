import * as React from 'react'

export interface RefFindNodeProps extends StrictRefFindNodeProps {
  [key: string]: any
}

export interface StrictRefFindNodeProps {
  /** Primary content. */
  children?: React.ReactElement<any>

  /**
   * Called when a child component will be mounted or updated.
   *
   * @param {HTMLElement} node - Referred node.
   */
  innerRef?: React.Ref<any>
}

declare class RefFindNode extends React.Component<RefFindNode, {}> {}

export default RefFindNode
