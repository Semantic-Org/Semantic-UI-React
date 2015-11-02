import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';

export default class Buttons extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Buttons',
    type: META.type.element,
  };

  render() {
    const classes = classNames(
      'sd-buttons',
      'ui',
      this.props.className,
      'buttons'
    );
    return (
      <buttons {...this.props} className={classes}>
        {this.props.children}
      </buttons>
    );
  }
}
