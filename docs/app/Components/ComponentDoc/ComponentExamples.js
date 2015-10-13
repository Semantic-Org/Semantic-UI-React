import React, {Component, PropTypes} from 'react';
import {Segment} from 'stardust';

// build a context of all docs/app/Examples/**/*Examples.js files
let req = require.context('docs/app/Examples/', true, /\/[\w]+Examples\.js$/);
export default class ComponentExamples extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  render() {
    let examples = req.keys()
      .filter(path => path.includes(`/${this.props.name}Examples.js`))
      .map(path => {
        let Examples = req(path);
        return <Examples />;
      });

    let content = (
      <Segment className='basic vertical'>
        <h3>Examples:</h3>
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
