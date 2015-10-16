import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class TypesExample extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Input'
          description='A standard input field'
          examplePath='elements/Input/Types/Input'
        />
      </ExampleSection>
    );
  }
}
