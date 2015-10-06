import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import getExamples from '../Example/GetExamples';
import Example from '../Example/Example';
import {Segment} from 'stardust';

export default class extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  render() {
    let exampleDocs = getExamples(this.props.name);
    let examples = _.map(exampleDocs, (doc, i) => {
      return <Example key={i} code={doc.code} component={doc.component} />;
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
