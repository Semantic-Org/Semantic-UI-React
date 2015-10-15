import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class ModalFooter extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  render() {
    let classes = classNames(
      'sd-modal-footer',
      this.props.className,
      'actions'
    );
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}
