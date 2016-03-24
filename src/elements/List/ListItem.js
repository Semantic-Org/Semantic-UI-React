import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'

export default class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    description: PropTypes.node,
    header: PropTypes.string,
    icon: PropTypes.node,
    image: PropTypes.node,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'ListItem',
    type: META.type.element,
    parent: 'List',
  };

  render() {
    const { children, className, description, header, icon, image, ...rest } = this.props
    const classes = cx('sd-list-item', className, 'item')

    const content = !header ? description : (
      <div className='content'>
        <div className='header'>{header}</div>
        {description && <div className='description'>{description}</div>}
      </div>
    )

    return (
      <div {...rest} className={classes}>
        {image || icon}
        {content}
        {children}
      </div>
    )
  }
}
