import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.string,
  };

  static defaultProps = {
    options: [],
  };

  render() {
    let options = this.props.options.map((opt, i) => {
      return <option key={i} value={opt.value}>{opt.text}</option>;
    });
    let value = _.isEmpty(this.props.value) ? '' : this.props.value;
    let classes = classNames(
      'sd-dropdown',
      'ui',
      this.props.className,
      'dropdown'
    );
    return (
      <select {...this.props} className={classes} value={value}>
        {options}
      </select>
    );
  }
}
