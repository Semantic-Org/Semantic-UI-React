import _ from 'lodash';
import META from 'src/utils/Meta';
import getUnhandledProps from 'src/utils/getUnhandledProps';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import $ from 'jquery';

export default class Checkbox extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    settings: PropTypes.object,
    type: PropTypes.string,
  };

  componentDidMount() {
    this.element = $(this.refs.element);
    this.element.checkbox(this.props.settings);
  }

  componentWillUnmount() {
    this.element.off();
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Checkbox',
    type: META.type.module,
  };

  render() {
    let type = this.props.type;

    if (!type) {
      type = 'checkbox';
      if (_.includes(this.props.className, 'radio')) {
        type = 'radio';
      }
    }

    const classes = classNames(
      'sd-checkbox',
      'ui',
      this.props.className,
      // auto apply fitted class to compact white space when there is no label
      // http://semantic-ui.com/modules/checkbox.html#fitted
      {fitted: !this.props.label},
      'checkbox'
    );

    const props = getUnhandledProps(this);

    return (
      <div className={classes} ref='element'>
        <input {...props} type={type} />
        <label>{this.props.label}</label>
      </div>
    );
  }
}
