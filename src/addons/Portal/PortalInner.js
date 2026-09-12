import PropTypes from 'prop-types'
import * as React from 'react'
import { createPortal } from 'react-dom'

import {
  isBrowser,
  makeDebugger,
  useEventCallback,
} from '../../../dropdown/lib'
import usePortalElement from './usePortalElement'

const debug = makeDebugger('PortalInner')

const PortalInner = React.forwardRef(
  (
    { children, mountNode = null, onMount = () => {}, onUnmount = () => {} },
    ref
  ) => {
    const handleMount = useEventCallback(() => {
      return onMount(null, {
        children,
        mountNode,
        onMount,
        onUnmount,
      })
    })
    const handleUnmount = useEventCallback(() => {
      return onUnmount(null, {
        children,
        mountNode,
        onMount,
        onUnmount,
      })
    })

    const element = usePortalElement(children, ref)

    React.useEffect(() => {
      debug('componentDidMount()')
      handleMount()
      return () => {
        debug('componentWillUnmount()')
        handleUnmount()
      }
    }, [handleMount, handleUnmount])

    if (!isBrowser()) {
      return null
    }

    return createPortal(element, mountNode || document.body)
  }
)

PortalInner.displayName = 'PortalInner'
PortalInner.propTypes = {
  /** Primary content. */
  children: PropTypes.node.isRequired,

  /** The node where the portal should mount. */
  mountNode: PropTypes.instanceOf(Element),

  /**
   * Called when the portal is mounted on the DOM
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: PropTypes.func,

  /**
   * Called when the portal is unmounted from the DOM
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: PropTypes.func,
}
export default PortalInner
