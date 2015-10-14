import React, {Component, PropTypes} from 'react';
import Field from 'src/collections/Form/Field';
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
      <Field label={this.props.label}>
        <textarea {...this.props} className={classes}/>
      </Field>
    );
  }
}
