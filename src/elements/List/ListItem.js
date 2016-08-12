import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

import { META } from '../../lib'
import { createIcon, createImage } from '../../factories'

export default class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    description: PropTypes.node,
    header: PropTypes.string,
    icon: PropTypes.node,
    image: PropTypes.node,
  }

  static _meta = {
    name: 'ListItem',
    type: META.TYPES.ELEMENT,
    parent: 'List',
  }

  render() {
    const { children, className, description, header, icon, image, ...rest } = this.props
    const classes = cx(className, 'item')

    const media = createIcon(icon) || createImage(image)
    const _description = description || children

    let content = header ? [
      header && <div key='header' className='header'>{header}</div>,
      _description && <div key='description' className='description'>{_description}</div>,
    ] : (
      _description
    )

    // wrap content for icon/image layouts
    if (media) content = <div className='content'>{content}</div>

    return (
      <div {...rest} className={classes}>
        {media}
        {content}
      </div>
    )
  }
}
