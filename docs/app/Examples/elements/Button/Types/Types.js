import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class TypesExample extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Button'
          description='A standard button'
          examplePath='elements/Button/Types/Button'
        />
        <ComponentExample
          title='Emphasis'
          description='Button formatting can reflect different types of emphasis'
          examplePath='elements/Button/Types/Emphasis'
        />
        <ComponentExample
          title='Animated'
          description='Buttons can animate to show additional or hidden content'
          examplePath='elements/Button/Types/Animated'
        />
        <ComponentExample
          title='Labeled'
          description='A button can be accompanied by a label'
          examplePath='elements/Button/Types/Labeled'
        />
        <ComponentExample
          title='Icon'
          description='A button can be made of only an icon'
          examplePath='elements/Button/Types/Icon'
        />
        <ComponentExample
          title='Labeled Icon'
          description='A button can use an icon as a label'
          examplePath='elements/Button/Types/LabeledIcon'
        />
        <ComponentExample
          title='Basic'
          description='The basic button has a subtle appearance'
          examplePath='elements/Button/Types/Basic'
        />
        <ComponentExample
          title='Inverted'
          description='A button can be formatted to appear on a dark background'
          examplePath='elements/Button/Types/Inverted'
        />
      </ExampleSection>
    );
  }
}
