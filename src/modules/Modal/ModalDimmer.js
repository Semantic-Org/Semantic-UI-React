import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getComponentType,
  getUnhandledProps,
  useClassNamesOnNode,
  getKeyOnly,
  useMergedRefs,
} from '../../lib'

/**
 * A modal has a dimmer.
 */
const ModalDimmer = React.forwardRef(function (props, ref) {
  const { blurring, children, className, centered, content, inverted, mountNode, scrolling } = props
  const elementRef = useMergedRefs(ref, React.useRef())

  const classes = cx(
    'ui',
    getKeyOnly(inverted, 'inverted'),
    getKeyOnly(!centered, 'top aligned'),
    'page modals dimmer transition visible active',
    className,
  )
  const bodyClasses = cx(
    'dimmable dimmed',
    getKeyOnly(blurring, 'blurring'),
    getKeyOnly(scrolling, 'scrolling'),
  )

  const rest = getUnhandledProps(ModalDimmer, props)
  const ElementType = getComponentType(props)

  useClassNamesOnNode(mountNode, bodyClasses)

  React.useEffect(() => {
    elementRef.current?.style?.setProperty('display', 'flex', 'important')
  }, [])

  return (
    <ElementType {...rest} className={classes} ref={elementRef}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

ModalDimmer.displayName = 'ModalDimmer'
ModalDimmer.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A dimmer can be blurred. */
  blurring: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A dimmer can center its contents in the viewport. */
  centered: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A dimmer can be inverted. */
  inverted: PropTypes.bool,

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: PropTypes.any,

  /** A dimmer can make body scrollable. */
  scrolling: PropTypes.bool,
}

ModalDimmer.create = createShorthandFactory(ModalDimmer, (content) => ({ content }))

export default ModalDimmer
