import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';
import numberToWord from 'utils/numberToWord';

class Column extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.oneOf(_.range(1, 17)),
  };

  render() {
    let classes = classNames(
      'sd-column',
      this.props.width && numberToWord(this.props.width) + ' wide',
      'column'
    );
    return (
      <div className={classes} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

export default Column;
