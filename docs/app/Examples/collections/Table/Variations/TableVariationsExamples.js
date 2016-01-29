import React, {Component} from 'react';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';

export default class TableVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Variations'>
        <ComponentExample
          title='Selectable'
          description='A table can make its rows selectable'
          examplePath='collections/Table/Variations/TableSelectableExample'
        />
      </ExampleSection>
    );
  }
}
