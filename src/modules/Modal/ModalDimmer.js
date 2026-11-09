import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getComponentType,
  useClassNamesOnNode,
  getKeyOnly,
  useMergedRefs,
} from '../dropdown/lib'

const ModalDimmer = React.forwardRef(
  (
    {
      as,
      blurring = false,
      children,
      className,
      centered = true,
      content,
      inverted = false,
      mountNode,
      scrolling = false,
      ...rest
    },
    ref
  ) => {
    const elementRef = useMergedRefs(ref, React.useRef())

    const classes = cx(
      'ui',
      getKeyOnly(inverted, 'inverted'),
      getKeyOnly(!centered, 'top aligned'),
      'page modals dimmer transition visible active',
      className
    )
    const bodyClasses = cx(
      'dimmable dimmed',
      getKeyOnly(blurring, 'blurring'),
      getKeyOnly(scrolling, 'scrolling')
    )

    const ElementType = getComponentType({ as })

    useClassNamesOnNode(mountNode, bodyClasses)

    React.useEffect(() => {
      elementRef.current?.style?.setProperty('display', 'flex', 'important')
    }, [elementRef])

    return (
      <ElementType {...rest} className={classes} ref={elementRef}>
        {childrenUtils.isNil(children) ? content : children}
      </ElementType>
    )
  }
)

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
  mountNode: PropTypes.instanceOf(Element),

  /** A dimmer can make body scrollable. */
  scrolling: PropTypes.bool,
}

ModalDimmer.create = createShorthandFactory(ModalDimmer, (content) => {
  return { content }
})
export default ModalDimmer
