import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import ItemGroup from './ItemGroup'

function Item(props) {
  const { children, className, contentClassName, description, extra, header, image, meta } = props
  const rest = getUnhandledProps(Item, props)

  const { className: imageClassName, ...imageProps } = _.get(image, 'props', {})

  const classes = cx(className, 'item')
  const imageClasses = cx('ui', imageClassName, 'image')
  const contentClasses = cx(contentClassName, 'content')

  const _description = children || description

  const content = header || meta || extra ? [
    header && <div className='header'>{header}</div>,
    meta && <div className='meta'>{meta}</div>,
    _description && <div className='description'>{_description}</div>,
    extra && <div className='extra'>{extra}</div>,
  ] : [
    _description,
  ]

  const ElementType = getElementType(Item, props)

  return (
    <ElementType {...rest} className={classes}>
      {image && <div className={imageClasses}><img {...imageProps} /></div>}
      {content && <div className={contentClasses}>{content}</div>}
    </ElementType>
  )
}

Item._meta = {
  name: 'Item',
  type: META.TYPES.VIEW,
}

Item.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  children: customPropTypes.every([
    customPropTypes.disallow(['description']),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  description: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.node,
  ]),
  extra: PropTypes.node,
  header: PropTypes.node,
  image: PropTypes.node,
  meta: PropTypes.node,
}

Item.defaultProps = {
  contentClassName: 'middle aligned',
}

Item.Group = ItemGroup

export default Item
