import React, {Component, PropTypes} from 'react';

class Field extends Component {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
  };

  render() {
    return (
      <div className='field'>
        {this.props.label && <label>{this.props.label}</label>}
        {this.props.children}
      </div>
    );
  }
}

export default Field;
