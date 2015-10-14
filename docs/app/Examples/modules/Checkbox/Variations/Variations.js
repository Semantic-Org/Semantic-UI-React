import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';

export default class extends Component {
  render() {
    return (
      <div>
        <ComponentExample
          title='Fitted'
          description='A fitted checkbox does not leave padding for a label'
          examplePath='modules/Checkbox/Variations/Fitted'
        />
      </div>
    );
  }
}
