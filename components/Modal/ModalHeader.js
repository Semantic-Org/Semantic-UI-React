import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class ModalHeader extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  render() {
    let classes = classNames('sd-modal-header', this.props.className, 'header');
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default ModalHeader;
