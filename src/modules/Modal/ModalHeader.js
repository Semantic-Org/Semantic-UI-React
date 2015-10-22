import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';

export default class ModalHeader extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'ModalHeader',
    type: META.type.module,
    parent: 'Modal',
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
