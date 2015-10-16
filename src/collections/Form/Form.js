import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  serializeJson = () => {
    let form = React.findDOMNode(this.refs.form);
    let json = {};

    _.each(['input', 'textarea', 'select'], (tag) => {
      _.each(form.getElementsByTagName(tag), (node, index, arr) => {
        let name = node.getAttribute('name');

        switch (node.getAttribute('type')) {
          case 'checkbox':
            json[name] = {checked: node.checked};
            break;

          case 'radio':
            json[name] = {
              value: _.find(arr, {name: name, checked: true}).value
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

  render() {
    let classes = classNames(
      'sd-form',
      'ui',
      this.props.className,
      'form',
    );
    return (
      <form {...this.props} className={classes} ref='form'>
        {this.props.children}
      </form>
    );
  }
}
