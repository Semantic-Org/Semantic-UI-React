import React, {Component, PropTypes} from 'react';

export default class ExampleSection extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
  };

  render() {
    return (
      <div>
        <h3 className='ui dividing header' style={{margin: '2em 0'}}>
          {this.props.title}
        </h3>
        {this.props.children}
      </div>
    );
  }
}
