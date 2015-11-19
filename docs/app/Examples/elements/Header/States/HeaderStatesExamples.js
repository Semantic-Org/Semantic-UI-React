import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class HeaderStatesExamples extends Component {
  render() {
    return (
      <ExampleSection title='States'>
        <ComponentExample
          title='Disabled'
          description='A header can show that it is inactive'
          examplePath='elements/Header/States/HeaderDisabledExample'
        />
      </ExampleSection>
    );
  }
}
