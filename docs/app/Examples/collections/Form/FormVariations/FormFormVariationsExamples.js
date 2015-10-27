import React, {Component} from 'react';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';

export default class FormFormVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Form Variations'>
        <ComponentExample
          title='Size'
          description='A form can also be small or large.'
          examplePath='collections/Form/FormVariations/FormSizeSmallExample'
        />
        <ComponentExample
          examplePath='collections/Form/FormVariations/FormSizeLargeExample'
        />
      </ExampleSection>
    );
  }
}
