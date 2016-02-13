import React, { Children, Component, PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'

export default class DropdownItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'DropdownItem',
    parent: 'Dropdown',
    type: META.type.module,
  }

  render() {
    const { children, className, description, icon, text, value, ...rest } = this.props
    const classes = cx(
      'sd-dropdown-item',
      'item',
      className
    )

    // add default dropdown icon if item contains another menu
    let iconName = icon
    if (!icon) {
      Children.map(children, (child) => {
        iconName = child.type && child.type.name === 'DropdownMenu' && 'dropdown'
      })
    }

    const iconClasses = cx(
      'sd-dropdown-item-icon',
      iconName,
      'icon'
    )

    return (
      <div className={classes} data-value={value} data-text={text} {...rest}>
        {description && <span className='description'>{description}</span>}
        {iconName && <i className={iconClasses} />}
        {text}
        {children}
      </div>
    )
  }
}
