import _ from 'lodash';
import $ from 'jquery';
import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';
import META from 'src/utils/Meta';
import getUnhandledProps from 'src/utils/getUnhandledProps';

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })),
  };

  componentDidMount() {
    this.element = $(this.refs.select);
    this.element.dropdown();
  }

  componentDidUpdate(prevProps, prevState) {
    this.element.dropdown('refresh');
  }

  componentWillUnmount() {
    this.element.off();
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Dropdown',
    type: META.type.module,
  };

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

    const props = getUnhandledProps(this);

    return (
      <select {...props} className={classes} ref='select'>
        {options}
      </select>
    );
  }
}
