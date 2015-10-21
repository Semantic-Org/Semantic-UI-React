import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class List extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    let classes = classNames('sd-list', 'ui', this.props.className, 'list');
    return (
      <div {...this.props} className={classes}></div>
    );
  }
}
