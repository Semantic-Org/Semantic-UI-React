import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class ButtonVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Variations'>
        <ComponentExample
          title='Social'
          description='A button can be formatted to link to a social website'
          examplePath='elements/Button/Variations/ButtonSocialExample'
        />
        <ComponentExample
          title='Size'
          description='Buttons can have assorted sizes'
          examplePath='elements/Button/Variations/ButtonSizeExample'
        />
        <ComponentExample
          title='Floated'
          description='A button can be aligned to the left or right of its container'
          examplePath='elements/Button/Variations/ButtonFloatedExample'
        />
        <ComponentExample
          title='Colored'
          description='A button can have different containers'
          examplePath='elements/Button/Variations/ButtonColoredExample'
        />
        <ComponentExample
          title='Compact'
          description='Buttons can have reduced padding'
          examplePath='elements/Button/Variations/ButtonCompactExample'
        />
        <ComponentExample
          title='Toggle'
          description='A button can be formatted to toggle on or off'
          examplePath='elements/Button/Variations/ButtonToggleExample'
        />
        <ComponentExample
          title='Positive/Negative'
          description='A button can visually indicate consequence'
          examplePath='elements/Button/Variations/ButtonPositiveNegativeExample'
        />
        <ComponentExample
          title='Fluid'
          description='A button can take the width of its container'
          examplePath='elements/Button/Variations/ButtonFluidExample'
        />
        <ComponentExample
          title='Circular'
          description='A button can be circular'
          examplePath='elements/Button/Variations/ButtonCircularExample'
        />
        <ComponentExample
          title='Vertically Attached'
          description='A button can be attached to the top or bottom of other content'
          examplePath='elements/Button/Variations/ButtonVerticallyAttachedExample'
        />
        <ComponentExample
          title='Horizontally Attached'
          description='A button can be attached to the left or right of other content'
          examplePath='elements/Button/Variations/ButtonHorizontallyAttachedExample'
        />
      </ExampleSection>
    );
  }
}
