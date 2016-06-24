import cx from 'classnames'
import React, { PropTypes } from 'react'
import META from '../../utils/Meta';
import { getUnhandledProps, useKeyOnly } from '../../utils/propUtils'

/**
 * A container limits content to a maximum width
 */
function Container(props) {
  const {
    text, left, center, right, justified, fluid,
    children, className,
  } = props

  const classes = cx('sd-container ui',
    useKeyOnly(text, 'text'),
    useKeyOnly(left, 'left aligned'),
    useKeyOnly(center, 'center aligned'),
    useKeyOnly(right, 'right aligned'),
    useKeyOnly(justified, 'justified'),
    useKeyOnly(fluid, 'fluid'),
    'container',
    className
  )

  const ContainerComponent = 'div'
  const rest = getUnhandledProps(Container, props)

  return (
    <ContainerComponent className={classes} {...rest}>
      {children}
    </ContainerComponent>
  )
}

Container._meta = {
  library: META.library.semanticUI,
  name: 'Container',
  type: META.type.element,
}

Container.propTypes = {
  /** Primary content of the Container */
  children: PropTypes.node,

  /** Classes to add to the container className. */
  className: PropTypes.string,

  /** Reduce maximum width to more naturally accomodate text */
  text: PropTypes.bool,

  /** Align container content to left */
  left: PropTypes.bool,

  /** Align container content to center */
  center: PropTypes.bool,

  /** Align container content to right */
  right: PropTypes.bool,

  /** Justify content to available space */
  justified: PropTypes.bool,

  /** Container has no maximum with */
  fluid: PropTypes.bool,
}

export default Container
