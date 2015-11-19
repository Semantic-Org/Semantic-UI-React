import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';

export default class Sub extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Sub',
    type: META.type.element,
  };

  render() {
    const classes = classNames(
      'sub',
      this.props.className,
      'header'
    );
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}
