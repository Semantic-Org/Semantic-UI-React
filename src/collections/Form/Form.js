import _ from 'lodash';
import React, {Children, Component, PropTypes} from 'react';
import Button from 'src/elements/Button/Button';
import classNames from 'classnames';

class Form extends Component {
  static propTypes = {
    children: function(props, propName, componentName) {
      let formButtons = [];

      // Recursively search through all children of Form component and confirm
      // at least one button exists, and at least one button is type submit.
      function loopThruChildren(obj) {
        Children.forEach(obj, (child) => {
          // Check immediate children is type of button
          if (_.has(child, 'type') && child.type === Button) {
            formButtons.push(child.props.type);
          }
          // loop through child's children to find buttons
          if (_.has(child, 'props.children') && _.isObject(child.props.children)) {
            loopThruChildren(child.props.children);
          }
        });
      }

      loopThruChildren(props.children);

      if (formButtons.length === 0 || !_.include(formButtons, 'submit')) {
        return new Error('`Form` must have `Button` child with type of "submit".');
      }
    },
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

export default Form;
