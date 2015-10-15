import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class extends Component {
  render() {
    return (
      <ExampleSection title='Variations'>
        <ComponentExample
          title='Social'
          description='A button can be formatted to link to a social website'
          examplePath='elements/Button/Variations/Social'
        />
        <ComponentExample
          title='Size'
          description='Buttons can have assorted sizes'
          examplePath='elements/Button/Variations/Size'
        />
        <ComponentExample
          title='Floated'
          description='A button can be aligned to the left or right of its container'
          examplePath='elements/Button/Variations/Floated'
        />
        <ComponentExample
          title='Colored'
          description='A button can have different containers'
          examplePath='elements/Button/Variations/Colored'
        />
        <ComponentExample
          title='Compact'
          description='Buttons can have reduced padding'
          examplePath='elements/Button/Variations/Compact'
        />
        <ComponentExample
          title='Toggle'
          description='A button can be formatted to toggle on or off'
          examplePath='elements/Button/Variations/Toggle'
        />
        <ComponentExample
          title='Positive/Negative'
          description='A button can visually indicate consequence'
          examplePath='elements/Button/Variations/PositiveNegative'
        />
        <ComponentExample
          title='Fluid'
          description='A button can take the width of its container'
          examplePath='elements/Button/Variations/Fluid'
        />
        <ComponentExample
          title='Circular'
          description='A button can be circular'
          examplePath='elements/Button/Variations/Circular'
        />
        <ComponentExample
          title='Vertically Attached'
          description='A button can be attached to the top or bottom of other content'
          examplePath='elements/Button/Variations/VerticallyAttached'
        />
        <ComponentExample
          title='Horizontally Attached'
          description='A button can be attached to the left or right of other content'
          examplePath='elements/Button/Variations/HorizontallyAttached'
        />
      </ExampleSection>
    );
  }
}
