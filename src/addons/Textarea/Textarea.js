import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Textarea extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
  };

  render() {
    let classes = classNames(
      'sd-textarea',
      this.props.className
    );
    return (
      <textarea {...this.props} className={classes} />
    );
  }
}
