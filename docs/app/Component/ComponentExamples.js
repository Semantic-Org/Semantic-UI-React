import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import getExamples from '../Example/GetExamples';
import Example from '../Example/Example';

export default class extends Component {
  static propTypes = {
    componentName: PropTypes.array
  };

  render() {
    let examples = getExamples(this.props.componentName);
    let contents = _.map(examples, (example, i) => <Example key={i} {...example} />);

    return (
      <div>
        {contents}
      </div>
    );
  }
}
