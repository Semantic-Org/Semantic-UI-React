import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class ModalHeader extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  render() {
    const classes = classNames(
      'sd-modal-header',
      this.props.className,
      'header'
    );
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}
