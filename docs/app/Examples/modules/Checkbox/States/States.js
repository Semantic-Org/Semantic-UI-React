import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';

export default class extends Component {
  render() {
    return (
      <div>
        <ComponentExample
          title='Checked'
          description='A checkbox can come pre-checked'
          examplePath='modules/Checkbox/States/Checked'
        />

        <ComponentExample
          title='Disabled'
          description='Checkboxes can be disabled'
          examplePath='modules/Checkbox/States/Disabled'
        />

        <ComponentExample
          title='ReadOnly'
          description='Make the checkbox unable to be edited by the user'
          examplePath='modules/Checkbox/States/ReadOnly'
        />

      </div>
    );
  }
}
