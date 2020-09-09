import { Ref } from '@fluentui/react-component-ref'
import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  useClassNamesOnNode,
  useKeyOnly,
} from '../../lib'

/**
 * A modal has a dimmer.
 */
function ModalDimmer(props) {
  const { blurring, children, className, centered, content, inverted, mountNode, scrolling } = props
  const ref = React.useRef()

  const classes = cx(
    'ui',
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(!centered, 'top aligned'),
    'page modals dimmer transition visible active',
    className,
  )
  const bodyClasses = cx(
    'dimmable dimmed',
    useKeyOnly(blurring, 'blurring'),
    useKeyOnly(scrolling, 'scrolling'),
  )

  const rest = getUnhandledProps(ModalDimmer, props)
  const ElementType = getElementType(ModalDimmer, props)

  useClassNamesOnNode(mountNode, bodyClasses)
  React.useEffect(() => {
    if (ref.current && ref.current.style) {
      ref.current.style.setProperty('display', 'flex', 'important')
    }
  }, [])

  return (
    <Ref innerRef={ref}>
      <ElementType {...rest} className={classes}>
        {childrenUtils.isNil(children) ? content : children}
      </ElementType>
    </Ref>
  )
}

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
