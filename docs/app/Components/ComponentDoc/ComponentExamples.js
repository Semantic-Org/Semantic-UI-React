import React, {Component, PropTypes} from 'react';
import {Segment} from 'stardust';
import exampleContext from 'docs/app/utils/ExampleContext';

export default class ComponentExamples extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  render() {
    let examples = exampleContext.keys()
      .filter(path => path.includes(`/${this.props.name}Examples.js`))
      .map(path => {
        let Example = exampleContext(path);
        return <Example />;
      });

    let content = (
      <Segment className='basic vertical'>
        <h2 className='ui header'>Examples</h2>
        {examples}
      </Segment>
    );

    return (
      <div className='stardust-examples'>
        {!!examples.length && content}
      </div>
    );
  }
}
