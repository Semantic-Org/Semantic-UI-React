import cx from 'classnames'
import React, { PropTypes } from 'react'
import META from '../../utils/Meta';
import {
  getUnhandledProps,
  useAlignedProp,
  useKeyOnly,
} from '../../utils/propUtils'

/**
 * A container limits content to a maximum width
 */
function Container(props) {
  const {
    text, aligned, fluid,
    children, className,
  } = props

  const classes = cx('sd-container ui',
    useKeyOnly(text, 'text'),
    useAlignedProp(aligned),
    useKeyOnly(fluid, 'fluid'),
    'container',
    className
  )

  const rest = getUnhandledProps(Container, props)

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Container._meta = {
  library: META.library.semanticUI,
  name: 'Container',
  type: META.type.element,
  props: {
    aligned: ['left', 'center', 'right', 'justified'],
  },
}

Container.propTypes = {
  /** Primary content of the Container */
  children: PropTypes.node,

  /** Classes to add to the container className. */
  className: PropTypes.string,

  /** Reduce maximum width to more naturally accommodate text */
  text: PropTypes.bool,

  /** Align container content to left */
  aligned: PropTypes.oneOf(Container._meta.props.aligned),

  /** Container has no maximum with */
  fluid: PropTypes.bool,
}

export default Container
