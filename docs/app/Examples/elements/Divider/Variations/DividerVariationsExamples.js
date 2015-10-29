import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class DividerTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Inverted'
          description='A divider can have its colors inverted'
          examplePath='elements/Divider/Variations/DividerInvertedExample'
        />
        <ComponentExample
          title='Fitted'
          description='A divider can be fitted, without any space above or below it'
          examplePath='elements/Divider/Variations/DividerFittedExample'
        />
        <ComponentExample
          title='Hidden'
          description='A hidden divider divides content without creating a dividing line'
          examplePath='elements/Divider/Variations/DividerHiddenExample'
        />
        <ComponentExample
          title='Section'
          description='A divider can provide greater margins to divide sections of content'
          examplePath='elements/Divider/Variations/DividerSectionExample'
        />
        <ComponentExample
          title='Clearing'
          description='A divider can clear the contents above it'
          examplePath='elements/Divider/Variations/DividerClearingExample'
        />
      </ExampleSection>
    );
  }
}
