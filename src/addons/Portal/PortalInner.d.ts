import * as React from 'react'

export interface PortalInnerProps extends StrictPortalInnerProps {
  [key: string]: any
}

export interface StrictPortalInnerProps {
  /** Primary content. */
  children: React.ReactNode

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

  /** Callback called when inner component decides that (respecting the configuration) Portal should close */
  onClose: (event: React.MouseEvent<HTMLElement>) => void

  /** Controls whether the onClose callback should be invoked when escape is pressed. */
  closeOnEscape: boolean
}

declare const PortalInner: React.FC<PortalInnerProps>

export default PortalInner
