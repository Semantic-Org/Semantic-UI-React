import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class ButtonTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Button'
          description='A standard button'
          examplePath='elements/Button/Types/ButtonButtonExample'
        />
        <ComponentExample
          title='Emphasis'
          description='Button formatting can reflect different types of emphasis'
          examplePath='elements/Button/Types/ButtonEmphasisExample'
        />
        <ComponentExample
          title='Animated'
          description='Buttons can animate to show additional or hidden content'
          examplePath='elements/Button/Types/ButtonAnimatedExample'
        />
        <ComponentExample
          title='Labeled'
          description='A button can be accompanied by a label'
          examplePath='elements/Button/Types/ButtonLabeledExample'
        />
        <ComponentExample
          title='Icon'
          description='A button can be made of only an icon'
          examplePath='elements/Button/Types/ButtonIconExample'
        />
        <ComponentExample
          title='Labeled Icon'
          description='A button can use an icon as a label'
          examplePath='elements/Button/Types/ButtonLabeledIconExample'
        />
        <ComponentExample
          title='Basic'
          description='The basic button has a subtle appearance'
          examplePath='elements/Button/Types/ButtonBasicExample'
        />
        <ComponentExample
          title='Inverted'
          description='A button can be formatted to appear on a dark background'
          examplePath='elements/Button/Types/ButtonInvertedExample'
        />
      </ExampleSection>
    );
  }
}
