import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

class Grid extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    divided: PropTypes.bool,
    padded: PropTypes.bool,
    stretched: PropTypes.bool,
    style: PropTypes.object,
  };

  render() {
    let classes = classNames(
      'sd-grid',
      this.props.className,
      'ui',
      {padded: this.props.padded},
      {'equal width': this.props.stretched},
      {divided: this.props.divided},
      'grid',
    );
    return (
      <div className={classes} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

export default Grid;
