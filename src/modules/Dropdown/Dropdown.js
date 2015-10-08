import React, {Component, PropTypes} from 'react';
import Field from 'src/collections/Form/Field';

class Select extends Component {
  static propTypes = {
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
    return (
      <Field label={this.props.label}>
        <select className='sd-select ui fluid dropdown' value={value}>
          {options}
        </select>
      </Field>
    );
  }
}

export default Select;
