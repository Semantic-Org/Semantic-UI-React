import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class StatisticTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Statistic'
          description='A statistic can display a value with a label above or below it.'
          examplePath='views/Statistic/Types/StatisticStatisticExample'
        />
      </ExampleSection>
    );
  }
}
