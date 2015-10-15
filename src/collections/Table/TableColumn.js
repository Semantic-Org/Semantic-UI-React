import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class TableColumn extends Component {
  static propTypes = {
    cellRenderer: PropTypes.func,
    className: PropTypes.string,
    dataKey: PropTypes.string,
    headerRenderer: PropTypes.func,
  };

  render() {
    let classes = classNames(
      'sd-table-column',
      this.props.className
    );
    return <div {...this.props} className={classes}></div>;
  }
}
