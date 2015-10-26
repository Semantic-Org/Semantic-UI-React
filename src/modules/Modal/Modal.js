import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';

class Modal extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    ref: PropTypes.string,
    settings: PropTypes.object,
  };

  static defaultProps = {
    ref: 'modal',
  };

  state = {isShown: false};

  showModal = () => {
    this.setState({isShown: true});
  };

  hideModal = () => {
    this.setState({isShown: false});
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Modal',
    type: META.type.module,
  };

  render() {
    const classes = classNames(
      'sd-modal',
      'ui',
      this.props.className,
      'modal',
      {'transition visible active': this.state.isShown},
    );

    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
