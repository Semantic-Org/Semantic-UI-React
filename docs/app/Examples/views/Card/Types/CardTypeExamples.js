import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class CardTypeExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Card'
          description='A card displays site content in a manner similar to a playing card.'
          examplePath='views/Statistic/Types/StatisticBottomLabelExample'
        />
        <ComponentExample
          examplePath='views/Statistic/Types/StatisticTopLabelExample'
        />
        <ComponentExample
          title='Statistic Group'
          description='A group of statistics'
          examplePath='views/Statistic/Types/StatisticGroupExample'
        />
      </ExampleSection>
    )
  }
}
