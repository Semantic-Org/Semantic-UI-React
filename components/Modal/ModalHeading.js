import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class ModalHeading extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  render() {
    let classes = classNames('sd-modal-heading', this.props.className, 'header');
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default ModalHeading;
