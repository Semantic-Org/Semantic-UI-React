import _ from 'lodash';
import $ from 'jquery';
import classNames from 'classnames';
import React, {Component, PropTypes, findDOMNode} from 'react';

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })),
  };

  componentDidMount() {
    this.element = $(findDOMNode(this.refs.select));
    this.element.dropdown();
  }

  componentDidUpdate(prevProps, prevState) {
    this.element.dropdown('refresh');
  }

  componentWillUnmount() {
    this.element.off();
  }

  render() {
    const options = _.map(this.props.options, (opt, i) => {
      return <option key={i} value={opt.value}>{opt.text}</option>;
    });
    const classes = classNames(
      'sd-dropdown',
      'ui',
      this.props.className,
      'dropdown'
    );

    const props = _.clone(this.props);
    delete props.options;

    return (
      <select {...props} className={classes} ref='select'>
        {options}
      </select>
    );
  }
}
