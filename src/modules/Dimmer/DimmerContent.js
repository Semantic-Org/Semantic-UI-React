import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  META,
} from '../../lib'

/**
 * A content sub-component for Dimmer.
 */
function DimmerContent(props) {
  const { centerRef, children, content } = props
  const childrenContent = childrenUtils.isNil(children) ? content : children

  if(!childrenContent) return null
  return (
    <div className='content'>
      <div className='center' ref={centerRef}>
        {childrenContent}
      </div>
    </div>
  )
}

DimmerContent._meta = {
  name: 'DimmerContent',
  type: META.TYPES.MODULE,
  parent: 'Dimmer',
}

DimmerContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A dimmable element can blur its contents. */
  blurring: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /* TODO */
  centerRef: PropTypes.func,
}

export default DimmerContent
