import * as React from 'react'

export interface PortalInnerProps extends StrictPortalInnerProps {
  [key: string]: any
}

export interface StrictPortalInnerProps {
  /** Primary content. */
  children: React.ReactNode

  /** Called with a ref to the inner node. */
  innerRef?: React.Ref<any>

  /** The node where the portal should mount. */
  mountNode?: any

  /**
   * Called when the PortalInner is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount?: (nothing: null, data: PortalInnerProps) => void

  /**
   * Called when the PortalInner is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount?: (nothing: null, data: PortalInnerProps) => void
}

declare class PortalInner extends React.Component<PortalInnerProps, {}> {}

export default PortalInner
