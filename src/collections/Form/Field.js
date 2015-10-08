import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import numberToWord from 'src/utils/numberToWord';

export default class Field extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    label: PropTypes.string,
    width: PropTypes.number,
  };

  render() {
    let classes = classNames(
      'sd-field',
      this.props.width && numberToWord(this.props.width) + ' wide',
      this.props.className,
      'field'
    );
    return (
      <div {...this.props} className={classes}>
        {this.props.label && <label>{this.props.label}</label>}
        {this.props.children}
      </div>
    );
  }
}
