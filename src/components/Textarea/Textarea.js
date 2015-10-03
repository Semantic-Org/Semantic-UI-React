import React, {Component, PropTypes} from 'react';
import Field from '../Field/Field';

class Textarea extends Component {
  static propTypes = {
    dataContent: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    ref: PropTypes.string,
    rows: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.string,
  };

  static defaultProps = {
    rows: '3',
    ref: 'textarea',
  };

  handleChange = (e) => {
    this.props.onChange(e);
  };

  render() {
    return (
      <Field label={this.props.label}>
        <textarea
          {...this.props}
          onChange={this.handleChange}
          data-content={this.props.dataContent}
        />
      </Field>
    );
  }
}

export default Textarea;
