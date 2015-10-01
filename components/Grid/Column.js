import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

class Column extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.oneOf(_.range(1, 17)),
  };

  render() {
    let columnWidth = {
      1: 'one wide',
      2: 'two wide',
      3: 'three wide',
      4: 'four wide',
      5: 'five wide',
      6: 'six wide',
      7: 'seven wide',
      8: 'eight wide',
      9: 'nine wide',
      10: 'ten wide',
      11: 'eleven wide',
      12: 'twelve wide',
      13: 'thirteen wide',
      14: 'fourteen wide',
      15: 'fifteen wide',
      16: 'sixteen wide',
    };
    let classes = classNames('sd-column', columnWidth[this.props.width], 'column');
    return (
      <div
        className={classes}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Column;
