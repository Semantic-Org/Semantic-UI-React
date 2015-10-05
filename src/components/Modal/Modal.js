import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
import classNames from 'classnames';
import SIZES from '../../utils/SIZES';

class Modal extends Component {
  static propTypes = {
    actionRequired: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    ref: PropTypes.string,
    size: PropTypes.oneOf(_.values(SIZES)),
  };

  static defaultProps = {
    actionRequired: false,
    ref: 'modal',
  };

  componentDidMount() {
    this.initializeModal();
  }

  initializeModal = () => {
    this.elm = $(React.findDOMNode(this.refs[this.props.ref]));
    this.elm.modal();
  }

  showModal = () => {
    this.elm = $(React.findDOMNode(this.refs[this.props.ref]));
    if (this.props.actionRequired) {
      // Semantic UI settings, do not allow modal to close without action on button click
      this.elm.modal('setting', 'closable', false).modal('show');
    } else {
      this.elm.modal('show');
    }
  }

  hideModal = () => {
    this.elm = $(React.findDOMNode(this.refs[this.props.ref]));
    this.elm.modal('hide');
  };

  render() {
    let classes = classNames('sd-modal', this.props.className, 'ui', this.props.size, 'modal');
    return (
      <div className={classes} ref={this.props.ref}>
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
