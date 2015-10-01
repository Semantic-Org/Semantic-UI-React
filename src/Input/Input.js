import React, {Component, PropTypes} from 'react';
import Field from '../Field/Field';
import $ from 'jquery';
import classNames from 'classnames';

class Input extends Component {
  static propTypes = {
    dataContent: PropTypes.string,
    defaultValue: PropTypes.string,
    iconClass: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    ref: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    ref: 'popper',
    type: 'text',
  };

  componentWillMount() {
    this.elm = $(React.findDOMNode(this.refs[this.props.ref]));
    if (this.props.dataContent) {
      this.elm.popup({
        on: 'focus',
      });
    }
  }

  handleChange = (e) => {
    this.props.onChange(e);
  };

  render() {
    let icon = <i className={this.props.iconClass} />;
    let hasIcon = !!this.props.iconClass;
    let classes = classNames('sd-input', 'ui', 'left', {icon: hasIcon}, 'input');
    return (
      <Field label={this.props.label}>
        <div className={classes}>
          <input
            {...this.props}
            onChange={this.handleChange}
            data-content={this.props.dataContent}
          />
          {this.props.iconClass && icon}
        </div>
      </Field>
    );
  }
}

export default Input;
