import cx from 'classnames'
import React, { createElement, Component, PropTypes } from 'react'

import META from '../../utils/Meta'

export default class _Header extends Component {
  static propTypes = {
    _headerElement: PropTypes.string,
    _sdClass: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.node,
    image: PropTypes.node,
  }

  static defaultProps = {
    _headerElement: 'div',
    _sdClass: 'sd-header',
  }

  static _meta = {
    library: META.library.stardust,
    name: '_Header',
    type: META.type.element,
  };

  render() {
    const content = this.props.image || this.props.icon
      ? <div className='content'>{this.props.children}</div>
      : this.props.children

    return createElement(this.props._headerElement, {
      ...this.props,
      className: cx(
        this.props._sdClass,
        'ui',
        this.props.className,
        'header'
      ),
    }, content)
  }
}
