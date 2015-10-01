import _ from 'lodash';
import React, {Component, PropTypes} from 'react';

/**
 * Lists a Component's @example tags in colored code blocks.
 */
class ComponentExamples extends Component {
  static propTypes = {
    /**
     * Array of strings of example content.
     */
    examples: PropTypes.array
  };

  render() {
    let examples = _.map(this.props.examples, (example, i) => {
      let lines = _.map(example.split('\n'), (line, j) => <div key={j}>{line}</div>);
      return <pre key={i} className='ui green segment'>{lines}</pre>;
    });

    return (
      <div>
        {examples}
      </div>
    );
  }
}

export default ComponentExamples;
