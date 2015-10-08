import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Input extends Component {
  static propTypes = {
    className: PropTypes.string,
    dataContent: PropTypes.string,
    defaultValue: PropTypes.string,
    iconClass: PropTypes.string,
    ref: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
  };

  render() {
    let icon = <i className={this.props.iconClass} />;
    let classes = classNames(
      'sd-input',
      'ui',
      this.props.className,
      {icon: !!this.props.iconClass},
      'input'
    );
    let inputProps = _.clone(this.props);
    delete inputProps.className;
    return (
      <div className={classes}>
        <input {...inputProps} />
        {this.props.iconClass && icon}
      </div>
    );
  }
}
