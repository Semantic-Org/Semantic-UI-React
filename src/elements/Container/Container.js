import cx from 'classnames'
import React, { PropTypes } from 'react'
import META from '../../utils/Meta'
import { getUnhandledProps, useTextAlignProp, useKeyOnly } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'

/**
 * A container limits content to a maximum width
 */
function Container(props) {
  const { text, textAlign, fluid, children, className } = props
  const classes = cx(
    'ui',
    useKeyOnly(text, 'text'),
    useKeyOnly(fluid, 'fluid'),
    useTextAlignProp(textAlign),
    'container',
    className
  )
  const rest = getUnhandledProps(Container, props)

  return <div className={classes} {...rest}>{children}</div>
}

Container._meta = {
  library: META.library.semanticUI,
  name: 'Container',
  type: META.type.element,
  props: {
    textAlign: sui.textAlignments,
  },
}

Container.propTypes = {
  /** Primary content of the Container */
  children: PropTypes.node,

  /** Classes to add to the container className. */
  className: PropTypes.string,

  /** Reduce maximum width to more naturally accommodate text */
  text: PropTypes.bool,

  /** Container has no maximum with */
  fluid: PropTypes.bool,

  /** Align container text */
  textAlign: PropTypes.oneOf(Container._meta.props.textAlign),
}

export default Container
