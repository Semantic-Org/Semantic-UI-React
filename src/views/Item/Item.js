import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  META,
} from '../../lib'
import ItemItems from './ItemItems'

export default class Item extends Component {
  static propTypes = {
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

  static defaultProps = {
    contentClassName: 'middle aligned',
  }

  static _meta = {
    name: 'Item',
    type: META.TYPES.VIEW,
  }

  static Items = ItemItems

  render() {
    const { children, className, contentClassName, description, extra, header, image, meta, ...rest } = this.props

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

    return (
      <div {...rest} className={classes}>
        {image && <div className={imageClasses}><img {...imageProps} /></div>}}
        {content && <div className={contentClasses}>{content}</div>}
      </div>
    )
  }
}
