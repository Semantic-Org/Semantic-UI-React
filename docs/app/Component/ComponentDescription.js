import React, {Component, PropTypes} from 'react';

/**
 * Displays a Component's @description tag.
 */
class ComponentExamples extends Component {
  static propTypes = {
    description: PropTypes.string
  };

  render() {
    return (
      <div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default ComponentExamples;
