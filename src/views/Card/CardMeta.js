import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getUnhandledProps,
  META,
  SUI,
  useTextAlignProp,
  withElementType,
} from '../../lib'

/**
 * A card can contain content metadata.
 */
function CardMeta(props) {
  const { as: ElementType, children, className, content, textAlign } = props
  const classes = cx(
    useTextAlignProp(textAlign),
    'meta',
    className,
  )
  const rest = getUnhandledProps(CardMeta, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

CardMeta._meta = {
  name: 'CardMeta',
  parent: 'Card',
  type: META.TYPES.VIEW,
}

CardMeta.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A card meta can adjust its text alignment. */
  textAlign: PropTypes.oneOf(_.without(SUI.TEXT_ALIGNMENTS, 'justified')),
}

export default withElementType(CardMeta)
