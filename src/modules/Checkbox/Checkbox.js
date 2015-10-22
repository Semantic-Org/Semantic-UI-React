import _ from 'lodash';
import META from 'src/utils/Meta';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import $ from 'jquery';

export default class Checkbox extends Component {
  static propTypes = {
    beforeChecked: PropTypes.func,
    beforeDeterminate: PropTypes.func,
    beforeIndeterminate: PropTypes.func,
    beforeUnchecked: PropTypes.func,
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]),
    defaultChecked: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onChecked: PropTypes.func,
    onDeterminate: PropTypes.func,
    onDisable: PropTypes.func,
    onEnable: PropTypes.func,
    onIndeterminate: PropTypes.func,
    onUnchecked: PropTypes.func,
    type: PropTypes.string,
  };

  componentDidMount() {
    this.container = $(this.refs.container);
    this.input = $(this.refs.input);

    this.container.checkbox({
      onChange: this.props.onChange,
      onChecked: this.props.onChecked,
      onIndeterminate: this.props.onIndeterminate,
      onDeterminate: this.props.onDeterminate,
      onUnchecked: this.props.onUnchecked,
      beforeChecked: this.props.beforeChecked,
      beforeIndeterminate: this.props.beforeIndeterminate,
      beforeDeterminate: this.props.beforeDeterminate,
      beforeUnchecked: this.props.beforeUnchecked,
      onEnable: this.props.onEnable,
      onDisable: this.props.onDisable,
    });
  }

  componentWillUnmount() {
    this.container.off();
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

    const checkboxProps = _.clone(this.props);
    delete checkboxProps.className;
    return (
      <div className={classes} ref='container'>
        <input {...checkboxProps} type={type} ref='checkbox' />
        <label>{this.props.label}</label>
      </div>
    );
  }
}
