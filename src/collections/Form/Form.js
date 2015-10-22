import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  serializeJson = () => {
    const form = this.refs.form;
    const json = {};

    _.each(['input', 'textarea', 'select'], (tag) => {
      _.each(form.getElementsByTagName(tag), (node, index, arr) => {
        const name = node.getAttribute('name');

        switch (node.getAttribute('type')) {
          case 'checkbox':
            json[name] = {checked: node.checked};
            break;

          case 'radio':
            json[name] = {
              value: _.find(arr, {name, checked: true}).value
            };
            break;

          default:
            json[name] = {value: node.value};
            break;
        }
      });
    });

    return json;
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Form',
    type: META.type.collection,
  };

  render() {
    const classes = classNames(
      'sd-form',
      'ui',
      this.props.className,
      'form'
    );
    return (
      <form {...this.props} className={classes} ref='form'>
        {this.props.children}
      </form>
    );
  }
}
