import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class VariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Variations'>
        <ComponentExample
          title='Icon'
          description='An input can be formatted with an icon'
          examplePath='elements/Input/Variations/Icon'
        />
        <ComponentExample
          title='Labeled'
          description='An input can be formatted with an label'
          examplePath='elements/Input/Variations/Labeled'
        />
        <ComponentExample
          title='Action'
          description='An input can be formatted to alert the user to an action they may perform'
          examplePath='elements/Input/Variations/Action'
        />
        <ComponentExample examplePath='elements/Input/Variations/ActionExtra' />
        <ComponentExample
          title='Transparent'
          description='A transparent input has no background'
          examplePath='elements/Input/Variations/Transparent'
        />
        <ComponentExample
          title='Inverted'
          description='An input can be formatted to appear on dark backgrounds'
          examplePath='elements/Input/Variations/Inverted'
        />
        <ComponentExample
          title='Fluid'
          description='An input can take on the size of its container'
          examplePath='elements/Input/Variations/Fluid'
        />
        <ComponentExample
          title='Size'
          description='An input can vary in sizee'
          examplePath='elements/Input/Variations/Size'
        />

      </ExampleSection>
    );
  }
}
