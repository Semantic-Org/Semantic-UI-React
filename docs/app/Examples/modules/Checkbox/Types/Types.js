import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';

export default class extends Component {
  render() {
    return (
      <div>
        <ComponentExample
          title='Checkbox'
          description='A box for checking.'
          examplePath='modules/Checkbox/Types/Checkbox'
        />

        <ComponentExample
          title='Toggle'
          description='A checkbox can toggle.'
          examplePath='modules/Checkbox/Types/Toggle'
        />

        <ComponentExample
          title='Slider'
          description='A checkbox can look like a slider.'
          examplePath='modules/Checkbox/Types/Slider'
        />

        <ComponentExample
          title='Radio'
          description='A checkbox can be formatted as a radio element. This means it is an exclusive option.'
          examplePath='modules/Checkbox/Types/Radio'
        />

        <ComponentExample examplePath='modules/Checkbox/Types/RadioGroup' />
      </div>
    );
  }
}
