export const TRANSITION_STATUS_INITIAL = 'INITIAL'
export const TRANSITION_STATUS_ENTERED = 'ENTERED'
export const TRANSITION_STATUS_ENTERING = 'ENTERING'
export const TRANSITION_STATUS_EXITED = 'EXITED'
export const TRANSITION_STATUS_EXITING = 'EXITING'
export const TRANSITION_STATUS_UNMOUNTED = 'UNMOUNTED'

/**
 * @param {Object} [options]
 * @param {String} [options.status]
 * @param {Boolean} [options.mountOnShow]
 * @param {Boolean} [options.transitionOnMount]
 * @param {Boolean} [options.visible]
 * @param {Boolean} [options.unmountOnHide]
 */
export function computeStatuses(options) {
  const { mountOnShow, status, transitionOnMount, visible, unmountOnHide } = options

  if (visible) {
    if (status === TRANSITION_STATUS_INITIAL) {
      if (transitionOnMount) {
        return {
          animating: true,
          status: TRANSITION_STATUS_ENTERING,
          nextStatus: TRANSITION_STATUS_ENTERED,
        }
      }

      return {
        animating: false,
        status: TRANSITION_STATUS_ENTERED,
        nextStatus: undefined,
      }
    }

    if (status === TRANSITION_STATUS_UNMOUNTED) {
      return {
        animating: true,
        status: TRANSITION_STATUS_ENTERING,
        nextStatus: TRANSITION_STATUS_ENTERED,
      }
    }

    if (status === TRANSITION_STATUS_EXITED || status === TRANSITION_STATUS_EXITING) {
      return {
        animating: true,
        status: TRANSITION_STATUS_ENTERING,
        nextStatus: TRANSITION_STATUS_ENTERED,
      }
    }

    if (status === TRANSITION_STATUS_ENTERING) {
      return {}
    }

    /* istanbul ignore else */
    if (status === TRANSITION_STATUS_ENTERED) {
      return {
        animating: false,
        status: TRANSITION_STATUS_ENTERED,
        nextStatus: undefined,
      }
    }
  }

  if (status === TRANSITION_STATUS_INITIAL) {
    if (mountOnShow || unmountOnHide) {
      return {
        animating: false,
        status: TRANSITION_STATUS_UNMOUNTED,
        nextStatus: undefined,
      }
    }

    return {
      animating: false,
      status: TRANSITION_STATUS_EXITED,
      nextStatus: undefined,
    }
  }

  if (status === TRANSITION_STATUS_ENTERED || status === TRANSITION_STATUS_ENTERING) {
    return {
      animating: true,
      status: TRANSITION_STATUS_EXITING,
      nextStatus: unmountOnHide ? TRANSITION_STATUS_UNMOUNTED : TRANSITION_STATUS_EXITED,
    }
  }

  if (status === TRANSITION_STATUS_EXITING) {
    return {}
  }

  if (status === TRANSITION_STATUS_EXITED) {
    return {
      animating: false,
      status: TRANSITION_STATUS_EXITED,
      nextStatus: undefined,
    }
  }

  /* istanbul ignore else */
  if (status === TRANSITION_STATUS_UNMOUNTED) {
    return {
      animating: false,
      status: TRANSITION_STATUS_UNMOUNTED,
      nextStatus: undefined,
    }
  }

  /* istanbul ignore next */
  throw new Error(
    `Transition:computeStatuses(): an unexpected status transition: { visible: ${visible}, status: ${status} }`,
  )
}
