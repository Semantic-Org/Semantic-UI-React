import * as React from 'react'

import { TransitionProps, TRANSITION_STATUSES } from '../../modules/Transition/Transition'
import { PortalProps } from '../Portal/Portal'

export interface TransitionablePortalProps extends StrictTransitionablePortalProps {
  [key: string]: any
}

export interface StrictTransitionablePortalProps {
  /** Primary content. */
  children: React.ReactNode

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   * @param {object} state - Internal state.
   */
  onClose?: (nothing: null, props: PortalProps, state: TransitionablePortalState) => void

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} props - All props.
   * @param {object} state - Internal state.
   */
  onHide?: (nothing: null, props: TransitionProps, state: TransitionablePortalState) => void

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   * @param {object} state - Internal state.
   */
  onOpen?: (nothing: null, props: PortalProps, state: TransitionablePortalState) => void

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} props - All props.
   * @param {object} state - Internal state.
   */
  onStart?: (nothing: null, props: TransitionProps, state: TransitionablePortalState) => void

  /** Controls whether or not the portal is displayed. */
  open?: boolean

  /** Transition props. */
  transition?: TransitionProps
}

export interface TransitionablePortalState {
  transitionStatus: TRANSITION_STATUSES
  portalOpen: boolean
  transitionVisible: boolean
}

declare const TransitionablePortal: React.ComponentClass<TransitionablePortalProps>

export default TransitionablePortal
