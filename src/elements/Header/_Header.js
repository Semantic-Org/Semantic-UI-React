import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import META from '../../utils/Meta'
import getUnhandledProps from '../../utils/getUnhandledProps'

export default class _Header extends Component {
  static propTypes = {
    _headerElement: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.node,
    image: PropTypes.node,
  }

  static defaultProps = {
    _headerElement: 'h3',
  }

  static _meta = {
    library: META.library.stardust,
    name: '_Header',
    type: META.type.element,
  };

  render() {
    const props = getUnhandledProps(this)
    const children = this.props.image || this.props.icon
      ? <div className='content'>{this.props.children}</div>
      : this.props.children

    return React.createElement(
      this.props._headerElement,
      { ...props },
      this.props.image || this.props.icon,
      children,
    )
  }
}
