import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class List extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    let classes = classNames('sd-list', 'ui', this.props.className, 'list');
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}
