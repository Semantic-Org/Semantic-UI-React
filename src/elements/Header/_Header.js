import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';
import getUnhandledProps from 'src/utils/getUnhandledProps';

export default class _Header extends Component {
  static propTypes = {
    _headerElement: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.node,
    image: PropTypes.node,
  };

  static _meta = {
    library: META.library.stardust,
    name: '_Header',
    type: META.type.element,
  };

  render() {
    const classes = classNames(
      'sd-header',
      'ui',
      this.props.className,
      'header'
    );

    const props = getUnhandledProps(this);

    return React.createElement(
      this.props._headerElement,
      _.assign({}, props, {className: classes}),
      this.props.image || this.props.icon,
      this.props.children,
    );
  }
}
