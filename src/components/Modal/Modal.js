import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
import classNames from 'classnames';

class Modal extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    ref: PropTypes.string,
    small: PropTypes.bool,
  };

  static defaultProps = {
    ref: 'modal',
  };

  state = {isShown: false}

  showModal = () => {
    this.setState({isShown: true});
  }

  hideModal = () => {
    this.setState({isShown: false});
  };

  render() {
    let classes;
    if(this.state.isShown) {
      classes = classNames('sd-modal', this.props.className, 'ui', {small: this.props.small}, 'modal', 'transition', 'visible', 'active');
    } else {
      classes = classNames('sd-modal', this.props.className, 'ui', {small: this.props.small}, 'modal');
    }

    return (
      <div className={classes} ref={this.props.ref}>
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
