import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

class Row extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    stretched: PropTypes.bool,
    style: PropTypes.object,
  };

  render() {
    let classes = classNames('sd-row', this.props.className, {stretched: this.props.stretched}, 'row');
    return (
      <div className={classes} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

export default Row;
