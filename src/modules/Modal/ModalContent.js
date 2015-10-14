import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class ModalContent extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  render() {
    let classes = classNames(
      'sd-modal-content',
      this.props.className,
      'content'
    );
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}
