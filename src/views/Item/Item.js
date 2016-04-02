import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import { customPropTypes } from '../../utils/propUtils'
import META from '../../utils/Meta'

import ItemItems from './ItemItems'

export default class Item extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    description: customPropTypes.mutuallyExclusive(['children']),
    extra: PropTypes.node,
    header: PropTypes.node,
    image: PropTypes.node,
    meta: PropTypes.node,
  }

  static defaultProps = {
    contentClassName: 'middle aligned',
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Item',
    type: META.type.view,
  }

  static Items = ItemItems

  render() {
    const { children, className, contentClassName, description, extra, header, image, meta, ...rest } = this.props

    const { className: imageClassName, ...imageProps } = _.get(image, 'props', {})

    const classes = cx('sd-item', className, 'item')
    const imageClasses = cx('sd-item-image ui', imageClassName, 'image')
    const contentClasses = cx('sd-item-content', contentClassName, 'content')

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
