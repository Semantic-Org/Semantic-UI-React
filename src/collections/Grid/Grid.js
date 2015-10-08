import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

export default class Grid extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    let classes = classNames(
      'sd-grid',
      'ui',
      this.props.className,
      'grid',
    );
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}
