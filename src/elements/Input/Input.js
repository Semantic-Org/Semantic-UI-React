import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Input extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataContent: PropTypes.string,
    defaultValue: PropTypes.string,
    icon: PropTypes.string,
    ref: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
  };

  render() {
    // TODO: replace with <Icon /> once it is merged
    let iconClasses = classNames(
      this.props.icon,
      'icon',
    );
    let icon = <i className={iconClasses} />;
    let classes = classNames(
      'sd-input',
      'ui',
      this.props.className,
      'input'
    );
    let inputProps = _.clone(this.props);
    delete inputProps.className;
    delete inputProps.children;
    return (
      <div className={classes}>
        <input {...inputProps} />
        {this.props.icon && icon}
        {this.props.children}
      </div>
    );
  }
}
